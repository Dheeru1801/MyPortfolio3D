import React, { useRef, useState, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Html, Preload, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

const ResumeAvatar = ({ isMobile }) => {
  // Use a simple sphere with distortion effect instead of the desktop PC model
  const bannerRef = useRef();
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Animation for hover effect
  useEffect(() => {
    if (bannerRef.current) {
      if (hovered) {
        gsap.to(bannerRef.current.scale, { 
          x: 1.1, 
          y: 1.1, 
          duration: 0.3, 
          ease: "power2.out" 
        });
      } else {
        gsap.to(bannerRef.current.scale, { 
          x: 1, 
          y: 1,
          duration: 0.3, 
          ease: "power2.out" 
        });
      }
    }
  }, [hovered]);
  // Gentle floating and rotation animation
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={sphereRef} position={[0, 0, 0]}>
      <Sphere args={[1, 64, 64]} scale={isMobile ? 0.6 : 0.8}>
        <MeshDistortMaterial 
          color="#8257e5" 
          attach="material" 
          distort={0.4} 
          speed={1.5} 
          roughness={0.2}
        />
      </Sphere>      <group 
        ref={bannerRef} 
        position={[0, 1.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh>
          <Html
            transform
            distanceFactor={1.5}
            position={[0, 0, 0]}
            className="resume-banner"
          >
            <div 
              className="banner-container" 
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <span>My Resume</span>
            </div>
          </Html>
        </mesh>
      </group>
    </group>
  );
};

export default ResumeAvatar;
