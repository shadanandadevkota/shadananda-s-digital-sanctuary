import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Environment } from "@react-three/drei";
import * as THREE from "three";

const Blob = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.4, 4]}>
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#22D3EE"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          distort={0.45}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#F472B6" />
        <directionalLight position={[-5, -3, -2]} intensity={0.8} color="#22D3EE" />
        <Suspense fallback={null}>
          <Blob />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      {/* Glow halo behind 3D */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-tri)" }}
      />
    </div>
  );
};

export default Hero3D;
