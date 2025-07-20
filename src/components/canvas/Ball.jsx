import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useState, useRef } from 'react'
import Loader from '../Loader';
import { Billboard, Decal, Float, OrbitControls, useTexture } from '@react-three/drei';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

function Ball({image}) {
  const [decal] = useTexture([image]);

  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
  if (ref.current) {
    const targetScale = isHovered ? 3.5 : 3;
    ref.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  }
});

  return (
    <Float 
      speed={3} 
      rotationIntensity={0.8} 
      floatIntensity={2}
      onPointerEnter={()=>setIsHovered(true)}
      onPointerLeave={()=>setIsHovered(false)}
    >
      <ambientLight intensity={0.8}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={3} ref={ref}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading/>
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading/>
      </mesh>
    </Float>
  )
}

export default function BallCanvas({ icon }) {
  return (
    <Canvas
      frameloop='always'
      gl={{preserveDrawingBuffer: true}}
      camera={{ position: [0, 0, 5], fov: 85 }}>
        <Suspense fallback={<Loader/>}>
          <OrbitControls enableZoom={false}/>

          <Ball image={icon}/>
          
        </Suspense>
    </Canvas>
  );
}
