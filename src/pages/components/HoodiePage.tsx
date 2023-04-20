import {
  OrbitControls,
  CameraShake,
  Center,
  Environment,
  Float,
  ScrollControls,
  Scroll,
  RoundedBox,
  OrthographicCamera,
  AccumulativeShadows,
  RandomizedLight,
  useTexture,
} from "@react-three/drei";
import { useFrame, useThree, Canvas } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import AnimHoodieModel from "./models/AnimHoodieModel";
import * as THREE from "three";
import styles from "@/styles/Home.module.css";
import { useSnapshot } from "valtio";
import { easing } from "maath";
import { state } from "./color";
import { Vector3, Color } from "three";

export default function Experience() {
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
      <div className={styles.model__page}>
        <Canvas>
          <Rig />
          <ScrollControls pages={3} damping={0.5}>
            <Scroll>
              <AnimHoodieModel />
            </Scroll>
            <Scroll html>
              <h1
                style={{
                  position: "relative",
                  top: "50vh",
                  fontSize: "13rem",
                  left: "50%",
                }}
              >
                hoodie
              </h1>
              <h1
                style={{
                  position: "absolute",
                  top: "150vh",
                  fontSize: "5rem",
                  left: "50%",
                }}
              >
                100 % cotton
              </h1>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}
