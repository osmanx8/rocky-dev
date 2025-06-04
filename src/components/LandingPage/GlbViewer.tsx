"use client";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { LoopRepeat } from "three"; // <-- Explicit import here

function Model({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const currentAction = useRef<THREE.AnimationAction | null>(null);

  const [loadedScene, setLoadedScene] = useState(scene);

  useEffect(() => {
    if (!scene) return;

    if (mixer.current) {
      mixer.current.stopAllAction();
      mixer.current.uncacheRoot(loadedScene);
      currentAction.current = null;
      mixer.current = null;
    }

    mixer.current = new THREE.AnimationMixer(scene);

    if (group.current) {
      group.current.scale.set(2, 2, 2);
      group.current.rotation.y = Math.PI;
      group.current.position.set(0, -1, 0);
    }

    if (animations.length > 0) {
      currentAction.current = mixer.current.clipAction(animations[0]);
      currentAction.current.reset();
      currentAction.current.setLoop(LoopRepeat, Infinity);
      currentAction.current.play();
    }

    setLoadedScene(scene);

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current.uncacheRoot(scene);
        mixer.current = null;
      }
    };
  }, [url, animations, scene, loadedScene]);

  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
    if (group.current) group.current.rotation.y += 0.002;
  });

  return <primitive ref={group} object={scene} />;
}

export default function GLBViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <Canvas
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Model url={modelUrl} />
    </Canvas>
  );
}
