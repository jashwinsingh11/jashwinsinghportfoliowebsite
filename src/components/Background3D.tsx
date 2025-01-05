import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Suspense } from 'react';

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <meshStandardMaterial
          color="#FF3232"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Suspense>
  );
};

const Background3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="w-full h-full bg-background">
        <Canvas
          camera={{ 
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <Scene />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Background3D;