"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

function FloatingCube({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const targetScale = useRef(1);
    const currentScale = useRef(1);
    const targetRotationSpeed = useRef(speed);
    const glowIntensity = useRef(0);

    useFrame((state) => {
        if (!meshRef.current) return;
        
        // Smooth scaling animation on hover
        targetScale.current = hovered ? 1.3 : 1;
        currentScale.current += (targetScale.current - currentScale.current) * 0.1;
        meshRef.current.scale.setScalar(currentScale.current);

        // Faster rotation on hover
        targetRotationSpeed.current = hovered ? speed * 3 : speed;
        const rotationSpeed = targetRotationSpeed.current;
        meshRef.current.rotation.x += 0.01 * rotationSpeed;
        meshRef.current.rotation.y += 0.015 * rotationSpeed;

        // Glow effect on hover
        glowIntensity.current += (hovered ? 1 : 0 - glowIntensity.current) * 0.1;
        
        // Update material emissive for glow
        if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
            meshRef.current.material.emissive = new THREE.Color(color);
            meshRef.current.material.emissiveIntensity = glowIntensity.current * 0.5;
        }
    });

    return (
        <Float speed={speed * (hovered ? 2 : 1)} rotationIntensity={hovered ? 1 : 0.5} floatIntensity={hovered ? 1 : 0.5}>
            <mesh 
                ref={meshRef} 
                position={position}
                onPointerEnter={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = 'pointer';
                    setHovered(true);
                }}
                onPointerLeave={() => {
                    document.body.style.cursor = 'auto';
                    setHovered(false);
                }}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial 
                    color={color} 
                    roughness={hovered ? 0.1 : 0.2} 
                    metalness={hovered ? 1 : 0.8}
                    emissive={color}
                    emissiveIntensity={0}
                />
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
                    <lineBasicMaterial 
                        color="white" 
                        opacity={hovered ? 0.6 : 0.2} 
                        transparent 
                    />
                </lineSegments>
            </mesh>
        </Float>
    );
}

function SceneContent() {
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);
    const { mouse } = useThree();

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Auto-rotation
            groupRef.current.rotation.y += delta * 0.1;
            
            // Mouse interaction - subtle parallax effect
            const targetRotationX = mouse.y * 0.2;
            const targetRotationY = mouse.x * 0.2;
            
            groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
            groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
        }
    });

    const cubes = useMemo(() => {
        const items = [];
        for (let i = 0; i < 20; i++) {
            items.push({
                position: [
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 5 - 5,
                ] as [number, number, number],
                color: Math.random() > 0.7 ? "#E60000" : "#1A1A1A", // Red or Dark Grey
                speed: Math.random() * 2 + 0.5,
            });
        }
        return items;
    }, []);

    return (
        <group ref={groupRef}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#E60000" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="white" />

            {cubes.map((cube, i) => (
                <FloatingCube key={i} {...cube} />
            ))}

            <Environment preset="city" />
        </group>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas gl={{ antialias: true, alpha: true }}>
                <SceneContent />
            </Canvas>
        </div>
    );
}
