
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Animated sphere component
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial 
        color="#3c8be0" 
        attach="material" 
        distort={0.5} 
        speed={2} 
        roughness={0.1}
        metalness={0.7}
      />
    </mesh>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AnimatedSphere />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
