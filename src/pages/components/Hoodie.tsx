import {
  OrbitControls,
  CameraShake,
  Center,
  Environment,
  Float,
} from "@react-three/drei";
import { useFrame, useThree, extend, Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import HoodieModel from "./models/HoodieModel";
import * as THREE from "three";
import styles from "@/styles/Home.module.css";

function Hoodie() {
  function Rig() {
    const [vec] = useState(() => new THREE.Vector3());
    const { camera, mouse } = useThree();
    useFrame(() => camera.position.lerp(vec.set(mouse.x * 0, 5, 20), 0.05));
    return (
      <CameraShake
        maxYaw={0.01}
        maxPitch={0.01}
        maxRoll={0.01}
        yawFrequency={0.5}
        pitchFrequency={0.5}
        rollFrequency={0.4}
      />
    );
  }

  return (
    <>
      <div className={styles.model}>
        <Canvas>
          <ambientLight intensity={0.3} />
          <Environment preset="city" />
          <color attach="background" args={["#ced4da"]} />
          <Center>
            <Float floatIntensity={100} speed={100}>
              <HoodieModel />
            </Float>
          </Center>
          <Rig />
          <OrbitControls minZoom={0.2} maxZoom={0.2} />
        </Canvas>
      </div>
    </>
  );
}

export default Hoodie;
