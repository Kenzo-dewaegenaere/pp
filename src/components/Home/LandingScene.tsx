import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Model } from '../../../public/Hacker_room_low_poly.tsx';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';
import * as THREE from 'three';

const CAMERA_POSITION: [number, number, number] = [0.5, 0.8, 0.6];
const TARGET_POSITION: THREE.Vector3 = new THREE.Vector3(-0.0689723849309587, 0.5851479096457078, 0.131899121745);
const AMBIENT_LIGHT_INTENSITY: number = 0.5;
const PIXELATION_GRANULARITY: number = 3;
const FOV: number = 75;

const Home: React.FC = () => {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={CAMERA_POSITION} fov={FOV} />
      <OrbitControls target={TARGET_POSITION} enableDamping={false} enablePan={false} />
      <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
      <Model />
      <EffectComposer>
        <Pixelation granularity={PIXELATION_GRANULARITY} />
      </EffectComposer>
    </>
  );
};

export default Home;
