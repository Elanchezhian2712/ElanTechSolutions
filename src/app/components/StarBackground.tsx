'use client';

import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-expect-error - maath/random/dist/maath-random.esm lacks type definitions
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = () => {
  const ref = useRef<THREE.Points>(null);

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 }),
    []
  );

  useFrame((state, delta) => {
    const cappedDelta = Math.min(delta, 0.05); 
    if (ref.current) {
      ref.current.rotation.x -= cappedDelta / 10;
      ref.current.rotation.y -= cappedDelta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[-1] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]} gl={{ antialias: true }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;