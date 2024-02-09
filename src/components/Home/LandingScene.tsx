import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../../../public/Hacker_room_low_poly.tsx';

const Home: React.FC = () => {
  return (
    <>
        <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[100, 100, 100]} />


        <Model />
        </Canvas>
    </>
  );
};

export default Home;
