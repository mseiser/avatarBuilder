import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MeshNormalMaterial } from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Canvas camera={{position: [3,3,3]}}>
      <color attach="background" args={['lightblue']}/>
      <OrbitControls/>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial/>
      </mesh>

    </Canvas>
    </>
  );
}

export default App
