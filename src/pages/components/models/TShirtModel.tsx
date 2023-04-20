/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { state } from "../color";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/1CKOeSq4PdkQCBiC/scene.splinecode"
  );

  return (
    <>
      <group {...props} dispose={null}>
        <directionalLight
          name="Directional Light"
          intensity={0.75}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          position={[850003.92, 1299996.45, 1001635.31]}
          rotation={[0, 0, 0]}
          scale={1}
        />
        <group name="male_tshirt">
          <mesh
            name="male_tshirt1"
            geometry={nodes.male_tshirt1.geometry}
            material={materials.Tshirt}
            castShadow
            receiveShadow
            position={[3.19, 41.43, -3.94]}
            rotation={[0, -0.03, 0]}
            scale={[1.02, 1, 1.02]}
          />
        </group>
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.25}
          far={100000}
          near={-100000}
          position={[82.85, 112.79, 990.16]}
          rotation={[-0.11, 0.08, 0.01]}
          scale={0.5}
        />
      </group>
    </>
  );
}