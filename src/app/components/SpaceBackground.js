import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpaceBackground = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, stars, frameId;

    const init = () => {
      // Create the scene
      scene = new THREE.Scene();

      // Create the camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 0);

      // Create the renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Create the stars
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
      });

      const starsVertices = [];
      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
      }

      starsGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(starsVertices, 3)
      );

      stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);

      // Start animation
      animate();
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Move the camera forward
      camera.position.z -= 0.5;

      renderer.render(scene, camera);
    };

    // Initialize the scene
    init();

    // Clean up Three.js components when the component is unmounted
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      scene = camera = renderer = stars = null;
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0 , zIndex: "-1"}}>
    </div>
  );
};

export default SpaceBackground;