// 'use client';

// import { cn } from "../../lib/utils";

// import React, {
//   createContext,
//   useState,
//   useContext,
//   useRef,
//   useEffect,
//   useCallback,
//   ElementType,
//   ReactElement,
//   Ref,
//   forwardRef,
//   ComponentRef,
//   MutableRefObject,
//   ComponentPropsWithoutRef, // Keep this
// } from "react";

// const MouseEnterContext = createContext<
//   [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
// >(undefined);

// // CardContainer and CardBody remain the same...
// export const CardContainer = ({
//   children,
//   className,
//   containerClassName,
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMouseEntered, setIsMouseEntered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const { left, top, width, height } =
//       containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 25;
//     const y = (e.clientY - top - height / 2) / 25;
//     containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//   };

//   const handleMouseEnter = () => {
//     setIsMouseEntered(true);
//   };

//   const handleMouseLeave = () => {
//     if (!containerRef.current) return;
//     setIsMouseEntered(false);
//     containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   };
//   return (
//     <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
//       <div
//         className={cn(
//           "py-20 flex items-center justify-center",
//           containerClassName
//         )}
//         style={{
//           perspective: "1000px",
//         }}
//       >
//         <div
//           ref={containerRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className={cn(
//             "flex items-center justify-center relative transition-all duration-200 ease-linear",
//             className
//           )}
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     </MouseEnterContext.Provider>
//   );
// };

// export const CardBody = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// interface CardItemOwnLogicProps {
//   translateX?: number | string;
//   translateY?: number | string;
//   translateZ?: number | string;
//   rotateX?: number | string;
//   rotateY?: number | string;
//   rotateZ?: number | string;
// }

// // ======================= THE FIX IS HERE =======================
// export type CardItemProps<T extends ElementType = "div"> = {
//   as?: T;
//   children: React.ReactNode;
//   className?: string;
// } & CardItemOwnLogicProps &
//   // Use ComponentPropsWithoutRef because `ref` is handled by `forwardRef`
//   Omit<
//     ComponentPropsWithoutRef<T>, // <--- CHANGED FROM ComponentPropsWithRef
//     "as" | "children" | "className" | keyof CardItemOwnLogicProps
//   >;
// // =============================================================

// const CardItemInner = <T extends ElementType = "div">(
//   props: CardItemProps<T>,
//   forwardedRef: Ref<ComponentRef<T>>
// ) => {
//   const {
//     as: Tag = "div" as T,
//     children,
//     className,
//     translateX = 0,
//     translateY = 0,
//     translateZ = 0,
//     rotateX = 0,
//     rotateY = 0,
//     rotateZ = 0,
//     ...rest
//   } = props;

//   const localRef = useRef<ComponentRef<T>>(null);
//   const [isMouseEntered] = useMouseEnter();

//   const setCombinedRef = useCallback(
//     (instance: ComponentRef<T> | null) => {
//       // Keep a local ref for animations
//       (localRef as MutableRefObject<ComponentRef<T> | null>).current = instance;
//       // Pass the ref to the parent component if it exists
//       if (typeof forwardedRef === "function") {
//         forwardedRef(instance);
//       } else if (forwardedRef) {
//         (forwardedRef as MutableRefObject<ComponentRef<T> | null>).current = instance;
//       }
//     },
//     [forwardedRef]
//   );
  
//   const handleAnimations = useCallback(() => {
//     const element = localRef.current as HTMLElement | null;
//     if (!element) return;
//     if (isMouseEntered) {
//       element.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
//     } else {
//       element.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
//     }
//   }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);


//   useEffect(() => {
//     handleAnimations();
//   }, [isMouseEntered, handleAnimations]);

//   return (
//     <Tag
//       ref={setCombinedRef}
//       className={cn("w-fit transition duration-200 ease-linear", className)}
//       {...rest} // The cast is no longer needed
//     >
//       {children}
//     </Tag>
//   );
// };

// export const CardItem = forwardRef(CardItemInner) as <T extends ElementType = "div">(
//   props: CardItemProps<T> & { ref?: Ref<ComponentRef<T>> } // Correctly typed for consumers
// ) => ReactElement | null;

// if (typeof CardItem !== "string") {
//   (CardItem as React.FC).displayName = "CardItem";
// }


// export const useMouseEnter = () => {
//   const context = useContext(MouseEnterContext);
//   if (context === undefined) {
//     throw new Error("useMouseEnter must be used within a MouseEnterProvider");
//   }
//   return context;
// };