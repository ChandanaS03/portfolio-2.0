
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Group, Color } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Animated sphere component
const AnimatedSphere = ({ position, size, color, speed }: { 
  position: [number, number, number], 
  size: number, 
  color: string,
  speed: number
}) => {
  const sphereRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // Rotate the sphere
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * speed * 0.4) * 0.3;
      sphereRef.current.rotation.y = Math.sin(clock.getElapsedTime() * speed * 0.2) * 0.5;
      
      // Subtle floating movement
      sphereRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed * 0.5) * 0.2;
    }
  });

  return (
    <group ref={sphereRef} position={position}>
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial 
          color={color} 
          wireframe={true} 
          transparent={true}
          opacity={0.6}
        />
      </Sphere>
    </group>
  );
};

// Background component with multiple animated spheres
const DynamicHeroBackground = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Don't render the 3D background on mobile devices to improve performance
  if (!mounted || isMobile) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        <AnimatedSphere 
          position={[0, 0, 0]} 
          size={1.8} 
          color="#8b5cf6" 
          speed={0.8}
        />
        <AnimatedSphere 
          position={[-2, -1, -3]} 
          size={1.2} 
          color="#06b6d4" 
          speed={0.5}
        />
        <AnimatedSphere 
          position={[2, 1, -2]} 
          size={0.8} 
          color="#8b5cf6" 
          speed={0.7}
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default DynamicHeroBackground;
