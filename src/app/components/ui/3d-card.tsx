"use client";

import { cn } from "../../lib/utils";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
  ElementType,
  ReactElement,
  Ref,
  forwardRef,
  ComponentRef,
  MutableRefObject,
  ComponentPropsWithoutRef, // For the inner ...rest
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

// CardContainer and CardBody remain the same...
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

// Props that CardItem itself defines and handles for its logic
interface CardItemOwnLogicProps {
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}

// Props for the CardItem component that consumers will use.
// This combines own logic props, 'as', 'children', 'className', and all other valid props for T (including ref).
export type CardItemProps<T extends ElementType = "div"> = {
  as?: T;
  children: React.ReactNode; // children is a common prop
  className?: string;      // className is a common prop
} & CardItemOwnLogicProps &
  Omit<React.ComponentPropsWithRef<T>, "as" | "children" | "className" | keyof CardItemOwnLogicProps>;

// Inner component for implementation
const CardItemInner = <T extends ElementType = "div">(
  props: CardItemProps<T>,
  forwardedRef: Ref<ComponentRef<T>>
) => {
  const {
    as: Tag = "div" as T,
    children, // Destructure children
    className,  // Destructure className
    // Destructure own logic props
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    // 'rest' should now primarily contain attributes from ComponentPropsWithoutRef<T>
    // that were not part of CardItemOwnLogicProps, 'children', or 'className'.
    ...rest
  } = props;

  const localRef = useRef<ComponentRef<T>>(null);
  const [isMouseEntered] = useMouseEnter();

  const setCombinedRef = useCallback(
    (instance: ComponentRef<T> | null) => {
      if (localRef) {
        (localRef as MutableRefObject<ComponentRef<T> | null>).current = instance;
      }
      if (typeof forwardedRef === "function") {
        forwardedRef(instance);
      } else if (forwardedRef) {
        (forwardedRef as MutableRefObject<ComponentRef<T> | null>).current = instance;
      }
    },
    [forwardedRef]
  );

  const handleAnimations = useCallback(() => {
    const element = localRef.current as HTMLElement | null;
    if (!element) return;
    if (isMouseEntered) {
      element.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      element.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered, handleAnimations]);

  // The 'rest' object should align with ComponentPropsWithoutRef<T>
  // after 'as', 'children', 'className', and CardItemOwnLogicProps have been omitted.
  // We explicitly pass className, and ref is handled by forwardRef.
  // So, 'rest' should only contain other valid attributes for Tag.
  return (
    <Tag
      ref={setCombinedRef}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      // Ensure that 'rest' is compatible with what Tag expects (excluding ref, className, children)
      {...(rest as ComponentPropsWithoutRef<T>)} // Cast rest for clarity
    >
      {children}
    </Tag>
  );
};

export const CardItem = forwardRef(CardItemInner) as <T extends ElementType = "div">(
  props: CardItemProps<T>
) => ReactElement | null;

if (typeof CardItem !== "string") {
  (CardItem as React.FC).displayName = "CardItem";
}

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};