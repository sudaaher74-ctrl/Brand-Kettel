'use client';

import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

// Room Definitions
const ROOMS = [
  { id: 'reception', name: 'Reception', pos: [-8, 0, 8], size: [6, 3, 6], hasDesk: true },
  { id: 'lounge', name: 'Waiting Lounge', pos: [-8, 0, 15], size: [6, 2.5, 5], hasSofa: true },
  { id: 'conference', name: 'Conference Room', pos: [8, 0, 5], size: [8, 3.5, 6], hasTable: true },
  { id: 'ceo', name: 'CEO Cabin', pos: [-6, 0, -8], size: [5, 3.5, 5], hasDesk: true },
  { id: 'manager', name: 'Manager Cabin', pos: [-12, 0, -8], size: [4, 3.5, 5], hasDesk: true },
  { id: 'workspace', name: 'Open Workspace', pos: [5, 0, -5], size: [12, 3.5, 10], hasWorkstations: true },
  { id: 'pantry', name: 'Pantry', pos: [8, 0, -15], size: [6, 3, 5], hasCounter: true },
  { id: 'washrooms', name: 'Washrooms', pos: [-2, 0, -15], size: [5, 3, 5] },
];

function RealisticRoom({ room, scrollProgress }: { room: any, scrollProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Minimal glass/plastic material for walls
  const wallMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({ 
    color: hovered ? '#E0E0E0' : '#F5F5F5',
    transparent: true,
    opacity: hovered ? 0.8 : 0.4,
    roughness: 0.1,
    transmission: 0.5,
    thickness: 0.2,
    side: THREE.DoubleSide
  }), [hovered]);

  // Dark sleek material for furniture
  const furnitureMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#222222',
    roughness: 0.8,
  }), []);

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
        <meshBasicMaterial color={hovered ? "#EEEEEE" : "#FAFAFA"} />
      </mesh>

      {/* Walls (Left, Right, Back, Front with a gap for door) */}
      <mesh position={[-w/2 + wallThickness/2, h/2, 0]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[wallThickness, h, d]} />
        <Edges linewidth={1} color="#000000" />
      </mesh>
      
      <mesh position={[w/2 - wallThickness/2, h/2, 0]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[wallThickness, h, d]} />
        <Edges linewidth={1} color="#000000" />
      </mesh>

      <mesh position={[0, h/2, -d/2 + wallThickness/2]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[w, h, wallThickness]} />
        <Edges linewidth={1} color="#000000" />
      </mesh>

      {/* Front wall with a door gap */}
      <mesh position={[-w/4, h/2, d/2 - wallThickness/2]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[w/2 - 1, h, wallThickness]} />
        <Edges linewidth={1} color="#000000" />
      </mesh>
      <mesh position={[w/4 + 0.5, h/2, d/2 - wallThickness/2]} castShadow receiveShadow material={wallMaterial}>
        <boxGeometry args={[w/2 - 1, h, wallThickness]} />
        <Edges linewidth={1} color="#000000" />
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
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
        {/* Subtle grid to look like a blueprint paper / foundation */}
        <gridHelper args={[40, 40, '#E5E5E5', '#F0F0F0']} rotation={[Math.PI / 2, 0, 0]} />
      </mesh>

      {/* Render all rooms with realistic walls and furniture */}
      {ROOMS.map((room) => (
        <RealisticRoom key={room.id} room={room} scrollProgress={scrollProgress} />
      ))}
    </group>
  );
}
