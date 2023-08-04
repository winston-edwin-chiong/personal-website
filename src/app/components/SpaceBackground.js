"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { usePathname } from "next/navigation";

const SpaceBackground = () => {

  const canvasRef = useRef(null)

  useEffect(() => {

  }, []);

  return <div ref={canvasRef} className="fixed -z-20"></div>;
}

export default SpaceBackground;
