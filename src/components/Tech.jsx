import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".section-heading", 
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 80%",
        },
      }
    );
    
    gsap.fromTo(
      ".tech-card", 
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center mb-12">
        <h2 className={`${styles.sectionHeadText} text-center section-heading`}>
          Technical Skills
        </h2>
      </div>

      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div 
            className="tech-card flex flex-col items-center justify-center w-28 group" 
            key={technology.name}
          >
            <div className="w-24 h-24 mb-2 transition-all duration-300 ease-in-out transform group-hover:scale-125 group-hover:z-10">
              <img
                src={technology.icon}
                alt={technology.name}
                className="tech-icon w-full h-full object-contain drop-shadow-none group-hover:drop-shadow-lg"
              />
            </div>
            <p className="text-[14px] text-center text-secondary font-medium">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
