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
      w-screen h-screen"
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
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const getRandomPosition = () => [
    (Math.random() * 8) - 2,  // Random X-axis position between -2 and 2
    (Math.random() * 6) - 2,  // Random Y-axis position between -2 and 2
    (Math.random() * 1) - 2,  // Random Z-axis position between -2 and 2
  ];
  

  console.log(getRandomPosition());
  const geometries = [
    {
      position: [3,-1,1],
      r: 0.3,
      geometry: new THREE.SphereGeometry(1.5), //! Gem
    },
    {
      position: [6,2,-2],
      r: 0.4,
      geometry: new THREE.SphereGeometry(1.5), //! Pill
    },
    {
      position: [2,1,-2],
      r: 0.6,
      geometry: new THREE.SphereGeometry(1.5), //! Football
    },
    {
      position: [-5,3,-7],
      r: 0.5,
      geometry: new THREE.SphereGeometry(1.5), //! Donut
    },

    {
      position: [-2,-1,-2],
      r: 0.7,
      geometry: new THREE.SphereGeometry(1.5), //! Diamond
    },
    {
      position: [5,0,-8],
      r: 0.7,
      geometry: new THREE.SphereGeometry( 1.5), //! Diamond
    },
    {
      position: [-5,2,-2],
      r: 0.7,
      geometry: new THREE.SphereGeometry(1.5)  //! Diamond
    },
    {
      position: [-1,1,1],
      r: 0.7,
      geometry: new THREE.SphereGeometry( 1.5)  //! Diamond
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
    new THREE.MeshStandardMaterial({ color: 0x5758bb, roughness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0x9258bb, roughness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x5ad8bb, roughness: 0.5 }),
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
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={9 * r}>
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
