"use client";
import { useRef, useEffect, useContext, useState } from "react";
import * as THREE from "three";
import MyThemeContext from "../contexts/ThemeContext";

const SpaceBackground = () => {
  const containerRef = useRef(null);
  const themeContext = useContext(MyThemeContext)

  useEffect(() => {
    let scene, camera, renderer, geometry, stars

    function init() {

      // Create scene, camera, and renderer
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.set(0, 0, 0)

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);
      
      window.addEventListener("resize", onWindowResize, false);

      // Create geometry and stars
      geometry = new THREE.BufferGeometry();

      const positions = [];
      for (let i =  0; i < 10000; i++) {
        let star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        positions.push(star.x, star.y, star.z);
      }
  
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      stars = new THREE.Points(geometry, new THREE.PointsMaterial({
        color: themeContext.theme == "dark" ? 0xFFFFFF : 0x000000, 
        size: themeContext.theme == "dark" ? 0.3 : 0.6}));
      scene.add(stars);

      animate();
    }
    
    function animate() {
      let currentPositions = geometry.attributes.position.array
      const velocity = 0.75;

      for (let i = 0; i < currentPositions.length; i++) {
        
        // Update z-position (every 3rd element)
        if (i % 3 == 2) { 
          currentPositions[i] += velocity;
          if (currentPositions[i] > 300) {
            currentPositions[i] = -300;
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;
      stars.rotation.z -= 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    init();


  }, [themeContext.theme]);

  return <div key={themeContext.theme} ref={containerRef} className="fixed -z-10"></div>;
};

export default SpaceBackground;
