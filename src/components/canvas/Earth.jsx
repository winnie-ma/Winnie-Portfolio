import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

//React Three Fiber is a React renderer for Three.js. It allows you to build and manage
//Three.js scenes using React components and hooks, bringing the declarative power of React to Three.js.
//Utility library for React Three Fiber, providing helpful components, hooks, and abstractions to speed up development.
const Earth = () => {
  //A hook from @react-three/drei that loads a GLTF file. It returns an object
  //containing the loaded scene, materials, animations, etc.
  const earth = useGLTF("./planet/scene.gltf");

  //primitive: A special component in React Three Fiber that allows render any Three.js object.
  //scale: Scales the 3D model by a factor of 2.5.
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  //Canvas: The main container for rendering a Three.js scene in a React component.
  //shadows: Enables shadow rendering.
  //frameloop="demand": Renders only when necessary, which can improve performance.
  //dpr={[1, 2]}: Sets the device pixel ratio, supporting high-resolution displays.
  //fov: Field of view, set to 45 degrees.
  //Preload: A Drei component that preloads all assets in the scene for smoother rendering.
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
