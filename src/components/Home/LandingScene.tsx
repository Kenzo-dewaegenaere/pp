import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Model } from '../../../public/Hacker_room_low_poly.tsx';
import { EffectComposer, Pixelation } from '@react-three/postprocessing';
import * as THREE from 'three';

const CAMERA_POSITION: [number, number, number] = [0.5, 0.8, 0.6];
const INITIAL_TARGET_POSITION: THREE.Vector3 = new THREE.Vector3(-0.0689723849309587, 0.5851479096457078, 0.131899121745);
const AMBIENT_LIGHT_INTENSITY: number = 0.5;
const PIXELATION_GRANULARITY: number = 3;
const FOV: number = 75;

const Home: React.FC = () => {
  return (
    <>
      <Intro />
    </>
  );
};

const Intro: React.FC = () => {
  const [targetPosition, setTargetPosition] = useState<THREE.Vector3>(INITIAL_TARGET_POSITION);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    const mousePositionX = (clientX / window.innerWidth) * 2 - 1;
    const mousePositionY = -(clientY / window.innerHeight) * 2 + 1;

    const vector = new THREE.Vector3(mousePositionX, mousePositionY, 0.5);
    vector.unproject(new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, 0.1, 1000));
    const direction = vector.sub(new THREE.Vector3()).normalize();
    const distance = (-vector.z / direction.z) / 5;
    const position = vector.add(direction.multiplyScalar(distance));

    setTargetPosition(position);
  };

  return (
    <Canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
    >
      <PerspectiveCamera makeDefault position={CAMERA_POSITION} fov={FOV} />
      <OrbitControls target={targetPosition} enableDamping={false} enablePan={false} />
      <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
      <Model />
      <EffectComposer>
        <Pixelation granularity={PIXELATION_GRANULARITY} />
      </EffectComposer>
    </Canvas>
  );
};

export default Home;
