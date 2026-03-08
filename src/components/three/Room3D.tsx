"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Environment } from "@react-three/drei";
import * as THREE from "three";

/* ====================== ROOM ====================== */
function Room() {
    return (
        <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
                <planeGeometry args={[14, 14]} />
                <meshStandardMaterial color="#0e0e16" />
            </mesh>
            <mesh position={[0, 3, -7]} receiveShadow>
                <planeGeometry args={[14, 9]} />
                <meshStandardMaterial color="#0a0a0f" />
            </mesh>
            <mesh position={[-7, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
                <planeGeometry args={[14, 9]} />
                <meshStandardMaterial color="#0c0c14" />
            </mesh>
            <mesh position={[7, 3, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
                <planeGeometry args={[14, 9]} />
                <meshStandardMaterial color="#0c0c14" />
            </mesh>
        </group>
    );
}

/* ====================== DESK ====================== */
function Desk() {
    return (
        <group position={[0, -0.5, -3.5]}>
            <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
                <boxGeometry args={[4.5, 0.08, 2]} />
                <meshStandardMaterial color="#1a1a25" metalness={0.2} roughness={0.8} />
            </mesh>
            {([[-2, 0, -0.8], [2, 0, -0.8], [-2, 0, 0.8], [2, 0, 0.8]] as [number, number, number][]).map((pos, i) => (
                <mesh key={i} position={pos} castShadow>
                    <boxGeometry args={[0.08, 1.5, 0.08]} />
                    <meshStandardMaterial color="#111118" metalness={0.4} roughness={0.6} />
                </mesh>
            ))}
        </group>
    );
}

/* ====================== MONITOR ====================== */
function Monitor({ onClick }: { onClick: () => void }) {
    const glowRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (glowRef.current) {
            const mat = glowRef.current.material as THREE.MeshBasicMaterial;
            mat.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.05;
        }
    });

    return (
        <group position={[0, 0.8, -4]} onClick={onClick}>
            <mesh position={[0, 0.8, 0]} castShadow>
                <boxGeometry args={[2, 1.2, 0.06]} />
                <meshStandardMaterial color="#111118" metalness={0.6} roughness={0.3} />
            </mesh>
            <mesh position={[0, 0.8, 0.032]}>
                <planeGeometry args={[1.85, 1.05]} />
                <meshBasicMaterial color="#080812" />
            </mesh>
            {/* Glow border */}
            <mesh ref={glowRef} position={[0, 0.8, 0.033]}>
                <planeGeometry args={[1.9, 1.1]} />
                <meshBasicMaterial color="#00d4ff" transparent opacity={0.15} />
            </mesh>
            <Text position={[0, 1.05, 0.04]} fontSize={0.1} anchorX="center" anchorY="middle">
                <meshBasicMaterial color="#00d4ff" />
                MARCO.DEV
            </Text>
            <Text position={[0, 0.85, 0.04]} fontSize={0.06} anchorX="center" anchorY="middle">
                <meshBasicMaterial color="#22c55e" />
                {">"} click to view projects
            </Text>
            <Text position={[0, 0.65, 0.04]} fontSize={0.045} anchorX="center" anchorY="middle">
                <meshBasicMaterial color="#8a8a9a" />
                ~/projects $
            </Text>
            {/* Stand */}
            <mesh position={[0, 0.1, 0]} castShadow>
                <boxGeometry args={[0.12, 0.4, 0.12]} />
                <meshStandardMaterial color="#111118" metalness={0.6} roughness={0.4} />
            </mesh>
            <mesh position={[0, -0.1, 0.1]} castShadow>
                <boxGeometry args={[0.7, 0.03, 0.4]} />
                <meshStandardMaterial color="#111118" metalness={0.6} roughness={0.4} />
            </mesh>
        </group>
    );
}

/* ====================== KEYBOARD ====================== */
function Keyboard() {
    return (
        <group position={[0, 0.28, -3]}>
            <mesh castShadow>
                <boxGeometry args={[1.2, 0.03, 0.45]} />
                <meshStandardMaterial color="#1a1a25" />
            </mesh>
            {Array.from({ length: 4 }).flatMap((_, row) =>
                Array.from({ length: 12 }).map((_, col) => (
                    <mesh
                        key={`${row}-${col}`}
                        position={[-0.5 + col * 0.085, 0.025, -0.17 + row * 0.09]}
                    >
                        <boxGeometry args={[0.06, 0.015, 0.06]} />
                        <meshStandardMaterial
                            color={
                                (row === 0 && col === 0) ? "#00d4ff" :
                                (row === 3 && col > 3 && col < 8) ? "#1a1a25" :
                                "#252530"
                            }
                            emissive={(row === 0 && col === 0) ? "#00d4ff" : "#000000"}
                            emissiveIntensity={(row === 0 && col === 0) ? 0.5 : 0}
                        />
                    </mesh>
                ))
            )}
        </group>
    );
}

/* ====================== COFFEE MUG ====================== */
function CoffeeMug() {
    return (
        <group position={[1.8, 0.32, -3]}>
            <mesh castShadow>
                <cylinderGeometry args={[0.12, 0.1, 0.25, 16]} />
                <meshStandardMaterial color="#1a1a25" />
            </mesh>
            <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
                <meshStandardMaterial color="#3a2010" />
            </mesh>
            <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
                <meshStandardMaterial color="#1a1a25" />
            </mesh>
        </group>
    );
}

/* ====================== PLANT ====================== */
function Plant() {
    const leavesRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (leavesRef.current) {
            leavesRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
        }
    });

    return (
        <group position={[-2, 0.32, -3.8]}>
            <mesh castShadow>
                <cylinderGeometry args={[0.18, 0.14, 0.3, 8]} />
                <meshStandardMaterial color="#7c3aed" roughness={0.8} />
            </mesh>
            <mesh position={[0, 0.14, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.02, 8]} />
                <meshStandardMaterial color="#2a1a10" />
            </mesh>
            <group ref={leavesRef}>
                {[0, 72, 144, 216, 288].map((angle, i) => (
                    <mesh
                        key={i}
                        position={[
                            Math.cos((angle * Math.PI) / 180) * 0.06,
                            0.25 + i * 0.05,
                            Math.sin((angle * Math.PI) / 180) * 0.06,
                        ]}
                        rotation={[0.4, (angle * Math.PI) / 180, 0.2]}
                        castShadow
                    >
                        <sphereGeometry args={[0.12, 8, 6]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? "#22c55e" : "#1fa855"}
                            roughness={0.9}
                        />
                    </mesh>
                ))}
            </group>
        </group>
    );
}

/* ====================== BOOKSHELF ====================== */
function Bookshelf({ onClick }: { onClick: () => void }) {
    return (
        <group position={[-5, 0.5, -6]} onClick={onClick}>
            <mesh castShadow>
                <boxGeometry args={[2.2, 3.2, 0.6]} />
                <meshStandardMaterial color="#111118" />
            </mesh>
            {[-0.6, 0.3, 1.2].map((y, i) => (
                <mesh key={i} position={[0, y, 0]}>
                    <boxGeometry args={[2.1, 0.05, 0.58]} />
                    <meshStandardMaterial color="#1a1a25" />
                </mesh>
            ))}
            {[
                { pos: [-0.6, -0.25, 0], color: "#00d4ff", h: 0.55 },
                { pos: [-0.35, -0.15, 0], color: "#7c3aed", h: 0.65 },
                { pos: [-0.1, -0.25, 0], color: "#22c55e", h: 0.5 },
                { pos: [0.15, -0.3, 0], color: "#f59e0b", h: 0.4 },
                { pos: [0.4, -0.2, 0], color: "#f43f5e", h: 0.55 },
                { pos: [0.65, -0.25, 0], color: "#00d4ff", h: 0.5 },
                { pos: [-0.5, 0.6, 0], color: "#7c3aed", h: 0.5 },
                { pos: [-0.2, 0.55, 0], color: "#22c55e", h: 0.6 },
                { pos: [0.1, 0.6, 0], color: "#00d4ff", h: 0.5 },
                { pos: [0.4, 0.65, 0], color: "#f59e0b", h: 0.4 },
            ].map((book, i) => (
                <mesh key={i} position={book.pos as [number, number, number]} castShadow>
                    <boxGeometry args={[0.15, book.h, 0.38]} />
                    <meshStandardMaterial color={book.color} roughness={0.7} />
                </mesh>
            ))}
            <Text position={[0, -1.4, 0.31]} fontSize={0.09} anchorX="center">
                <meshBasicMaterial color="#00d4ff" />
                {"click \u2192 /writing"}
            </Text>
        </group>
    );
}

/* ====================== FILING CABINET ====================== */
function FilingCabinet({ onClick }: { onClick: () => void }) {
    return (
        <group position={[4.5, -0.2, -5]} onClick={onClick}>
            <mesh castShadow>
                <boxGeometry args={[1.1, 2.2, 0.9]} />
                <meshStandardMaterial color="#111118" metalness={0.4} roughness={0.6} />
            </mesh>
            {[-0.6, 0, 0.6].map((y, i) => (
                <group key={i}>
                    <mesh position={[0, y, 0.46]}>
                        <boxGeometry args={[0.95, 0.5, 0.02]} />
                        <meshStandardMaterial color="#1a1a25" />
                    </mesh>
                    <mesh position={[0, y, 0.48]}>
                        <boxGeometry args={[0.22, 0.03, 0.04]} />
                        <meshStandardMaterial color="#00d4ff" metalness={0.8} roughness={0.2} emissive="#00d4ff" emissiveIntensity={0.2} />
                    </mesh>
                </group>
            ))}
            <Text position={[0, -1.3, 0.46]} fontSize={0.08} anchorX="center">
                <meshBasicMaterial color="#00d4ff" />
                {"click \u2192 /experience"}
            </Text>
        </group>
    );
}

/* ====================== RESUME PAPER ====================== */
function ResumePaper({ onClick }: { onClick: () => void }) {
    return (
        <group position={[-1, 0.32, -3]} onClick={onClick} rotation={[0, 0.15, 0]}>
            <mesh castShadow>
                <boxGeometry args={[0.55, 0.005, 0.7]} />
                <meshStandardMaterial color="#e8e8e8" />
            </mesh>
            {Array.from({ length: 10 }).map((_, i) => (
                <mesh key={i} position={[0, 0.004, -0.27 + i * 0.055]}>
                    <boxGeometry args={[0.38 - (i % 3) * 0.06, 0.002, 0.012]} />
                    <meshStandardMaterial color="#555" />
                </mesh>
            ))}
            <Text position={[0, 0.01, -0.42]} fontSize={0.035} anchorX="center">
                <meshBasicMaterial color="#00d4ff" />
                {"click \u2192 /resume"}
            </Text>
        </group>
    );
}

/* ====================== NEON SIGN ====================== */
function NeonSign() {
    const matRef = useRef<THREE.MeshBasicMaterial>(null);

    useFrame(({ clock }) => {
        if (matRef.current) {
            matRef.current.opacity = 0.85 + Math.sin(clock.getElapsedTime() * 3) * 0.15;
        }
    });

    return (
        <group position={[0, 4, -6.9]}>
            <Text fontSize={0.6} anchorX="center" anchorY="middle">
                <meshBasicMaterial ref={matRef} color="#00d4ff" transparent opacity={0.9} />
                MARCO.DEV
            </Text>
            <pointLight position={[0, 0, 1]} intensity={0.8} color="#00d4ff" distance={6} />
        </group>
    );
}

/* ====================== RUG ====================== */
function Rug() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.49, -1]}>
            <circleGeometry args={[2.5, 32]} />
            <meshStandardMaterial color="#12121e" roughness={1} />
        </mesh>
    );
}

/* ====================== SCENE ====================== */
interface Room3DProps {
    onMonitorClick: () => void;
    onBookshelfClick: () => void;
    onCabinetClick: () => void;
    onResumeClick: () => void;
}

function Scene({ onMonitorClick, onBookshelfClick, onCabinetClick, onResumeClick }: Room3DProps) {
    return (
        <>
            <ambientLight intensity={0.25} />
            <directionalLight
                position={[5, 8, 5]}
                intensity={0.4}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <pointLight position={[-3, 4, -2]} intensity={0.3} color="#7c3aed" />
            <pointLight position={[3, 4, -2]} intensity={0.3} color="#00d4ff" />
            <pointLight position={[0, 2, 2]} intensity={0.15} color="#ffffff" />

            <Room />
            <Rug />
            <Desk />
            <Monitor onClick={onMonitorClick} />
            <Keyboard />
            <CoffeeMug />
            <Plant />
            <Bookshelf onClick={onBookshelfClick} />
            <FilingCabinet onClick={onCabinetClick} />
            <ResumePaper onClick={onResumeClick} />
            <NeonSign />

            <Environment preset="night" />
            <OrbitControls
                makeDefault
                minDistance={4}
                maxDistance={12}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2.2}
                enablePan={false}
                target={[0, 0.5, -3]}
            />
        </>
    );
}

export default function Room3D(props: Room3DProps) {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 3, 5], fov: 50 }}
            dpr={[1, 1.5]}
            className="!h-screen"
        >
            <Scene {...props} />
        </Canvas>
    );
}
