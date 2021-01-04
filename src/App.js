import { Canvas } from "react-three-fiber";
import Box from "./components/box.component";
import CameraControls from "./components/controls.component";
import Header from "./components/header.component";

import "./App.css";
import SpinningMesh from "./components/spinning.component";

function App() {
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <CameraControls />
        <ambientLight intensity={0.5} />

        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -4, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          {
            //<SpinningMesh
            //position={[3, 1, 0]}
            //color="lightblue"
            //args={[3, 2, 1]}
            //speed={2}
            ///>
          }
          <Box position={[0, 0, 0]} args={[2, 2, 2]} speed={2} />
        </group>
      </Canvas>
    </>
  );
}

export default App;
