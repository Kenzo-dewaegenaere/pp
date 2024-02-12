
import React from 'react';
import { Model } from '../../../public/Arms.tsx';

interface ArmsProps {
  position: [number, number, number];
}

const Arms: React.FC<ArmsProps> = ({ position }) => {
  return (
    <>
        <Model scale={3} position={position} />
    </>
  );
}

export default Arms;