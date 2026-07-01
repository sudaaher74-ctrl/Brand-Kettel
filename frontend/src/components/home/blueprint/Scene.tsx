'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, SoftShadows } from '@react-three/drei';
import { MotionValue } from 'framer-motion';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import Model from './Model';

// Camera positions and rotations for each stop
// Stop 0: Initial overview
// Stop 1: Reception
// Stop 2: Conference Room
// Stop 3: CEO Cabin
// Stop 4: Open Workspace
// Stop 5: Pantry
// Stop 6: Final Zoom Out
const STOPS = [
  { pos: new THREE.Vector3(0, 15, 20), rot: new THREE.Euler(-Math.PI / 4, 0, 0) },     // Intro
  { pos: new THREE.Vector3(-8, 3, 8), rot: new THREE.Euler(-0.2, -0.4, 0) },           // Reception
  { pos: new THREE.Vector3(8, 4, 5), rot: new THREE.Euler(-0.3, 0.5, 0) },             // Conference
  { pos: new THREE.Vector3(-6, 4, -8), rot: new THREE.Euler(-0.2, 0.2, 0) },           // CEO Cabin
  { pos: new THREE.Vector3(5, 5, -5), rot: new THREE.Euler(-0.4, -0.2, 0) },           // Workspace
  { pos: new THREE.Vector3(8, 3, -10), rot: new THREE.Euler(-0.1, 0.8, 0) },           // Pantry
  { pos: new THREE.Vector3(0, 25, 5), rot: new THREE.Euler(-Math.PI / 2, 0, 0) },      // Final Top-down
];

function CameraRig({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const dummyCamera = useRef(new THREE.PerspectiveCamera());
  const currentPos = new THREE.Vector3();
  const currentRot = new THREE.Quaternion();
  
  useFrame((state) => {
    // Determine which segment of the scroll we are in
    const progress = scrollProgress.get();
    const segments = STOPS.length - 1;
    
    // Scale progress to the number of segments
    const scaledProgress = progress * segments;
    const currentSegment = Math.min(Math.floor(scaledProgress), segments - 1);
    const segmentProgress = scaledProgress - currentSegment;

    // Smooth step for natural cinematic easing
    const easeProgress = THREE.MathUtils.smoothstep(segmentProgress, 0, 1);

    const startStop = STOPS[currentSegment];
    const endStop = STOPS[currentSegment + 1];

    // Lerp position
    currentPos.lerpVectors(startStop.pos, endStop.pos, easeProgress);
    
    // Slerp rotation
    const qStart = new THREE.Quaternion().setFromEuler(startStop.rot);
    const qEnd = new THREE.Quaternion().setFromEuler(endStop.rot);
    currentRot.slerpQuaternions(qStart, qEnd, easeProgress);

    // Add slight floating parallax based on mouse
    const pointerX = state.pointer.x * 0.5;
    const pointerY = state.pointer.y * 0.5;

    // Apply base position & rotation
    state.camera.position.lerp(currentPos, 0.1);
    state.camera.quaternion.slerp(currentRot, 0.1);

    // Apply mouse parallax (subtle)
    state.camera.position.x += (pointerX - state.camera.position.x * 0.1) * 0.05;
    state.camera.position.y += (pointerY - state.camera.position.y * 0.1) * 0.05;
  });

  return null;
}

export default function Scene({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 15, 20], fov: 45 }}
      gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <color attach="background" args={['#FAFAFA']} />
      <SoftShadows size={25} samples={10} focus={0.5} />
      
      {/* Subtle Apple-style lighting */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight 
        position={[10, 20, 5]} 
        intensity={1.5} 
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
        <CameraRig scrollProgress={scrollProgress} />
        <Model scrollProgress={scrollProgress} />
        
        {/* Soft studio environment reflection */}
        <Environment preset="city" background={false} environmentIntensity={0.2} />
      </Suspense>
    </Canvas>
  );
}
