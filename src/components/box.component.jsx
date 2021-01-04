import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import five from "../assets/five.png";

const Box = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);

  //useFrame(() => {
  //mesh.current.rotation.x += 0.01;
  //mesh.current.rotation.y += 0.03;
  //});

  const texture = useMemo(() => new THREE.TextureLoader().load(five), []);

  const camera = useMemo(
    () =>
      new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      ),
    []
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1.2, 1.2, 1.2]}
      onClick={(e) => setActive(!active)}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

export default Box;
