'use client';

import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

// A programmatic representation of the office layout since a .glb was not provided.
// This generates a sleek, minimalist blueprint wireframe matching the user's specs.
const ROOMS = [
  { id: 'reception', name: 'Reception', pos: [-8, 0, 8], size: [6, 3, 6] },
  { id: 'lounge', name: 'Waiting Lounge', pos: [-8, 0, 15], size: [6, 2, 5] },
  { id: 'conference', name: 'Conference Room', pos: [8, 0, 5], size: [8, 4, 6] },
  { id: 'ceo', name: 'CEO Cabin', pos: [-6, 0, -8], size: [5, 4, 5] },
  { id: 'manager', name: 'Manager Cabin', pos: [-12, 0, -8], size: [4, 4, 5] },
  { id: 'workspace', name: 'Open Workspace', pos: [5, 0, -5], size: [12, 3, 10] },
  { id: 'pantry', name: 'Pantry', pos: [8, 0, -15], size: [6, 3, 5] },
  { id: 'washrooms', name: 'Washrooms', pos: [-2, 0, -15], size: [5, 3, 5] },
  { id: 'pods', name: 'Meeting Pods', pos: [-12, 0, 0], size: [4, 2.5, 8] },
];

function BlueprintRoom({ room, scrollProgress }: { room: any, scrollProgress: MotionValue<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const [hovered, setHovered] = useState(false);

  // Material: Invisible walls to catch shadow and interaction, with visible edges.
  const wallMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({ 
    color: '#FAFAFA', // Matches background
    transparent: true,
    opacity: hovered ? 0.3 : 0.05, 
    roughness: 1,
    side: THREE.DoubleSide
  }), [hovered]);

  useFrame(() => {
    // Reveal animation logic based on scroll progress (0 to 1)
    const progress = scrollProgress.get();
    
    // Scale up from 0 to 1 rapidly during the first 10% of scroll
    const scale = THREE.MathUtils.clamp(progress * 10, 0, 1);
    
    if (meshRef.current) {
      meshRef.current.scale.set(1, scale, 1);
      // Slight floating animation
      meshRef.current.position.y = (Math.sin(Date.now() * 0.001 + room.pos[0]) * 0.05) * scale;
    }
  });

  return (
    <mesh 
      ref={meshRef}
      position={[room.pos[0], room.size[1] / 2, room.pos[2]]} 
      castShadow 
      receiveShadow
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}
      material={wallMaterial}
    >
      <boxGeometry args={room.size as [number, number, number]} />
      {/* 1px thin black outline */}
      <Edges 
        ref={edgesRef as any}
        linewidth={1} 
        threshold={15} 
        color={hovered ? "#000000" : "#222222"} 
      />
    </mesh>
  );
}

export default function Model({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const floorRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const progress = scrollProgress.get();
    if (floorRef.current) {
      (floorRef.current.material as THREE.Material).opacity = THREE.MathUtils.clamp(progress * 5, 0, 1);
    }
  });

  return (
    <group>
      {/* The main office floor layout */}
      <mesh 
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.01, 0]} 
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#EAEAEA" transparent opacity={0} roughness={1} />
        <Edges linewidth={1} color="#222222" />
      </mesh>

      {/* Render all rooms */}
      {ROOMS.map((room) => (
        <BlueprintRoom key={room.id} room={room} scrollProgress={scrollProgress} />
      ))}
    </group>
  );
}
