import React, {  useState, useRef, useEffect } from 'react';
import {  useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'

export function BOXROM(props) {
    var { patternTwo } = props;
    const group = useRef();
    const { nodes, material } = useGLTF('roomop.glb')

    const [texture2, setTexture] = useState(
        useLoader(THREE.TextureLoader, "floor1.jpg")
    );

    useEffect(() => {
        new THREE.TextureLoader().load(patternTwo, (txtr) => {
            txtr.wrapS = txtr.wrapT = THREE.RepeatWrapping
            txtr.offset.set(0,0);
            txtr.repeat.set(1,1);
            setTexture(txtr);
        })
    }, [patternTwo])

    return (
        <group ref={group} {...props} dispose={null}>
      {/* <mesh
        geometry={nodes.Sofa_2_3.geometry}
        material={nodes.Sofa_2_3.material}
        position={[-6.34, 1.85, -47.34]}
        rotation={[Math.PI / 2, 0, -1.57]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.Sofa_2_2.geometry}
        material={nodes.Sofa_2_2.material}
        position={[-6.34, 1.85, -47.34]}
        rotation={[Math.PI / 2, 0, -1.57]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.sofa_2_1.geometry}
        material={nodes.sofa_2_1.material}
        position={[-6.34, 1.85, -47.34]}
        rotation={[Math.PI / 2, 0, -1.57]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.sofa_1_3.geometry}
        material={nodes.sofa_1_3.material}
        position={[8.73, 1.85, -48.48]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.sofa_1_2.geometry}
        material={nodes.sofa_1_2.material}
        position={[8.73, 1.85, -48.48]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.Sofa_1_1.geometry}
        material={nodes.Sofa_1_1.material}
        position={[8.73, 1.85, -48.48]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      /> */}
      <mesh
        geometry={nodes.Würfel4.geometry}
        material={nodes.Würfel4.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel3.geometry}
        material={nodes.Würfel3.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel6.geometry}
        material={nodes.Würfel6.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5.geometry}
        material={nodes.Würfel5.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel4_1.geometry}
        material={nodes.Würfel4_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel9.geometry}
        material={nodes.Würfel9.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel11.geometry}
        material={nodes.Würfel11.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel10.geometry}
        material={nodes.Würfel10.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel9_1.geometry}
        material={nodes.Würfel9_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel8.geometry}
        material={nodes.Würfel8.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel7.geometry}
        material={nodes.Würfel7.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel6_1.geometry}
        material={nodes.Würfel6_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_1.geometry}
        material={nodes.Würfel5_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.wall_2.geometry}
        material={nodes.wall_2.material}
        position={[-35.25, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.06, 0.15, -0.12]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Würfel5_2.geometry}
        material={nodes.Würfel5_2.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel4_3.geometry}
        material={nodes.Würfel4_3.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.tt_1.geometry}
        material={nodes.tt_1.material}
        position={[3.95, -1.02, -46.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.tt_2.geometry}
        material={nodes.tt_2.material}
        position={[3.95, -1.02, -46.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.tt_3.geometry}
        material={nodes.tt_3.material}
        position={[3.95, -1.02, -46.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.tt_4.geometry}
        material={nodes.tt_4.material}
        position={[3.95, -1.02, -46.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.Würfel5_0.geometry}
        material={nodes.Würfel5_0.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_1_1.geometry}
        material={nodes.Würfel5_1_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_2_1.geometry}
        material={nodes.Würfel5_2_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_3.geometry}
        material={nodes.Würfel5_3.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_4.geometry}
        material={nodes.Würfel5_4.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_5.geometry}
        material={nodes.Würfel5_5.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_6.geometry}
        material={nodes.Würfel5_6.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_7.geometry}
        material={nodes.Würfel5_7.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_8.geometry}
        material={nodes.Würfel5_8.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_9.geometry}
        material={nodes.Würfel5_9.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_10.geometry}
        material={nodes.Würfel5_10.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_11.geometry}
        material={nodes.Würfel5_11.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_12.geometry}
        material={nodes.Würfel5_12.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_13.geometry}
        material={nodes.Würfel5_13.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_14.geometry}
        material={nodes.Würfel5_14.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_15.geometry}
        material={nodes.Würfel5_15.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_16.geometry}
        material={nodes.Würfel5_16.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_17.geometry}
        material={nodes.Würfel5_17.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_18.geometry}
        material={nodes.Würfel5_18.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_19.geometry}
        material={nodes.Würfel5_19.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_20.geometry}
        material={nodes.Würfel5_20.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_21.geometry}
        material={nodes.Würfel5_21.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_22.geometry}
        material={nodes.Würfel5_22.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_23.geometry}
        material={nodes.Würfel5_23.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_24.geometry}
        material={nodes.Würfel5_24.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_25.geometry}
        material={nodes.Würfel5_25.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_26.geometry}
        material={nodes.Würfel5_26.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_0_1.geometry}
        material={nodes.Würfel5_0_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_1_2.geometry}
        material={nodes.Würfel5_1_2.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_2_2.geometry}
        material={nodes.Würfel5_2_2.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_3_1.geometry}
        material={nodes.Würfel5_3_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_4_1.geometry}
        material={nodes.Würfel5_4_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_5_1.geometry}
        material={nodes.Würfel5_5_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_6_1.geometry}
        material={nodes.Würfel5_6_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_7_1.geometry}
        material={nodes.Würfel5_7_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_8_1.geometry}
        material={nodes.Würfel5_8_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_9_1.geometry}
        material={nodes.Würfel5_9_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_10_1.geometry}
        material={nodes.Würfel5_10_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_11_1.geometry}
        material={nodes.Würfel5_11_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_12_1.geometry}
        material={nodes.Würfel5_12_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_13_1.geometry}
        material={nodes.Würfel5_13_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_14_1.geometry}
        material={nodes.Würfel5_14_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_15_1.geometry}
        material={nodes.Würfel5_15_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_16_1.geometry}
        material={nodes.Würfel5_16_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_17_1.geometry}
        material={nodes.Würfel5_17_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_18_1.geometry}
        material={nodes.Würfel5_18_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_19_1.geometry}
        material={nodes.Würfel5_19_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_20_1.geometry}
        material={nodes.Würfel5_20_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_21_1.geometry}
        material={nodes.Würfel5_21_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_22_1.geometry}
        material={nodes.Würfel5_22_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_23_1.geometry}
        material={nodes.Würfel5_23_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_24_1.geometry}
        material={nodes.Würfel5_24_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_25_1.geometry}
        material={nodes.Würfel5_25_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_26_1.geometry}
        material={nodes.Würfel5_26_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel6_2.geometry}
        material={nodes.Würfel6_2.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.Würfel11_1.geometry}
        material={nodes.Würfel11_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.floor.geometry}
        material={nodes.floor.material}
        position={[-1.72, -10.82, -17.79]}
        scale={[51.4, 0.38, 51.4]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.wall_1.geometry}
        material={nodes.wall_1.material}
        position={[-1.72, 3.63, -69.74]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[51.4, 0.61, 14.18]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.wall_3.geometry}
        material={nodes.wall_3.material}
        position={[50.25, 3.37, -17.63]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[51.4, 0.61, 14.62]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.wardrobe_2.geometry}
        material={nodes.wardrobe_2.material}
        position={[-0.02, -8.5, -66.83]}
        scale={[10.74, 2.03, 2.26]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.wall_4.geometry}
        material={nodes.wall_4.material}
        position={[-1.72, 3.52, 34.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[51.4, 0.61, 14.58]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>

      {/* <mesh
        geometry={nodes.wardrobe_1.geometry}
        material={nodes.wardrobe_1.material}
        position={[0.1, -0.2, -68.43]}
        scale={[-8.33, 8.44, 0.74]}>
        <meshStandardMaterial attach="material" map={texture3} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Photo_2_2.geometry}
        material={nodes.Photo_2_2.material}
        position={[-7.58, 6.03, 33.71]}
        scale={[3.12, 3.88, 0.25]}>
        <meshStandardMaterial attach="material" map={photos["2_2"]} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Photo_2_1.geometry}
        material={nodes.Photo_2_1.material}
        position={[-7.58, 6.03, 33.52]}
        scale={[2.71, 3.37, 0.22]}>
        <meshStandardMaterial attach="material" map={photos["2_1"]} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Photo_1_2.geometry}
        material={nodes.Photo_1_2.material}
        position={[1.41, 2.66, 33.76]}
        scale={[4.83, 6.01, 0.39]}>
        <meshStandardMaterial attach="material" map={photos["1_2"]} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Photo_1_1.geometry}
        material={nodes.Photo_1_1.material}
        position={[1.41, 2.66, 33.47]}
        scale={[4.19, 5.22, 0.34]}>
        <meshStandardMaterial attach="material" map={photos["1_1"]} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Photo_3_2.geometry}
        material={nodes.Photo_3_2.material}
        position={[10.16, 6.26, 33.71]}
        scale={[3.08, 3.84, 0.25]}>
        <meshStandardMaterial attach="material" map={photos["3_2"]} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Photo_3_1.geometry}
        material={nodes.Photo_3_1.material}
        position={[10.16, 6.26, 33.52]}
        scale={[2.68, 3.33, 0.22]}>
        <meshStandardMaterial attach="material" map={photos["3_1"]} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Photo_4_2.geometry}
        material={nodes.Photo_4_2.material}
        position={[49.48, 8.69, -19.45]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.12, 3.88, 0.25]}>
        <meshStandardMaterial attach="material" map={photos["4_2"]} transparent={true} />
      </mesh>

      <mesh
        geometry={nodes.Photo_4_1.geometry}
        material={nodes.Photo_4_1.material}
        position={[49.29, 8.69, -19.45]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.71, 3.37, 0.22]}>
        <meshStandardMaterial attach="material" map={photos["4_1"]} transparent={true} />
      </mesh> */}

    </group>
  )

       
}

