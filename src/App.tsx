import React from 'react'
import './styles/main.sass'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const App: React.FC = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[4, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}

export default App;
