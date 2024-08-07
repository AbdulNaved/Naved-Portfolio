import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import React from "react";
import ProjectSection from "./_components/ProjectSection";

const page = () => {
  return (
    <>
      <Bounded className="h-screen w-screen">
        <Heading as="h1">Projects</Heading>
        <p className="font-semibold text-xl mt-10 ">
          A selection of some of my website projects
        </p>
        <div className="h-full w-full">
          <ProjectSection />
        </div>
      </Bounded>
    </>
  );
};

export default page;
