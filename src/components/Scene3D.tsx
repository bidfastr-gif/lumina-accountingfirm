import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const FloatingGoldSphere = ({ position, size, speed }: { position: [number, number, number]; size: number; speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color="#c9952b"
          roughness={0.2}
          metalness={0.9}
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </Float>
  );
};

const FloatingRing = ({ position, size }: { position: [number, number, number]; size: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, size * 0.15, 32, 64]} />
        <meshStandardMaterial color="#1a2744" roughness={0.3} metalness={0.8} />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const points = useMemo(() => {
    const pts = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      pts[i * 3] = (Math.random() - 0.5) * 20;
      pts[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pts[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pts;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={200} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#c9952b" transparent opacity={0.6} />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#fff5e6" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#c9952b" />
        <pointLight position={[5, -5, 3]} intensity={0.3} color="#1a2744" />
        
        <FloatingGoldSphere position={[-4, 2, -2]} size={0.8} speed={1.2} />
        <FloatingGoldSphere position={[4.5, -1.5, -3]} size={0.5} speed={1.8} />
        <FloatingGoldSphere position={[2, 3, -4]} size={0.3} speed={2} />
        <FloatingGoldSphere position={[-3, -2, -1]} size={0.4} speed={1.5} />
        
        <FloatingRing position={[3, 1, -2]} size={0.6} />
        <FloatingRing position={[-2, -1, -3]} size={0.4} />
        
        <Particles />
      </Canvas>
    </div>
  );
};

export default Scene3D;
