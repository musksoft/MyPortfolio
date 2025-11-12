'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

function RedSphere() {
  const mesh = useRef();

  // Rotate horizontally in place
  useFrame(() => {
    if (mesh.current) {
      // Smooth rotation around Y-axis (horizontal spin)
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      {/* Perfectly circular shape */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color={new THREE.Color('#ff2020')}   // bright red
        metalness={0.9}                      // reflective
        roughness={0.03}                     // very smooth
        transmission={1.0}                   // glassy transparency
        thickness={1.0}                      // light depth
        clearcoat={1.0}                      // glossy coating
        clearcoatRoughness={0.02}
        ior={2.2}                            // strong refraction for shine
        attenuationColor={'#ff3333'}         // inner red tint
        attenuationDistance={0.4}
      />
    </mesh>
  );
}

export default function RedSphereScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 75 }}
      style={{
        width: '25vw',
        height: '25vh',
        backgroundColor: '#0044cc', // blue background for contrast
      }}
    >
      {/* Lighting for visibility and reflection */}
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 3]} intensity={1.6} color={'#ffffff'} />
      <pointLight position={[-2, -2, -2]} intensity={1.0} color={'#ff5555'} />
      <RedSphere />
      <Environment preset="sunset" background={false} />
    </Canvas>
  );
}

// 'use client';

// import React, { useRef } from 'react';
// import * as THREE from 'three';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';

// function Diamond() {
//   const mesh = useRef();

//   // Animate slow rotation
//   useFrame(() => {
//     if (mesh.current) {
//       mesh.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh ref={mesh} scale={[0.6, 1.2, 0.6]}>
//       {/* Octahedron gives diamond shape */}
//       <octahedronGeometry args={[1, 0]} />
//       <meshPhysicalMaterial
//         color={0xff66cc}
//         metalness={0.6}
//         roughness={0.05}
//         transmission={0.95}  // more glassy
//         thickness={1.0}
//         clearcoat={1.0}
//         clearcoatRoughness={0.1}
//         ior={1.5}
//       />
//     </mesh>
//   );
// }

// export default function DiamondScene() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 3], fov: 75 }}
//       style={{
//         width: '25vw',
//         height: '25vh',
//       }}
//     >
//       <ambientLight intensity={0.6} />
//       <pointLight position={[5, 5, 5]} intensity={1.2} />
//       <Diamond />
//       <Environment preset="sunset" />
//     </Canvas>
//   );
// }  make this into red color shine
