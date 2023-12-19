import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Effect } from "./Effect";
import { ImagePlane } from "./ImagePlane";

export const TCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 2],
        fov: 50,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000,
      }}
      dpr={window.devicePixelRatio}
    >
      <color attach="background" args={["#000"]} />
      <OrbitControls attach="orbitControls" />
      <Stats />
      <Suspense fallback={null}>
        <ImagePlane />
      </Suspense>
      <Effect />
    </Canvas>
  );
};
