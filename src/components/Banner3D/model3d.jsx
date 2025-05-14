import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import model3d from "./model3d/sbstudio.glb"

export default function Model3D() {
  const modelRef = useRef();
  const { scene } = useGLTF(model3d); // Thay đường dẫn file

  return <primitive object={scene} ref={modelRef} scale={2} position={[0, 0, 0]} />;
}
