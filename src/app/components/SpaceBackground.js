"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SpaceBackground = () => {
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
        size: 0.4,
      });

      const starsVertices = [];
      for (let i = 0; i < 20000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
      }

      starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starsVertices, 3)
      );

      stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);

      window.addEventListener("resize", onWindowResize, false);

      // Start animation
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Move the camera forward
      camera.position.z -= 0.25;

      renderer.render(scene, camera);
    };

    // Initialize the scene
    init();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);

  return <div ref={containerRef} className="fixed -z-10"></div>;
};

export default SpaceBackground;