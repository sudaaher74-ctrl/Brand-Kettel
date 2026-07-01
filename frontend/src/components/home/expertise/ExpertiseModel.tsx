'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

export default function ExpertiseModel({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Materials that will be mutated on every frame
  const meshMaterialRef = useRef(new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    roughness: 1,
    metalness: 0,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide
  }));

  const edgesMaterialRef = useRef(new THREE.LineBasicMaterial({
    color: '#111111',
    transparent: true,
    opacity: 1
  }));

  // Helper meshes for the 3 domains (represented abstractly as architectural blocks)
  const commercialRef = useRef<THREE.Mesh>(null);
  const jewelleryRef = useRef<THREE.Mesh>(null);
  const residentialRef = useRef<THREE.Mesh>(null);
  const cameraTargetRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const progress = scrollProgress.get();
    
    // We have 3 sections.
    const sectionIndex = Math.min(Math.floor(progress * 3), 2);
    // Local progress within the current section (0.0 to 1.0)
    const localProgress = (progress * 3) - sectionIndex;

    // 1. Material Transitions (Sketch -> Clay -> Render)
    // 0.0 - 0.3: Pure Sketch (Opacity 0, Edges 1)
    // 0.3 - 0.6: Clay Model (Opacity fades to 1, Color is White, Edges fade to 0)
    // 0.6 - 1.0: Photoreal Render (Color shifts to domain color, Roughness drops for glass/gloss)

    let meshOpacity = 0;
    let edgesOpacity = 1;
    let targetColor = new THREE.Color('#ffffff');
    let targetRoughness = 1;
    let targetTransmission = 0;

    if (localProgress < 0.3) {
      // Sketch Phase
      meshOpacity = 0;
      edgesOpacity = 1;
    } else if (localProgress < 0.6) {
      // Clay Phase
      const clayProgress = (localProgress - 0.3) / 0.3;
      meshOpacity = clayProgress;
      edgesOpacity = 1 - clayProgress;
      targetColor.set('#ffffff'); // White clay
    } else {
      // Render Phase
      const renderProgress = (localProgress - 0.6) / 0.4;
      meshOpacity = 1;
      edgesOpacity = 0;
      
      // Domain-specific "photorealistic" styling
      if (sectionIndex === 0) {
        // Commercial: Corporate blue glass
        targetColor.set('#E8F1F2').lerp(new THREE.Color('#A2C8CC'), renderProgress);
        targetRoughness = 1 - (renderProgress * 0.8);
        targetTransmission = renderProgress * 0.5;
      } else if (sectionIndex === 1) {
        // Jewellery: Warm luxury gold/marble
        targetColor.set('#F2EFE8').lerp(new THREE.Color('#D4AF37'), renderProgress);
        targetRoughness = 1 - (renderProgress * 0.6);
      } else {
        // Residential: Warm cozy wood tones
        targetColor.set('#F2ECE8').lerp(new THREE.Color('#C9A68C'), renderProgress);
        targetRoughness = 1 - (renderProgress * 0.4);
      }
    }

    // Apply material states
    meshMaterialRef.current.opacity = meshOpacity;
    edgesMaterialRef.current.opacity = edgesOpacity;
    meshMaterialRef.current.color.copy(targetColor);
    meshMaterialRef.current.roughness = targetRoughness;
    meshMaterialRef.current.transmission = targetTransmission;

    // 2. Model Visibility Swapping
    if (commercialRef.current && jewelleryRef.current && residentialRef.current) {
      commercialRef.current.visible = sectionIndex === 0;
      jewelleryRef.current.visible = sectionIndex === 1;
      residentialRef.current.visible = sectionIndex === 2;
    }

    // 3. Cinematic Camera Orbit
    if (cameraTargetRef.current) {
      // Spin the entire group slowly as they scroll
      cameraTargetRef.current.rotation.y = progress * Math.PI * 2;
      cameraTargetRef.current.rotation.x = Math.sin(progress * Math.PI) * 0.2;
    }
  });

  return (
    <group ref={cameraTargetRef}>
      {/* 
        NOTE: These are programmatic placeholders. 
        Once the 3D Artist provides the actual .glb files, 
        they can be loaded via useGLTF() and placed here.
      */}

      {/* Domain 0: Commercial (Office Block Structure) */}
      <mesh ref={commercialRef} material={meshMaterialRef.current} castShadow receiveShadow>
        <boxGeometry args={[6, 4, 6]} />
        <Edges material={edgesMaterialRef.current as any} />
        {/* Internal partition */}
        <mesh material={meshMaterialRef.current} position={[0, 0, 1]}>
          <boxGeometry args={[5.8, 3.8, 0.2]} />
          <Edges material={edgesMaterialRef.current as any} />
        </mesh>
      </mesh>

      {/* Domain 1: Jewellery (Display Cases & Curves) */}
      <mesh ref={jewelleryRef} material={meshMaterialRef.current} castShadow receiveShadow visible={false}>
        <cylinderGeometry args={[4, 4, 2, 32]} />
        <Edges material={edgesMaterialRef.current as any} threshold={15} />
        <mesh material={meshMaterialRef.current} position={[0, 1.5, 0]}>
          <cylinderGeometry args={[3.8, 3.8, 1, 32]} />
          <Edges material={edgesMaterialRef.current as any} threshold={15} />
        </mesh>
      </mesh>

      {/* Domain 2: Residential (Pitched Roof House) */}
      <mesh ref={residentialRef} material={meshMaterialRef.current} castShadow receiveShadow visible={false} position={[0, -1, 0]}>
        <boxGeometry args={[5, 3, 7]} />
        <Edges material={edgesMaterialRef.current as any} />
        <mesh material={meshMaterialRef.current} position={[0, 2.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[4.5, 4.5, 7.5]} />
          <Edges material={edgesMaterialRef.current as any} />
        </mesh>
      </mesh>
    </group>
  );
}
