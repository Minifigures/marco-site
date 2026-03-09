"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Stars, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function RotatingMarco() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!groupRef.current) return;
        const t = clock.getElapsedTime();
        groupRef.current.rotation.y = t * 0.2;
        groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
            <group ref={groupRef}>
                {/* Main metallic MARCO text */}
                <Text
                    fontSize={2.8}
                    letterSpacing={0.15}
                    textAlign="center"
                    anchorX="center"
                    anchorY="middle"
                    characters="MARCO"
                >
                    <meshStandardMaterial
                        color="#d0d0e0"
                        metalness={1}
                        roughness={0.08}
                        envMapIntensity={2.5}
                    />
                    MARCO
                </Text>
                {/* Glow layer */}
                <Text
                    fontSize={2.85}
                    letterSpacing={0.15}
                    textAlign="center"
                    anchorX="center"
                    anchorY="middle"
                    characters="MARCO"
                >
                    <meshBasicMaterial color="#00d4ff" transparent opacity={0.08} />
                    MARCO
                </Text>
                {/* Purple reflection layer */}
                <Text
                    fontSize={2.82}
                    letterSpacing={0.15}
                    textAlign="center"
                    anchorX="center"
                    anchorY="middle"
                    characters="MARCO"
                    position={[0, 0, -0.02]}
                >
                    <meshBasicMaterial color="#7c3aed" transparent opacity={0.06} />
                    MARCO
                </Text>
            </group>
        </Float>
    );
}

function OrbitingKeywords() {
    const groupRef = useRef<THREE.Group>(null);
    const keywords = useMemo(
        () => [
            "const", "def", "async", "import", "return",
            "class", "func", "let", "yield", "export",
            "await", "from", "type", "if", "for",
        ],
        []
    );

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.06;
        }
    });

    return (
        <group ref={groupRef}>
            {keywords.map((word, i) => {
                const angle = (i / keywords.length) * Math.PI * 2;
                const radius = 5.5 + (i % 3) * 1.2;
                const y = Math.sin(i * 1.3) * 2.5;
                const colors = ["#00d4ff", "#22c55e", "#7c3aed"];
                return (
                    <Float key={word} speed={0.8 + i * 0.08} floatIntensity={0.3}>
                        <Text
                            position={[
                                Math.cos(angle) * radius,
                                y,
                                Math.sin(angle) * radius,
                            ]}
                            fontSize={0.28}
                            anchorX="center"
                            anchorY="middle"
                            characters={word}
                        >
                            <meshBasicMaterial
                                color={colors[i % 3]}
                                transparent
                                opacity={0.45}
                            />
                            {word}
                        </Text>
                    </Float>
                );
            })}
        </group>
    );
}

function FloatingParticles({ count = 35 }: { count?: number }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                t: Math.random() * 100,
                factor: 20 + Math.random() * 100,
                speed: 0.002 + Math.random() / 200,
                xFactor: -30 + Math.random() * 60,
                yFactor: -15 + Math.random() * 30,
                zFactor: -15 + Math.random() * 30,
            });
        }
        return temp;
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;
        particles.forEach((particle, i) => {
            const { factor, speed, xFactor, yFactor, zFactor } = particle;
            particle.t += speed;
            const t = particle.t;
            dummy.position.set(
                xFactor + Math.cos((t / 10) * factor) + (Math.sin(t) * factor) / 10,
                yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );
            dummy.scale.setScalar(Math.max(0.1, Math.cos(t) * 0.25));
            dummy.rotation.set(t, t * 0.5, t * 0.3);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    const geo = useMemo(() => new THREE.DodecahedronGeometry(0.1, 0), []);
    const mat = useMemo(
        () =>
            new THREE.MeshStandardMaterial({
                color: "#00d4ff",
                emissive: new THREE.Color("#00d4ff"),
                emissiveIntensity: 0.5,
                transparent: true,
                opacity: 0.4,
            }),
        []
    );

    return <instancedMesh ref={mesh} args={[geo, mat, count]} />;
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d4ff" />
                <pointLight position={[-10, -5, -5]} intensity={0.5} color="#7c3aed" />
                <pointLight position={[0, 8, 5]} intensity={0.3} color="#ffffff" />

                <Environment preset="city" />

                <RotatingMarco />
                <OrbitingKeywords />
                <FloatingParticles count={30} />
                <Stars
                    radius={50}
                    depth={50}
                    count={800}
                    factor={3}
                    saturation={0}
                    fade
                    speed={0.5}
                />

                <EffectComposer>
                    <Bloom
                        intensity={0.4}
                        luminanceThreshold={0.2}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
