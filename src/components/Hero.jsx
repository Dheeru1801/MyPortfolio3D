import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Typewriter } from 'react-simple-typewriter';
import React, { useState, useEffect } from 'react';

const heroFirstLine = "Hi, I'm Dheeraj Chandra";
const heroRestLines = [
  "I am a Data Scientist and ML Engineer",
  "I also Develop Modern User Interfaces and Web Applications."
];
const nameToColor = "Dheeraj Chandra";

const Hero = () => {
  const [showRest, setShowRest] = useState(false);
  const [showStaticBlock, setShowStaticBlock] = useState(false);
  const [typed, setTyped] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [triggerRestart, setTriggerRestart] = useState(0);

  // Listen for home navigation click event
  useEffect(() => {
    const handleHomeClick = () => {
      setShowRest(false);
      setShowStaticBlock(false);
      setTyped("");
      setTypingDone(false);
      setTriggerRestart(prev => prev + 1);
    };

    // Add event listener for custom event
    window.addEventListener("restartHeroAnimation", handleHomeClick);

    return () => {
      window.removeEventListener("restartHeroAnimation", handleHomeClick);
    };
  }, []);

  // Custom typewriter for heading
  useEffect(() => {
    let i = 0;
    let interval;
    if (!typingDone) {
      interval = setInterval(() => {
        setTyped(heroFirstLine.slice(0, i + 1));
        i++;
        if (i === heroFirstLine.length) {
          clearInterval(interval);
          setTimeout(() => {
            setTypingDone(true);
            setShowRest(true);
          }, 500); // short blink after typing
        }
      }, 60);
    }
    return () => clearInterval(interval);
  }, [typingDone, triggerRestart]);

  // Show the static block after all animations
  useEffect(() => {
    const staticTimer = setTimeout(() => setShowStaticBlock(true), 15000); // adjust as needed
    return () => clearTimeout(staticTimer);
  }, []);

  // Split the typed string for coloring
  const nameIndex = typed.indexOf(nameToColor);
  const beforeName = nameIndex !== -1 ? typed.slice(0, nameIndex) : typed;
  const namePart = nameIndex !== -1 ? typed.slice(nameIndex) : "";

  // For static block
  const splitIndex = heroFirstLine.indexOf(nameToColor);
  const firstPart = heroFirstLine.slice(0, splitIndex);
  const staticNamePart = heroFirstLine.slice(splitIndex);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          {!showStaticBlock ? (
            <>
              <h1 className={`${styles.heroHeadText} text-white`}>
                {!typingDone ? (
                  <>
                    {beforeName}
                    <span className='text-[#915EFF]'>{namePart}</span>
                    <span className='animate-pulse'>|</span>
                  </>
                ) : (
                  <>
                    {firstPart}
                    <span className='text-[#915EFF]'>{staticNamePart}</span>
                  </>
                )}
              </h1>
              {showRest && !showStaticBlock && (
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                  <Typewriter
                    words={heroRestLines}
                    loop={1}
                    cursor
                    cursorStyle='|'
                    typeSpeed={50}
                    deleteSpeed={40}
                    delaySpeed={500}
                  />
                </p>
              )}
            </>
          ) : (
            <>
              <h1 className={`${styles.heroHeadText} text-white`}>
                {firstPart}
                <span className='text-[#915EFF]'>{staticNamePart}</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                {heroRestLines[0]}<br />{heroRestLines[1]}
              </p>
            </>
          )}
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
