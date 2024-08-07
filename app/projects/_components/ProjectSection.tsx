import React from "react";
import ProjectCard from "./ProjectCard";
import Button from "@/components/Button";

const ProjectSection = () => {
  return (
    <section className="mt-10 h-full w-full flex flex-col items-center">
      <div className=" h-full  md:space-y-11 ">
        <div className="md:h-96 h-[30rem] max-h-[30rem]  md:flex ">
          <ProjectCard>Blog Website</ProjectCard>
        </div>
        <div className="md:h-96   h-[30rem] max-h-[30rem]   md:flex">
          <ProjectCard>Paytm App</ProjectCard>
        </div>
        <div className="md:h-96   h-[30rem] max-h-[30rem]   md:flex">
          <ProjectCard>Genius Ai Bot</ProjectCard>
        </div>
        <div className="md:h-96   h-[30rem] max-h-[30rem]   md:flex">
          <ProjectCard>Youtube Clone</ProjectCard>
        </div>
        {/* <div className="md:h-96   h-[30rem] max-h-[30rem]   md:flex">
          <ProjectCard>Foodle</ProjectCard>
        </div> */}
        {/* <div className="h-96"><ProjectCard>Foodle</ProjectCard></div> */}
      </div>
      <Button
        label="See all"
        linkField="https://github.com/AbdulNaved?tab=repositories"
        className="w-[30rem] text-xl"
      />
    </section>
  );
};

export default ProjectSection;
