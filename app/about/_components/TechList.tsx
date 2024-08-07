"use client";
import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
  const component = useRef(null);
  const tech = [
    {
      techName: "REACT",
      techColor: "#61DBFB",
    },
    {
      techName: "NEXT.Js",
      techColor: "#eee",
    },
    {
      techName: "TYPESCRIPT",
      techColor: "#005bd3",
    },
    // {
    //   techName: "GSAP",
    //   techColor: "#00ff00",
    // },
    {
      techName: "Tailwind",
      techColor: "#00a6ff",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(550, 400)
              : gsap.utils.random(-550, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-550, -400)
              : gsap.utils.random(550, 400);
          },
        }
      );
    }, component);

    return () => ctx.revert();
  });
  return (
    <section ref={component}>
      {tech.map(({ techColor, techName }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 && techColor ? techColor : "inherit",
                }}
              >
                {techName}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
