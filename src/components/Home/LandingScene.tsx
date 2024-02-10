import React, { useRef } from 'react';
import { Canvas  } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../../../public/Hacker_room_low_poly.tsx';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';
import * as THREE from 'three';

const Home: React.FC = () => {
  
  return (
    <>
      <Canvas camera={{ position: new THREE.Vector3(1.3, 1.6, 0.6),  }} >
        <OrbitControls target={ new THREE.Vector3(-0.19289723849309587, 0.6851479096457078, -0.07967731899121745)} enableDamping={false} enablePan={false}  />
        <ambientLight intensity={0.5} />
        <Model />
        <EffectComposer>
          <Pixelation granularity={4} />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default Home;
