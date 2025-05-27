import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import './CardStyles.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating project cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Start off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
          end: "top center",    // End when the top reaches the center of the viewport
          scrub: true,          // Smoothly sync scroll and animation
          markers: false,       // Set to `true` to see debug markers
        },
      }
    );
  }, []);

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      ref={cardRef} 
      className={`card-container ${isFlipped ? 'card-flipped' : ''}`}
      style={{ width: "100%", maxWidth: "380px", height: "500px" }}
    >
      <div className="card-inner card-hover-effect">
        {/* Front of Card */}
        <div className="card-front">
          <div className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col">
            <div className="relative w-full h-[280px] overflow-hidden rounded-2xl">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out"
              />

              <div className="absolute inset-0 flex justify-end m-3">
                <div
                  onClick={(e) => {
                    e.stopPropagation(); 
                    window.open(source_code_link, "_blank");
                  }}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-between items-start">
              <h3 className="text-white font-bold text-[22px] break-words mr-3" style={{ maxWidth: "calc(100% - 40px)" }}>{name}</h3>
              
              <div 
                onClick={handleFlip}
                className="info-button black-gradient shrink-0"
              >
                <div className="text-white text-xl font-bold">i</div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="card-back">
          <div className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-[24px] mb-4">{name}</h3>
              <div className="overflow-y-auto h-[180px] pr-2">
                <p className="text-secondary text-[14px]">{description}</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
              
              <button
                onClick={handleFlip}
                className="border border-secondary py-2 px-4 rounded-lg text-white hover:bg-secondary/30 transition-all duration-300 w-full hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]"
              >
                Back to Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    // Stagger effect for project cards
    gsap.fromTo(
      ".project-card", // Select all project cards
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Stagger delay of 0.3 seconds between each card
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",  // Trigger when the top of the container reaches the bottom
          end: "top center",
          scrub: true,
          markers: false, // Set to true to see debug markers
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>

      <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card w-full flex items-center justify-center">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
