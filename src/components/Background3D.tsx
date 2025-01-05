import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Suspense } from 'react';

const Background3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
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
      </Canvas>
    </div>
  );
};

export default Background3D;