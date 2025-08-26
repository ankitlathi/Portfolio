import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react"
import * as THREE from "three";
import { Mesh, } from "three"
import { MeshWobbleMaterial, OrbitControls, Text } from "@react-three/drei"; // 👈 import Text

function RotatingCube() {
  const groupRef = useRef();

  const shape = new THREE.Shape();
    const x = -1.5, y = -1.5, width = 3, height = 3, radius = 0.3;

    shape.moveTo(x, y + radius);
    shape.lineTo(x, y + height - radius);
    shape.quadraticCurveTo(x, y + height, x + radius, y + height);
    shape.lineTo(x + width - radius, y + height);
    shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    shape.lineTo(x + width, y + radius);
    shape.quadraticCurveTo(x + width, y, x + width - radius, y);
    shape.lineTo(x + radius, y);
    shape.quadraticCurveTo(x, y, x, y + radius);

    const geometry = new THREE.ShapeGeometry(shape);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const Panel = ({ position, rotation, text }) => (
    <mesh position={position} rotation={rotation}>
      <primitive object={geometry} /> 
      <planeGeometry args={[2, 2]} />

      <meshStandardMaterial
        color="black"
        transparent
        opacity={0.1}
        side={2}
        metalness={0.3}
        blending={1}
        
      />
      
      <Text
        position={[0, 0, 0.1]} 
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </mesh>
  );

  return (
    <group ref={groupRef} scale={[2.5,2.5,2.5]}>
      <Panel position={[0, 0, 1.1]} rotation={[0, 0, 0]} text="Front" />
      <Panel position={[0, 0, -1.1]} rotation={[0, Math.PI, 0]} text="Back" />
      <Panel position={[-1.1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} text="Left" />
      <Panel position={[1.1, 0, 0]} rotation={[0, Math.PI / 2, 0]} text="Right" />
      <Panel position={[0, 1.1, 0]} rotation={[-Math.PI / 2, 0, 0]} text="Top" />
      <Panel position={[0, -1.1, 0]} rotation={[Math.PI / 2, 0, 0]} text="Bottom" />
    </group>
  );
}


export const FloatingCube = () => {
  return (
    <div className="w-full">
      <Canvas camera={{ position: [8, 1, 0] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
        <OrbitControls enableZoom={false}/>
        <MeshWobbleMaterial/>
      </Canvas>
    </div>
  );
};