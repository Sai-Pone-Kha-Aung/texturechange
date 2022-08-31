import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import './styles.css'
import { BOXROM } from "./components/ROOM"
import { YBOT } from "./components/Model"

function App() {

  var [text, setText] = useState(null);
  var [text2, setText2] = useState(null);

  var sectionStyle = {
    backgroundImage: "url('pexels-dmitriy-ganin-7527825.jpg')"
  };

  return (
    <>
      <Canvas style={sectionStyle} camera={{ position: [0, 2, 5] }}>

        <Suspense fallback={null}>
          <BOXROM patternTwo={text2} position={[0, 10.45, 0]} />
          <YBOT patternOne={text} position={[40, 0, -15]} rotation={[0, 0, 0]} scale={[10, 10, 10]} />

        </Suspense>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} angle={0.2}  penumbra={0.8} position={[-350, 100, 100]}/>
        
        <OrbitControls />
      </Canvas>

      <div className="sidebar">
        <div className="sidebar-item">
          <h4>Model Textures</h4>
          <div className="img-wrapper" onClick={() => { setText("camou.jpg"); }}><img src="camou.jpg" /></div>
          <div className="img-wrapper" onClick={() => { setText("camou 1.jpg"); }}><img src="camou 1.jpg" /></div>
          <div className="img-wrapper" onClick={() => { setText("camou 2.jpg"); }}><img src="camou 2.jpg" /></div>
        </div>

        <div className="sidebar-item">
          <h4>ROOM Texture</h4>
          <div className="img-wrapper" onClick={() => { setText2("floor1.jpg"); }}><img src="floor1.jpg" /></div>
          <div className="img-wrapper" onClick={() => { setText2("floor2.jpg"); }}><img src="floor2.jpg" /></div>
          <div className="img-wrapper" onClick={() => { setText2("floor3.jpg"); }}><img src="floor3.jpg" /></div>

        </div>

      </div>

    </>
  );


}

export default App;
