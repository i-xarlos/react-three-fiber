import { Canvas } from "react-three-fiber";
import Box from "./components/box.component";
import CameraControls from "./components/controls.component";
import Header from "./components/header.component";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Canvas>
        <CameraControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </>
  );
}

export default App;
