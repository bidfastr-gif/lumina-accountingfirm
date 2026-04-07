import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Text3D, Center, Environment, ContactShadows, useTexture } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

/* ── Banner Item ── */
const BannerItem = ({ 
  url, 
  position, 
  rotation = [0, 0, 0],
  scrollOffset
}: { 
  url: string; 
  position: [number, number, number]; 
  rotation?: [number, number, number];
  scrollOffset: { current: number }
}) => {
  const texture = useTexture(url);
  const mesh = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (mesh.current) {
      // Automatic continuous scroll
      const totalHeight = 12; // Adjusted based on grid spacing
      let newY = initialY + scrollOffset.current;
      
      // Infinite scroll wrapping logic
      newY = ((newY + 6) % totalHeight) - 6;
      
      mesh.current.position.y = newY;
      
      // Add a bit of dynamic tilt based on position
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={mesh} position={[position[0], position[1], position[2]]} rotation={rotation}>
        <planeGeometry args={[3.5, 2.2]} />
        <meshStandardMaterial 
          map={texture} 
          transparent 
          opacity={0.8} 
          side={THREE.DoubleSide}
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>
    </Float>
  );
};

/* ── Banner Grid ── */
const BannerGrid = () => {
  const scrollOffset = useRef(0);
  const bannerImages = [
    '/images/banners/banner1.png',
    '/images/banners/banner2.png',
    '/images/banners/banner3.png',
    '/images/banners/banner4.png',
    '/images/banners/banner5.png',
    '/images/banners/banner6.png',
  ];

  useFrame((state, delta) => {
    scrollOffset.current += delta * 0.4; // Controlled scroll speed
  });

  const gridItems = useMemo(() => {
    const items = [];
    const columns = 3;
    const rows = 4;
    const spacingX = 4.5;
    const spacingY = 3.2;

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // Shift to the right: x starts from 2 and goes right
        const x = 2.5 + i * spacingX;
        const y = (j - (rows - 1) / 2) * spacingY;
        const z = -2 - i * 1.5; // Depth stagger
        
        const rotY = -0.3 - i * 0.15; // Angled towards the viewer
        const url = bannerImages[(i * rows + j) % bannerImages.length];
        
        items.push({ 
          url, 
          pos: [x, y, z] as [number, number, number], 
          rot: [0, rotY, 0] as [number, number, number] 
        });
      }
    }
    return items;
  }, []);

  return (
    <group position={[0, 0, 0]}>
      {gridItems.map((banner, index) => (
        <BannerItem 
          key={index} 
          url={banner.url} 
          position={banner.pos} 
          rotation={banner.rot} 
          scrollOffset={scrollOffset}
        />
      ))}
    </group>
  );
};

/* ── Sparkle Particles ── */
const GoldParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      arr[i * 3] = (Math.random() - 0.2) * 25; // Shift particles a bit right too
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return arr;
  }, []);

  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.005;
      const pos = ref.current.geometry.attributes.position;
      for (let i = 0; i < 400; i++) {
        const y = pos.getY(i);
        pos.setY(i, y + Math.sin(s.clock.elapsedTime * 0.5 + i) * 0.002);
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={400} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#d4a843" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
};

/* ── Main Scene ── */
const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0 bg-background/50">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#fff8ee" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c9952b" />

          <BannerGrid />
          <GoldParticles />

          <ContactShadows position={[0, -5, 0]} opacity={0.05} scale={30} blur={4} far={15} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
