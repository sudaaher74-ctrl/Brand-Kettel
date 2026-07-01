'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, SoftShadows } from '@react-three/drei';
import { MotionValue } from 'framer-motion';
import { Suspense } from 'react';
import * as THREE from 'three';
import ExpertiseModel from './ExpertiseModel';

export default function ExpertiseScene({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 15, 20], fov: 45 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <SoftShadows size={15} samples={10} focus={0.5} />
      
      {/* Studio lighting for the white clay & photoreal modes */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={2048}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />
      <directionalLight position={[-10, 10, -10]} intensity={0.5} color="#F5F5DC" />

      <Suspense fallback={null}>
        {/* We pass the scroll progress directly to the programmatic model */}
        <ExpertiseModel scrollProgress={scrollProgress} />
        
        {/* Subtle environment for reflections in the "photorealistic" state */}
        <Environment preset="city" environmentIntensity={0.5} />
      </Suspense>
    </Canvas>
  );
}
