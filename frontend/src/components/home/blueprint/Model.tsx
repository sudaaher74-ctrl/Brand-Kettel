'use client';

import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

// Room Definitions with architectural sketch colors
const ROOMS = [
  { id: 'reception', name: 'Reception', pos: [-8, 0, 8], size: [6, 3, 6], color: '#E8F1F2' }, // Soft blue
  { id: 'lounge', name: 'Waiting Lounge', pos: [-8, 0, 15], size: [6, 2.5, 5], color: '#E8F2E8' }, // Soft green
  { id: 'conference', name: 'Conference Room', pos: [8, 0, 5], size: [8, 3.5, 6], color: '#F2E8E8' }, // Soft red/pink
  { id: 'ceo', name: 'CEO Cabin', pos: [-6, 0, -8], size: [5, 3.5, 5], color: '#F2ECE8' }, // Warm beige
  { id: 'manager', name: 'Manager Cabin', pos: [-12, 0, -8], size: [4, 3.5, 5], color: '#F2E8F2' }, // Soft purple
  { id: 'workspace', name: 'Open Workspace', pos: [5, 0, -5], size: [12, 3.5, 10], color: '#E8EDF2' }, // Soft sky
  { id: 'pantry', name: 'Pantry', pos: [8, 0, -15], size: [6, 3, 5], color: '#F2EFE8' }, // Soft yellow
  { id: 'washrooms', name: 'Washrooms', pos: [-2, 0, -15], size: [5, 3, 5], color: '#EBEBEB' }, // Light grey
];

function RealisticRoom({ room, scrollProgress }: { room: any, scrollProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Matte, colored material to mimic a marker/watercolor architectural sketch
  const wallMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: hovered ? '#FFFFFF' : room.color,
    roughness: 1, // Completely matte like paper
    metalness: 0,
    transparent: true,
    opacity: hovered ? 1 : 0.85, // Slightly translucent like marker ink
    side: THREE.DoubleSide
  }), [hovered, room.color]);

  useFrame(() => {
    const progress = scrollProgress.get();
    const scale = THREE.MathUtils.clamp(progress * 10, 0, 1);
    if (groupRef.current) {
      groupRef.current.scale.set(1, scale, 1);
    }
  });

  const wallThickness = 0.2;
  const [w, h, d] = room.size;

  return (
    <group 
      ref={groupRef} 
      position={room.pos} 
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}
    >
      {/* Floor Plate */}
      <mesh position={[0, 0.05, 0]} receiveShadow material={wallMaterial}>
        <planeGeometry args={[w, d]} />
      </mesh>

      {/* Walls (Left, Right, Back, Front with a gap for door) */}
      <mesh position={[-w/2 + wallThickness/2, h/2, 0]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[wallThickness, h, d]} />
        <Edges linewidth={1} color="#111111" />
      </mesh>
      
      <mesh position={[w/2 - wallThickness/2, h/2, 0]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[wallThickness, h, d]} />
        <Edges linewidth={1} color="#111111" />
      </mesh>

      <mesh position={[0, h/2, -d/2 + wallThickness/2]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[w, h, wallThickness]} />
        <Edges linewidth={1} color="#111111" />
      </mesh>

      {/* Front wall with a door gap */}
      <mesh position={[-w/4, h/2, d/2 - wallThickness/2]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[w/2 - 1, h, wallThickness]} />
        <Edges linewidth={1} color="#111111" />
      </mesh>
      <mesh position={[w/4 + 0.5, h/2, d/2 - wallThickness/2]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[w/2 - 1, h, wallThickness]} />
        <Edges linewidth={1} color="#111111" />
      </mesh>

      {/* Conceptual Furniture Removed */}
    </group>
  );
}

export default function Model({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const floorRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      {/* The main office floor plate */}
      <mesh 
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, 0]} 
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />
        {/* Paper-like off-white floor */}
        <meshStandardMaterial color="#F9F9F6" roughness={1} />
        {/* Subtle grid to look like a blueprint paper / foundation */}
        <gridHelper args={[40, 40, '#D0D0D0', '#E5E5E5']} rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      {/* Render all rooms with colored sketch walls */}
      {ROOMS.map((room) => (
        <RealisticRoom key={room.id} room={room} scrollProgress={scrollProgress} />
      ))}
    </group>
  );
}
