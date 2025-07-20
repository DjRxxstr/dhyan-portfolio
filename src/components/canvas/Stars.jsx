import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef, useMemo } from 'react';

import * as random from 'maath/random/dist/maath-random.esm';
import { PointMaterial, Points, Preload } from '@react-three/drei';

function Stars(props) {
  const ref = useRef();

  const sphere = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    return random.inSphere(arr, { radius: 1.2 });
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/20;
    ref.current.rotation.y -= delta/20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
          <PointMaterial
            transparent
            color="#f272c8"
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}/>
        </Points>
    </group>
  )
}

export default function StarsCanvas(){
  return (
    <div
      className='w-full h-auto absolute inset-0 z-[-1]'>
        <Canvas
          camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
              <Stars/>
            </Suspense>

            <Preload all/>
        </Canvas>
    </div>
  );
}