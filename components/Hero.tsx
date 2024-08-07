"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "./Bounded";

import Shapes from "./Shapes";
import Balls from "./Balls";
const Hero = () => {
  const component = useRef(null);
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useEffect(() => {
    // console.log(screenWidth)
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".name-animation",
        { x: -100, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          delay: 0.5,
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );
      //! Slide Up animation for "" title
      tl.fromTo(
        ".Job-title-Frontend",
        { y: 40, opacity: 0, x: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "elastic.out(0.4,0.3)",
          duration: 1,
          // delay: 0.7,
        }
      );

      //! Slide Down animation for "Frontend" title
      tl.to(
        ".Job-title-Frontend",
        {
          y: 40,
          opacity: 0,
          ease: "elastic.out(0.4,0.3)",
          duration: 1,
          // delay: 0.7,
        },
        "+=1"
      );
      //! Slide up animation for "Backend" title
      tl.fromTo(
        ".Job-title-Backend",
        { y: 40, opacity: 0, x: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "elastic.out(0.4,0.3)",
          duration: 1,
          // delay: 0.7,
        },
        "-=1"
      );

      //! Slide down animation for "Backend" title

      tl.to(
        ".Job-title-Backend",
        {
          y: 40,
          opacity: 0,
          ease: "elastic.out(0.4,0.3)",
          duration: 1,
          // delay: 0.7,
        }
        // "-=1"
      );

      //! Slide up animation for "Fullstack" title
      tl.fromTo(
        ".Job-title-Fullstack",
        { y: 20, opacity: 0, x: 0 },
        {
          y: 0,
          opacity: 1,
          // delay:0.4,
          ease: "elastic.out(0.4,0.3)",
          duration: 1,
        },
        "-=1" //! Start 1 second before the previous animation ends
      );

      //! Slide left animation for "Fullstack title"

      tl.to(
        ".Job-title-Fullstack",
        {
          x: screenWidth <= 700 ? -100 : -120,
          ease: "elastic.out(0.4,0.3)",
          duration: 1,
          // delay: 0.7,
        }
        // "-=1"
      );

      tl.fromTo(
        ".Job-title-Developer",
        { y: 20, opacity: 0, x: 0 },
        {
          y: 0,
          x: screenWidth <= 700 ? 50 : 150,
          opacity: 1,
          // delay:0.4,
          ease: "elastic.out(0.4,0.3)",
          duration: 1,
        },
        "-=1"
        // Start 1 second before the previous animation ends
      );

      tl.to(".Job-title", {
        y: "+=15", // Adjust the floating distance
        ease: "power1.inOut",
        duration: 2,
        yoyo: true, // Make the animation play back and forth
        repeat: -1, // Repeat the animation indefinitely
      });
    }, component);

    return () => ctx.revert();
  }, [screenWidth]);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;

    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };
  const renderJob = (name: string[], key: string) => {
    if (!name) return;

    return name.map((Job, index) => (
      <span
        key={index}
        className={`absolute Job-title-${Job}  opacity-0   bg-gradient-to-tr from-GoldenGate via-orange-500 to-GoldenGate bg-clip-text text-xl ${
          screenWidth < 400 ? "text-xs" : "text-xl"
        } font-bold uppercase tracking-[.2em] text-transparent opacity-1 md:text-4xl`}
      >
        {Job}
      </span>
    ));
  };

  return (
    <Bounded ref={component}>
      <Balls />
      <div className="flex min-h-[70vh] md:h-full h-screen space-x-0  md:w-auto w-full md:space-x-36  flex-1 md:flex-row flex-col items-center justify-center">
        <div className="text-center z-40 static md:absolute">
          <h1
            className="mb-8 z-10 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label="Arman Patel "
          >
            <span className="block text-AliceBlue">
              {renderLetters("Abdul", "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters("Naved", "last")}
            </span>
          </h1>
          <span
            className={`flex glow Job-title drop-shadow-sm  z-40  w-full ml-15 md:ml-20 ${
              screenWidth > 1400 ? "ml-32" : "ml-20"
            } md:flex-row flex-col  text-center ${
              screenWidth < 400 ? "ml-15" : "ml-20"
            } `}
          >
            {renderJob(
              ["Frontend", "Backend", "Fullstack", "Developer"],
              "Job"
            )}
          </span>
        </div>
        <div>
          <Shapes />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
