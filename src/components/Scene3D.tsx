import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

/* ── Gold Coin ── */
const GoldCoin = ({ position, scale = 1, rotSpeed = 1 }: { position: [number, number, number]; scale?: number; rotSpeed?: number }) => {
  const mesh = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (mesh.current) {
      mesh.current.rotation.y = s.clock.elapsedTime * rotSpeed;
      mesh.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.5}>
      <group ref={mesh} position={position} scale={scale}>
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 0.08, 64]} />
          <meshStandardMaterial color="#d4a843" metalness={1} roughness={0.15} />
        </mesh>
        {/* Rim */}
        <mesh>
          <torusGeometry args={[0.5, 0.04, 16, 64]} />
          <meshStandardMaterial color="#b8922e" metalness={1} roughness={0.2} />
        </mesh>
        {/* ₹ emboss — front */}
        <mesh position={[0, 0, 0.041]}>
          <cylinderGeometry args={[0.25, 0.25, 0.01, 32]} />
          <meshStandardMaterial color="#e8c44a" metalness={0.95} roughness={0.25} />
        </mesh>
      </group>
    </Float>
  );
};

/* ── 3D Bar Chart ── */
const BarChart3D = ({ position }: { position: [number, number, number] }) => {
  const group = useRef<THREE.Group>(null);
  const bars = useMemo(() => [
    { h: 0.6, color: '#1a2744' },
    { h: 1.0, color: '#c9952b' },
    { h: 0.8, color: '#1a2744' },
    { h: 1.4, color: '#c9952b' },
    { h: 1.1, color: '#1a2744' },
  ], []);

  useFrame((s) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={group} position={position} scale={0.8}>
        {/* Base platform */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[2.2, 0.06, 0.8]} />
          <meshStandardMaterial color="#e8e0d0" metalness={0.3} roughness={0.6} />
        </mesh>
        {bars.map((bar, i) => (
          <mesh key={i} position={[-0.8 + i * 0.4, bar.h / 2, 0]}>
            <boxGeometry args={[0.25, bar.h, 0.4]} />
            <meshStandardMaterial color={bar.color} metalness={0.7} roughness={0.25} />
          </mesh>
        ))}
        {/* Growth arrow */}
        <mesh position={[0.6, 1.5, 0]} rotation={[0, 0, -0.3]}>
          <coneGeometry args={[0.1, 0.25, 3]} />
          <meshStandardMaterial color="#c9952b" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0.3, 1.35, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5, 8]} />
          <meshStandardMaterial color="#c9952b" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

/* ── Pie Chart ── */
const PieChart3D = ({ position }: { position: [number, number, number] }) => {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (group.current) {
      group.current.rotation.y = s.clock.elapsedTime * 0.2;
    }
  });

  const segments = useMemo(() => {
    const colors = ['#1a2744', '#c9952b', '#2d4a7a', '#d4a843', '#3a5f9e'];
    const angles = [0, 1.2, 2.5, 3.8, 5.0];
    return colors.map((color, i) => {
      const start = angles[i];
      const end = angles[i + 1] || Math.PI * 2;
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.absarc(0, 0, 0.6, start, end, false);
      shape.lineTo(0, 0);
      return { shape, color };
    });
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={group} position={position} rotation={[Math.PI / 2, 0, 0]} scale={0.9}>
        {segments.map((seg, i) => (
          <mesh key={i} position={[0, 0, i === 1 ? 0.05 : 0]}>
            <extrudeGeometry args={[seg.shape, { depth: 0.15, bevelEnabled: false }]} />
            <meshStandardMaterial color={seg.color} metalness={0.6} roughness={0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

/* ── Calculator ── */
const Calculator3D = ({ position }: { position: [number, number, number] }) => {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.4) * 0.2;
      group.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1.5}>
      <group ref={group} position={position} scale={0.55}>
        {/* Body */}
        <mesh>
          <boxGeometry args={[1.2, 1.8, 0.15]} />
          <meshStandardMaterial color="#1a2744" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0.55, 0.08]}>
          <boxGeometry args={[0.95, 0.4, 0.02]} />
          <meshStandardMaterial color="#a8d8a8" metalness={0.2} roughness={0.8} emissive="#a8d8a8" emissiveIntensity={0.3} />
        </mesh>
        {/* Buttons */}
        {Array.from({ length: 12 }).map((_, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          return (
            <mesh key={i} position={[-0.3 + col * 0.3, 0.15 - row * 0.25, 0.08]}>
              <boxGeometry args={[0.2, 0.15, 0.03]} />
              <meshStandardMaterial
                color={i === 11 ? '#c9952b' : '#2d4a7a'}
                metalness={0.4}
                roughness={0.5}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
};

/* ── Document / Ledger ── */
const Document3D = ({ position }: { position: [number, number, number] }) => {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (group.current) {
      group.current.rotation.z = Math.sin(s.clock.elapsedTime * 0.5) * 0.08;
      group.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.3} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={group} position={position} scale={0.6}>
        {/* Pages stacked */}
        {[0, 0.03, 0.06].map((z, i) => (
          <mesh key={i} position={[i * 0.02, -i * 0.02, z]}>
            <boxGeometry args={[1, 1.4, 0.02]} />
            <meshStandardMaterial color={i === 2 ? '#faf6ee' : '#f0e8d8'} metalness={0.1} roughness={0.8} />
          </mesh>
        ))}
        {/* Lines on top page */}
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh key={`line-${i}`} position={[0.04 + 0.06, 0.4 - i * 0.2 - 0.02, 0.072]}>
            <boxGeometry args={[0.6, 0.02, 0.001]} />
            <meshStandardMaterial color="#c9c1b0" />
          </mesh>
        ))}
        {/* Gold seal */}
        <mesh position={[0.25, -0.5, 0.072]}>
          <cylinderGeometry args={[0.1, 0.1, 0.01, 32]} />
          <meshStandardMaterial color="#c9952b" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

/* ── Sparkle Particles ── */
const GoldParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.015;
      const pos = ref.current.geometry.attributes.position;
      for (let i = 0; i < 300; i++) {
        const y = pos.getY(i);
        pos.setY(i, y + Math.sin(s.clock.elapsedTime + i) * 0.001);
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={300} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#d4a843" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

/* ── Main Scene ── */
const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[8, 8, 5]} intensity={1.2} color="#fff8ee" castShadow />
        <directionalLight position={[-5, 3, 5]} intensity={0.4} color="#c9952b" />
        <pointLight position={[0, 5, 3]} intensity={0.6} color="#ffeebb" />

        {/* Accounting-themed 3D objects */}
        <GoldCoin position={[-4.5, 2, -1]} scale={1.2} rotSpeed={0.8} />
        <GoldCoin position={[4.2, -2, -2]} scale={0.7} rotSpeed={1.2} />
        <GoldCoin position={[-2, -2.5, 0]} scale={0.5} rotSpeed={1.5} />

        <BarChart3D position={[4, 1.5, -1]} />
        <PieChart3D position={[-3.5, -0.5, -1.5]} />
        <Calculator3D position={[3, -1, 0]} />
        <Document3D position={[-1.5, 2.5, -2]} />

        <GoldParticles />

        <ContactShadows position={[0, -3, 0]} opacity={0.15} scale={20} blur={2} far={5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
