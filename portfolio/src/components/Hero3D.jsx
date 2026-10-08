import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

function Portrait() {
  const meshRef = useRef();
  const texture = useTexture("/images/profile-3d.png");

  useFrame((state) => {
    if (!meshRef.current) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    meshRef.current.rotation.y +=
      (mouseX * 0.25 - meshRef.current.rotation.y) * 0.05;

    meshRef.current.rotation.x +=
      (-mouseY * 0.12 - meshRef.current.rotation.x) * 0.05;

    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.04;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3.4, 4.4]} />

      <meshStandardMaterial
        map={texture}
        transparent
        roughness={0.45}
        metalness={0.05}
      />
    </mesh>
  );
}

function Hero3D() {
  return (
    <div className="hero-3d">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 3, 4]}
          intensity={2}
        />

        <pointLight
          position={[-3, 1, 3]}
          intensity={1}
        />

        <Portrait />
      </Canvas>
    </div>
  );
}

export default Hero3D;