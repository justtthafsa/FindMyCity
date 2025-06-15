import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const Background3D = () => {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      {/* Add more 3D pothole-related objects here */}
    </Canvas>
  )
}

export default Background3D
