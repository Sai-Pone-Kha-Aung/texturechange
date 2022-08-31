import React, { useState, useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

export function YBOT(props) {
    var { patternOne } = props;
    const group = useRef()
    const { nodes, materials } = useGLTF('Ybot.glb')

    const [texture, setTexture] = useState(
        useLoader(THREE.TextureLoader, "camou.jpg")
    );
    useEffect(() => {
        new THREE.TextureLoader().load(patternOne, (txtr) => {
            txtr.wrapS = txtr.wrapT = THREE.RepeatWrapping;
            txtr.offset.set(0, 0);
            txtr.repeat.set(50, 50);
            setTexture(txtr);
        });
    }, [patternOne]);

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.offset.set(0, 0);
    texture.repeat.set(1, 1);

    return (
        <group ref={group} {...props} dispose={null}>

            <group name="YBOT" >
                <primitive object={nodes.mixamorigHips} />

                <mesh
                    geometry={nodes.Alpha_Joints.geometry}
                    material={materials.Alpha_Joints_MAT}
                    skeleton={nodes.Alpha_Joints.skeleton}>
                    {/* <meshStandardMaterial attach="material" map={texture} transparent={true} /> */}
                </mesh>

                <mesh
                    geometry={nodes.Alpha_Surface.geometry}
                    material={materials.Alpha_Body_MAT}
                    skeleton={nodes.Alpha_Surface.skeleton}>
                    <meshStandardMaterial attach="material" map={texture} transparent={true} />
                </mesh>
            </group>
        </group>
    )

}
