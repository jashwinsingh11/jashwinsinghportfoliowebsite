import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color={0xFF3232}
        roughness={0.5}
        metalness={0.5}
        wireframe
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars 
        radius={100} 
        depth={50} 
        count={1000} 
        factor={4} 
        saturation={0} 
      />
      <AnimatedSphere />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ 
          position: [0, 0, 5],
          fov: 75
        }}
        dpr={window.devicePixelRatio}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'default'
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};