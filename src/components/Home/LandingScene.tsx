import React from 'react';
import { Canvas  } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../../../public/Hacker_room_low_poly.tsx';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';
import * as THREE from 'three';

const Home: React.FC = () => {
  
  return (
    <>
      <Canvas camera={{ position: [.5, .8, .6]  }} >
        <OrbitControls target={ new THREE.Vector3(-0.0689723849309587, 0.5851479096457078, .131899121745)} enableDamping={false} enablePan={false}  />
        <ambientLight intensity={0.5} />
        <Model />
        <EffectComposer>
          <Pixelation granularity={3} />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default Home;
