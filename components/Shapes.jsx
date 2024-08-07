"use client";

import { ContactShadows, Environment, Float } from "@react-three/drei";
import { gsap } from "gsap";
import { Canvas, extend } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/Addons.js";
// import urbanist from "../assests/Urbanist_Black.json";

export default function Shapes() {
  return (
    <div
      className="
      mt-10  w-screen md:h-auto h-full md:w-[50%]  md:absolute static  aspect-square md:col-span-1 md:col-start-2 md:-mt-44"
    >
      <Canvas
        className="z-30"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3), //! Gem
    },
    {
      position: [1, -0.75, 4],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), //! Pill
    },
    {
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5), //! Football
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), //! Donut
    },

    {
      position: [1.6, 1.6, -4],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5), //! Diamond
    },
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0xee5a24, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xd980fa, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xb53471, roughness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0xffc312, roughness: 0.2 }),
    new THREE.MeshStandardMaterial({ color: 0xea2027, roughness: 0.8 }),
    new THREE.MeshStandardMaterial({ color: 0x6f1e51, roughness: 0.6 }),
    new THREE.MeshStandardMaterial({ color: 0x5758bb, roughness: 0.5 }),
    new THREE.MeshStandardMaterial({
      roughness: 0.5,
      metalness: 0.5,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.4,
      metalness: 0.3,
    }),
  ];

  const soundEffect = [
    new Audio("/sounds/knock1.ogg"),
    new Audio("/sounds/knock2.ogg"),
    new Audio("/sounds/knock3.ogg"),
  ];
  return geometries.map(({ position, r, geometry }) => (
    <group key={JSON.stringify(position)}>
      <Geometry
        position={position.map((p) => p * 2)}
        geometry={geometry}
        r={r}
        soundEffect={soundEffect}
        materials={materials}
      />
    </group>
  ));
}

function Geometry({ position, r, geometry, materials, soundEffect }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.utils.random(soundEffect).play();
    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        // delay: 0.3,
        ease: "elastic.out(1,0.3)",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
