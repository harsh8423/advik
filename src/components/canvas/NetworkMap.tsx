"use client";

import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Stars, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// --- DATA & TYPES ---

interface City {
    name: string;
    lat: number;
    lon: number;
    type: 'hq' | 'hub' | 'global';
    info: string;
}

const CITIES: City[] = [
    // USA
    { name: "Washington", lat: 38.9072, lon: -77.0369, type: 'hq', info: 'Global Headquarters' }, // Updated HQ
    { name: "Los Angeles", lat: 34.0522, lon: -118.2437, type: 'hub', info: 'West Coast Gateway' },
    { name: "Chicago", lat: 41.8781, lon: -87.6298, type: 'hub', info: 'Midwest Distribution' },
    { name: "Miami", lat: 25.7617, lon: -80.1918, type: 'hub', info: 'LatAm Connection' },
    { name: "Dallas", lat: 32.7767, lon: -96.7970, type: 'hub', info: 'Central Hub' },
    { name: "Seattle", lat: 47.6062, lon: -122.3321, type: 'hub', info: 'Pacific Northwest' },

    // Global
    { name: "London", lat: 51.5074, lon: -0.1278, type: 'global', info: 'European Hub' },
    { name: "Tokyo", lat: 35.6762, lon: 139.6503, type: 'global', info: 'Asia Pacific' },
    { name: "Dubai", lat: 25.2048, lon: 55.2708, type: 'global', info: 'Middle East Hub' },
    { name: "Shanghai", lat: 31.2304, lon: 121.4737, type: 'global', info: 'Manufacturing Center' },
    { name: "Sao Paulo", lat: -23.5505, lon: -46.6333, type: 'global', info: 'South American Hub' },
    { name: "Frankfurt", lat: 50.1109, lon: 8.6821, type: 'global', info: 'Air Freight Center' },
    { name: "Singapore", lat: 1.3521, lon: 103.8198, type: 'global', info: 'Maritime Hub' },
    { name: "Sydney", lat: -33.8688, lon: 151.2093, type: 'global', info: 'Oceania Hub' },
];

interface RouteData {
    start: string;
    end: string;
    mode: 'air' | 'sea' | 'land';
}

const ROUTES: RouteData[] = [
    // Domestic (Land/Air) - Replaced 'New York' with 'Washington'
    { start: 'Los Angeles', end: 'Washington', mode: 'land' },
    { start: 'Seattle', end: 'Chicago', mode: 'land' },
    { start: 'Dallas', end: 'Washington', mode: 'land' },
    { start: 'Miami', end: 'Washington', mode: 'land' },
    { start: 'Los Angeles', end: 'Dallas', mode: 'land' },
    { start: 'Chicago', end: 'Miami', mode: 'air' },

    // International (Air/Sea)
    { start: 'Washington', end: 'London', mode: 'air' },
    { start: 'Los Angeles', end: 'Tokyo', mode: 'sea' },
    { start: 'Washington', end: 'Frankfurt', mode: 'air' },
    { start: 'London', end: 'Dubai', mode: 'air' },
    { start: 'Dubai', end: 'Shanghai', mode: 'sea' },
    { start: 'Tokyo', end: 'Shanghai', mode: 'sea' },
    { start: 'Miami', end: 'Sao Paulo', mode: 'air' },
    { start: 'Los Angeles', end: 'Shanghai', mode: 'sea' },
    { start: 'Singapore', end: 'Sydney', mode: 'sea' },
    { start: 'London', end: 'Singapore', mode: 'air' },
    { start: 'Frankfurt', end: 'Dubai', mode: 'land' },
];

// --- UTILS ---

const GLOBE_RADIUS = 5;

// Convert Lat/Lon to 3D Position on Sphere
const latLongToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
};

// --- VEHICLE COMPONENTS ---

const VehicleGeometry = ({ mode }: { mode: 'air' | 'sea' | 'land' }) => {
    if (mode === 'air') {
        // Simple Airplane shape
        return (
            <group rotation={[0, Math.PI / 2, 0]}>
                {/* Fuselage */}
                <mesh position={[0, 0, 0]}>
                    <coneGeometry args={[0.04, 0.2, 8]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
                {/* Wings */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.25, 0.01, 0.06]} />
                    <meshBasicMaterial color="#E50914" />
                </mesh>
            </group>
        );
    } else if (mode === 'sea') {
        // Simple Ship shape
        return (
            <group>
                <mesh position={[0, 0.02, 0]}>
                    <boxGeometry args={[0.08, 0.04, 0.18]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
                <mesh position={[0, 0.06, -0.04]}>
                    <boxGeometry args={[0.05, 0.06, 0.05]} />
                    <meshBasicMaterial color="#E50914" />
                </mesh>
            </group>
        );
    } else {
        // Simple Truck shape
        return (
            <group>
                <mesh position={[0, 0.02, 0.02]}>
                    <boxGeometry args={[0.06, 0.05, 0.12]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
                <mesh position={[0, 0.025, -0.05]}>
                    <boxGeometry args={[0.065, 0.06, 0.05]} />
                    <meshBasicMaterial color="#E50914" />
                </mesh>
            </group>
        );
    }
};

const Packet = ({ curve, mode }: { curve: THREE.QuadraticBezierCurve3, mode: 'air' | 'sea' | 'land' }) => {
    const groupRef = useRef<THREE.Group>(null);
    const speed = useRef(Math.random() * 0.001 + 0.0005); // Speed varies slightly
    const progress = useRef(Math.random());

    useFrame(() => {
        if (groupRef.current) {
            progress.current += speed.current;
            if (progress.current > 1) progress.current = 0;

            const pos = curve.getPoint(progress.current);
            // const tangent = curve.getTangent(progress.current).normalize(); // Unused

            groupRef.current.position.copy(pos);

            // Orient the vehicle along the path
            // Calculate a "look at" target slightly ahead
            const nextPos = curve.getPoint(Math.min(progress.current + 0.01, 1));
            groupRef.current.lookAt(nextPos);

            // Keep vehicle "up" relative to globe surface (approximate)
            // For a sphere at origin, position vector is the up vector
            const up = pos.clone().normalize();
            groupRef.current.up.copy(up);
            groupRef.current.lookAt(nextPos);
        }
    });

    return (
        <group ref={groupRef}>
            <VehicleGeometry mode={mode} />
        </group>
    );
}

// --- MAIN COMPONENTS ---

const CityMarker: React.FC<{
    city: City;
    onHover: (name: string | null) => void;
    hovered: boolean;
}> = ({ city, onHover, hovered }) => {
    const pos = useMemo(() => latLongToVector3(city.lat, city.lon, GLOBE_RADIUS), [city]);
    const color = city.type === 'hq' ? '#E50914' : city.type === 'hub' ? '#ffffff' : '#3b82f6';
    const size = city.type === 'hq' ? 0.12 : 0.08;

    return (
        <group position={pos}>
            <mesh
                onPointerOver={(e) => { e.stopPropagation(); onHover(city.name); document.body.style.cursor = 'pointer'; }}
                onPointerOut={(e) => { onHover(null); document.body.style.cursor = 'auto'; }}
            >
                <sphereGeometry args={[size, 16, 16]} />
                <meshBasicMaterial color={hovered ? '#E50914' : color} />
            </mesh>

            {/* Glow Halo */}
            <mesh scale={[2, 2, 2]}>
                <sphereGeometry args={[size, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={hovered ? 0.6 : 0.2} />
            </mesh>

            {/* Tooltip */}
            {hovered && (
                <Html distanceFactor={15}>
                    <div className="bg-advik-navy/90 backdrop-blur-md p-3 rounded border border-advik-red/50 w-40 transform -translate-y-12 text-white shadow-xl pointer-events-none select-none">
                        <div className="font-bold text-sm mb-1">{city.name}</div>
                        <div className="text-[10px] uppercase tracking-wider text-advik-red font-bold mb-1">{city.type === 'hq' ? 'Headquarters' : city.type}</div>
                        <div className="text-[10px] text-gray-300 leading-tight">{city.info}</div>
                    </div>
                </Html>
            )}
        </group>
    );
};

const ConnectionArc: React.FC<{
    data: RouteData;
    active: boolean;
    globalHover: boolean
}> = ({ data, active, globalHover }) => {
    const curve = useMemo(() => {
        const startCity = CITIES.find(c => c.name === data.start);
        const endCity = CITIES.find(c => c.name === data.end);

        if (!startCity || !endCity) return null;

        const startPos = latLongToVector3(startCity.lat, startCity.lon, GLOBE_RADIUS);
        const endPos = latLongToVector3(endCity.lat, endCity.lon, GLOBE_RADIUS);

        const mid = startPos.clone().add(endPos).multiplyScalar(0.5);
        const distance = startPos.distanceTo(endPos);

        // Land/Sea routes hug surface more, Air routes go higher
        const altitudeMult = data.mode === 'air' ? 0.8 : 0.3;
        const controlPos = mid.normalize().multiplyScalar(GLOBE_RADIUS + distance * altitudeMult);

        return new THREE.QuadraticBezierCurve3(startPos, controlPos, endPos);
    }, [data]);

    if (!curve) return null;

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Styling based on activity
    // If globalHover is true, but this route is NOT active, dim it significantly
    const opacity = active ? 0.8 : (globalHover ? 0.05 : 0.3); // Increased default opacity for visibility
    const color = '#FF3333'; // Neon Red for all active lines
    const lineWidth = active ? 3 : 1.5;

    return (
        <group>
            {/* @ts-ignore */}
            <line geometry={geometry}>
                <lineBasicMaterial color={color} opacity={opacity} transparent linewidth={lineWidth} />
            </line>
            {/* Only show vehicle if route is active or no specific interaction is happening */}
            {(!globalHover || active) && <Packet curve={curve} mode={data.mode} />}
        </group>
    );
};

const Earth = ({ hoveredCity, setHoveredCity }: { hoveredCity: string | null, setHoveredCity: (n: string | null) => void }) => {
    const groupRef = useRef<THREE.Group>(null);

    // Load Earth Texture
    const [colorMap, normalMap, specularMap] = useTexture([
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
    ]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Slow rotation if not hovering
            const rotationSpeed = hoveredCity ? 0.01 : 0.05;
            groupRef.current.rotation.y += delta * rotationSpeed;
        }
    });

    return (
        <group ref={groupRef} rotation={[0, 0, 0]}>
            {/* The Globe Sphere */}
            <Sphere args={[GLOBE_RADIUS, 64, 64]}>
                <meshPhongMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    specularMap={specularMap}
                    color="#e0f7fa" // Light cyan tint to make it lighter/glowing
                    emissive="#002244" // Emissive glow from inside
                    emissiveIntensity={0.2}
                    specular="#555555"
                    shininess={10}
                />
            </Sphere>

            {/* Atmosphere Glow (Fresnel-like effect via simple slightly larger sphere) */}
            <mesh scale={[1.02, 1.02, 1.02]}>
                <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
                <meshBasicMaterial color="#4f86f7" transparent opacity={0.15} side={THREE.BackSide} />
            </mesh>

            {/* Cities */}
            {CITIES.map(city => (
                <CityMarker
                    key={city.name}
                    city={city}
                    onHover={setHoveredCity}
                    hovered={hoveredCity === city.name}
                />
            ))}

            {/* Routes */}
            {ROUTES.map((route, i) => {
                const isActive = hoveredCity === route.start || hoveredCity === route.end;
                return (
                    <ConnectionArc
                        key={i}
                        data={route}
                        active={isActive}
                        globalHover={!!hoveredCity}
                    />
                );
            })}
        </group>
    )
}

export default function NetworkMap() {
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);

    return (
        <div className="w-full h-full absolute inset-0 z-0 cursor-move">
            {/* cursor-move indicates interactability, parent usually has pointer-events-none, 
          so we must ensure this div allows events or the canvas does.
          The parent in Home.tsx has pointer-events-none on overlay, but this component 
          is rendered in a container. We need to make sure this div captures events. 
      */}
            <Canvas camera={{ position: [0, 6, 14], fov: 45 }} gl={{ alpha: true }}>
                {/* Lighting */}
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={0.8} color="#E50914" />

                {/* Starfield Background */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Earth hoveredCity={hoveredCity} setHoveredCity={setHoveredCity} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}
                    autoRotate={false}
                />
            </Canvas>
        </div>
    );
};
