import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { avatar } from "../../assets";

const ResumeAvatar = ({ isMobile }) => {
  const groupRef = useRef();
  const bannerRef = useRef();
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
  }, [hovered]);  // Gentle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Html transform distanceFactor={1.5} position={[0, 0, 0]} className="avatar-image-container">
        <img 
          src={avatar} 
          alt="Avatar" 
          className="avatar-image"
          style={{ 
            width: isMobile ? '60px' : '80px',
            height: isMobile ? '60px' : '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #915eff'
          }} 
        />
      </Html><group 
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
