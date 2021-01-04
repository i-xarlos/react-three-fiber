import React, { useRef, useState, useMemo } from "react";

import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";
import * as THREE from "three";
// React Spring
import { useSpring, a } from "react-spring/three";

import five from "../assets/five.png";
import four from "../assets/four.png";

const Box = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();
  const [active, setActive] = useState(false);

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const texture = useMemo(() => new THREE.TextureLoader().load(five), []);

  const props = useSpring({
    scale: active ? [2.4, 2.4, 2.4] : [2, 2, 2],
  });

  return (
    <a.mesh
      position={position}
      ref={mesh}
      scale={props.scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      castShadow
    >
      <boxBufferGeometry args={args} attach="geometry" />
      {
        <meshBasicMaterial
          attach="material"
          transparent
          side={THREE.DoubleSide}
        >
          <primitive attach="map" object={texture} />
        </meshBasicMaterial>
        //<MeshWobbleMaterial
        //color={color}
        //speed={speed}
        //attach="material"
        //factor={0.6}
        //>
        //<primitive attach="map" object={texture} />
        //</MeshWobbleMaterial>
      }
    </a.mesh>
  );
};

export default Box;
