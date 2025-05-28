import React, { useState } from "react";
import { avatar } from "../assets";

const ResumeAvatar = () => {
  const [hovered, setHovered] = useState(false);

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="resume-avatar-container">
      <div className="flex flex-col items-center space-y-2">        {/* Avatar Image */}
        <div className="relative">
          {/* Outer glow ring */}          <div 
            className="absolute"
            style={{ 
              top: '-5px', 
              left: '-5px', 
              right: '-5px', 
              bottom: '-5px', 
              borderRadius: '50%',
              border: '2px solid rgba(145, 94, 255, 0.7)',
              boxShadow: '0 0 15px rgba(145, 94, 255, 0.8)',
              animation: 'avatar-glow 3s infinite ease-in-out',
              animationDelay: '0.5s'
            }}
          />
          
          {/* Inner glow ring */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              border: '2px solid rgba(145, 94, 255, 0.6)',
              boxShadow: '0 0 10px rgba(145, 94, 255, 0.7)',
              animation: 'avatar-glow 2.5s infinite ease-in-out'
            }}
          />
            <img 
            src={avatar} 
            alt="Avatar" 
            className="avatar-image transition-all duration-300 hover:scale-110 relative z-10"
            style={{ 
              width: '80px',
              height: '80px',
              borderRadius: '60%',
              objectFit: 'cover',
              objectPosition: '0 -5px', // Adjust vertical position to show the face better
              border: '2px solid #915eff',
              boxShadow: '0 0 15px rgba(145, 94, 255, 0.3)',
              cursor: 'pointer'
            }}
            onClick={handleResumeClick}
          />
        </div>        {/* Resume Banner - adjusted for better readability */}        <div 
          className="banner-container"
          onClick={handleResumeClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            fontSize: '0.7rem',
            padding: '0.35rem 0.7rem',
            letterSpacing: '0.04em'
          }}
        >
          <span>My Resume</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeAvatar;
