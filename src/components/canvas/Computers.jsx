import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

//Hemisphere light is a kind of light source placed directly above the scene and the
//color and intensity fades from the sky to the ground.
//A point light is a kind of that gets emitted from a single light source in all directions, like light bulb in a room
const Computers = ({ isMobile }) => {
  //keep a reference to the mesh object. This allows us to access the object directly for cleanup.
  const meshRef = useRef();
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    const mesh = meshRef.current;

    return () => {
      // Clean up: Dispose of geometry, material, and mesh
      if (mesh) {
        //Disposes of the geometry to free up GPU memory
        mesh.geometry.dispose();
        //Disposes of the material to free up GPU memory
        mesh.material.dispose();
        // No need to dispose of the mesh itself if it's not being used in other places
      }
    };
  }, []);

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        decay={false}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    //returns a new MediaQueryList object that can then be used to determine if the document matches the media query string
    // Add a listener monitor for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //A boolean value that returns true if the document currently matches the media query list
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Add the callback function as a listener for changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
