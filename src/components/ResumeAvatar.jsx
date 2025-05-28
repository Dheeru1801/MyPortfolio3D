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
          {/* Outer glow ring */}
          <div 
            className="absolute"
            style={{ 
              top: '-4px', 
              left: '-4px', 
              right: '-4px', 
              bottom: '-4px', 
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
              width: '65px',
              height: '65px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: '0 -5px', // Adjust vertical position to show the face better
              border: '2px solid #915eff',
              boxShadow: '0 0 15px rgba(145, 94, 255, 0.3)',
              cursor: 'pointer'
            }}
            onClick={handleResumeClick}
          />
        </div>
          {/* Resume Banner - smaller size */}
        <div 
          className="banner-container"
          onClick={handleResumeClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem'
          }}
        >
          <span>My Resume</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeAvatar;
