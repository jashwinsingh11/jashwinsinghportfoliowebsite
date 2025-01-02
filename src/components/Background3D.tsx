import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={new THREE.Color(0xff3232)}
        wireframe={true}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
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
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        camera={{ 
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};