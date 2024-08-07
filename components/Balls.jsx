"use client";

import { ContactShadows, Environment, Float } from "@react-three/drei";
import { gsap } from "gsap";
import { Canvas, extend } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/Addons.js";
// import urbanist from "../assets/Urbanist_Black.json";

export default function Balls() {
  return (
    <div
      className="
    mt-0   mr-0 md:mr-[30rem] hidden md:inline w-screen md:h-full h-full md:w-[100%]  md:absolute static  aspect-square md:mt-0"
    >
      <Canvas
        className="z-20"
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
            far={7}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const logo = [
    "../assets/css-3.png",
    "../assets/html-5.png",
    "../assets/javascript.png",
  ];

  // const textures = logo.map((logo)=> new THREE.TextureLoader().load(logo))
  const geometries = [
    {
      position: [-3, 0, 0],
      r: 0.3,
      geometry: new THREE.SphereGeometry(1), 
    },
    {
      position: [-3.5, -0.75, 4],
      r: 0.4,
      geometry: new THREE.SphereGeometry(1),  
    },
    {
      position: [-3, 3, -4],
      r: 0.6,
      geometry: new THREE.SphereGeometry(1),  
    },
    {
      position: [-1, -0, 5],
      r: 0.5,
      geometry: new THREE.SphereGeometry(1),  
    },

    {
      position: [-4.6, 1.6, -4],
      r: 0.7,
      geometry: new THREE.SphereGeometry(1),  
    },
  ];

  const materials = [
    // new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0xff6f00, roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: 0xffdf00, roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: 0x006eff, roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: 0x0091ff, roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: 0x003fdd, roughness: 1 }),
  ];

  const soundEffect = [
    new Audio("/sounds/knock2.ogg"),
    new Audio("/sounds/knock3.ogg"),
  ];
  return geometries.map(({ position, r, geometry }, index) => (
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
    gsap.to(mesh.position, {
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
      <Float speed={5 * r} floatIntensity={5 * r}>
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
