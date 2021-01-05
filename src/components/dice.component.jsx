import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import * as THREE from "three";

import one from "../assets/textures/1.jpg";
import two from "../assets/textures/2.jpg";
import three from "../assets/textures/3.jpg";
import four from "../assets/textures/4.jpg";
import five from "../assets/textures/5.jpg";
import six from "../assets/textures/6.jpg";

export default function Dice({ args }) {
  //ref to target the mesh
  const mesh = useRef();

  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const props = useSpring({
    scale: active ? [2.4, 2.4, 2.4] : [2, 2, 2],
  });

  const texture_1 = useMemo(() => new THREE.TextureLoader().load(one), []);
  const texture_2 = useMemo(() => new THREE.TextureLoader().load(two), []);
  const texture_3 = useMemo(() => new THREE.TextureLoader().load(three), []);
  const texture_4 = useMemo(() => new THREE.TextureLoader().load(four), []);
  const texture_5 = useMemo(() => new THREE.TextureLoader().load(five), []);
  const texture_6 = useMemo(() => new THREE.TextureLoader().load(six), []);

  return (
    <a.mesh
      ref={mesh}
      scale={props.scale}
      position={[0, 0, 0]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
    </a.mesh>
  );
}
