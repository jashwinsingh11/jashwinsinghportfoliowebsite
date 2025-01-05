import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { ErrorBoundary } from 'react-error-boundary';

const Scene = () => {
  return (
    <>
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
    </>
  );
};

const ErrorFallback = () => {
  return <div className="fixed top-0 left-0 w-full h-full -z-10 bg-background" />;
};

const Background3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas
          camera={{ position: [0, 0, 5] }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default Background3D;