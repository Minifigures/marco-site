"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles({ count = 50 }: { count?: number }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.002 + Math.random() / 200;
            const xFactor = -30 + Math.random() * 60;
            const yFactor = -15 + Math.random() * 30;
            const zFactor = -15 + Math.random() * 30;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;
        particles.forEach((particle, i) => {
            const { factor, speed, xFactor, yFactor, zFactor } = particle;
            particle.t += speed;
            const t = particle.t;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;

            dummy.position.set(
                xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );
            dummy.scale.setScalar(Math.max(0.2, Math.cos(t) * 0.5));
            dummy.rotation.set(a, b, t);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.15, 0]} />
            <meshStandardMaterial
                color="#00d4ff"
                emissive="#00d4ff"
                emissiveIntensity={0.5}
                transparent
                opacity={0.6}
            />
        </instancedMesh>
    );
}

function WireframeOrb() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2.5, 1]} />
                <meshStandardMaterial
                    color="#7c3aed"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    );
}

function FloatingCode() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
        }
    });

    const symbols = useMemo(() => {
        const items = [];
        for (let i = 0; i < 20; i++) {
            const angle = (i / 20) * Math.PI * 2;
            const radius = 5 + Math.random() * 3;
            items.push({
                position: [
                    Math.cos(angle) * radius,
                    (Math.random() - 0.5) * 6,
                    Math.sin(angle) * radius,
                ] as [number, number, number],
                scale: 0.3 + Math.random() * 0.3,
            });
        }
        return items;
    }, []);

    return (
        <group ref={groupRef}>
            {symbols.map((s, i) => (
                <Float key={i} speed={1 + Math.random()} floatIntensity={0.5}>
                    <mesh position={s.position}>
                        <boxGeometry args={[s.scale, s.scale * 0.1, s.scale * 0.1]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? "#00d4ff" : "#22c55e"}
                            emissive={i % 2 === 0 ? "#00d4ff" : "#22c55e"}
                            emissiveIntensity={0.4}
                            transparent
                            opacity={0.5}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 12], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
                <pointLight position={[-10, -10, -5]} intensity={0.3} color="#7c3aed" />

                <WireframeOrb />
                <FloatingParticles count={40} />
                <FloatingCode />
                <Stars
                    radius={50}
                    depth={50}
                    count={1000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />
            </Canvas>
        </div>
    );
}
