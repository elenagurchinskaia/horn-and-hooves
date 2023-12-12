import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "https://esm.sh/@react-three/fiber";
import htm from "https://esm.sh/htm";

const html = htm.bind(React.createElement);

const Background = ({ backgroundColor = 0x000000 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setClearColor(backgroundColor);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      if (!mounted) return;

      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mounted = false;
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, [backgroundColor]);

  return <div ref={containerRef} style={{ height: "100vh" }} />;
};

export default Background;
