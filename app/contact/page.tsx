import React from "react";
import Shapes from "./_components/Shapes";
import ContactForm from './_components/ContactForm'

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="absolute h-screen w-screen z-0">
        <Shapes />
      </div>
      
      <div className="flex mt-10 justify-center items-center h-screen w-screen z-10 p-4">
        <ContactForm/>
      </div>
    </div>
  );
};

export default page;
