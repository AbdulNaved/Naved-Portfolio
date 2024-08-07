"use client";
import Heading from "@/components/Heading";
import Laptop from "./Laptop";
import Button from "@/components/Button";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
type ProjectCard = {
  children: string;
  opp?: boolean;
};

const cardData = {
  "Blog Website": {
    url: "https://blog-app-abdul-naveds-projects.vercel.app/blogs",
    githubUrl: "https://github.com/AbdulNaved/Blog-App",
    color: "#1db954",
    description:
      "A dynamic blog platform with user sign-up and blog creation features. Enjoy seamless user authentication and content creation for an interactive blogging experience.",
    techStack: "NextJs,Typescript, Prisma",
  },
  "Paytm App": {
    url: "https://paytm-payment-app.vercel.app/dashboard",
    githubUrl: "https://github.com/AbdulNaved/Paytm-payment-app",
    color: "#f5ba13",
    description:
      "A dynamic payment app with user sign-up and transaction features. Enjoy seamless user authentication and payment processing for an interactive financial experience.",
    techStack: "React js,Javascript,Mongodb,",
  },
  "Genius Ai Bot": {
    url: "https://genius-ai-bot.vercel.app/",
    githubUrl: "https://github.com/AbdulNaved/Genius-Ai-Bot.git",

    color: "#1F2937",
    description:
      "Built an AI chatbot with Next.js and Google Gemini API.Added features for copying answers and image uploads, enabling AI responses based on images.Enhanced UI for a better user experience.",
    techStack: "Next js, Typescript",
  },

  "Youtube Clone": {
    url: "https://youtube-clone-coral-omega.vercel.app/",
    githubUrl: "https://github.com/AbdulNaved/Youtube-clone",

    color: "#d81f26",
    description:
      "A dynamic YouTube clone built with React.js, utilizing modern web technologies to deliver an interactive video viewing experience..",
    techStack: "React js,Javascript",
  },
  // Foodle: {
  //   url: "",
  //   githubUrl: "https://github.com/",
  //   color: "#ea5858",
  //   description:
  //     " ",
  //   techStack: "NextJs,Javascript,MongoDb",
  // },
} as Record<
  string,
  {
    url: string;
    githubUrl: string;
    color: string;
    description: string;
    techStack: string;
  }
>;

const ProjectCard = ({ children, opp }: ProjectCard) => {
  const project = cardData[children];
  // console.log(project);
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".projectCard",
        { scaleY: 0, scale: 0 },
        { scaleY: 1, scale: 1, duration: 0.5, ease: "back.out" }
      );
    }, component);
  }, []);
  return (
    <div
      className="min-w-full w-screen h-full md:h-full h- p-4 flex md:flex-row flex-col"
      ref={component}
    >
      <div className=" flex items-center h-full md:flex-row flex-col  relative w-full ">
        <div
          className={`w-full max-w-full projectCard text-center md:text-start justify-center items-center md:justify-normal md:items-start h-full p-4 flex md:space-x-10 flex-col  static z-10  rounded-md`}
          style={{ backgroundColor: project.color }}
        >
          <div className="md:relative max-w-[100dvw]  w-full h-full md:h-full z-30 -left- lg:-left-[20rem] ">
            <Laptop url={project.url} />
          </div>
          <div className="flex  flex-col md:absolute space-y-7 ">
            <Heading
              as="h2"
              className="relative z-30 drop-shadow-md md:left-[30rem] max-w-full text-2xl top- md:-top-2 md:text-4xl  "
            >
              {children}
            </Heading>
            <div className=" hidden  md:flex flex-col ">
              <h3
                // as="h4"
                className="relative z-30 drop-shadow-md md:left-[30rem] font-bold text-2xl -top-2   "
              >
                Description :
              </h3>
              <p className="relative z-30 drop-shadow-md md:left-[30rem] overflow-hidden  max-w-[30rem] prose-strong: hidden md:inline  -top-0 text-sm  ">
                {project.description}
              </p>
            </div>
            <div className=" hidden md:flex flex-col ">
              <h3
                // as="h4"
                className="relative z-30 drop-shadow-md md:left-[30rem] font-bold text-2xl -top-2   "
              >
                Tech Stack :
              </h3>
              <p className="relative z-30 drop-shadow-md md:left-[30rem] overflow-hidden  max-w-[30rem] prose-strong: hidden md:inline  -top-0 text-sm  ">
                {project.techStack}
              </p>
            </div>
          </div>
          <div className="flex space-x-10">
            <Button linkField={project.githubUrl} label="Code" />
            <Button linkField={project.url} label="Visit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
