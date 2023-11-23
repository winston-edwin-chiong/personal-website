// Import required libraries
import { useRef, useEffect } from "react";
import * as THREE from "three";

const SpinningCube = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Set up a scene
    const scene = new THREE.Scene();

    // Set up a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up a renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xFF8888 
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animate the cube
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

  }, []); 

  return <div ref={containerRef} className="fixed -z-10"/>;
};

export default SpinningCube;
