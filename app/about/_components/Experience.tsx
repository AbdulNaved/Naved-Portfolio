import React from "react";
import Heading from "@/components/Heading";

function Experience() {
  return (
    <div className="container mx-auto px-4">
      <Heading as="h1" size="xl" className="mb-8 text-center">
        Experience
      </Heading>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="prose prose-xl prose-slate prose-invert">
          <div className="mb-2 font-bold">Xzect Labs</div>
          <div className="text-sm font-thin text-yellow-500">Full Stack Developer Intern</div>
          <div className="text-sm font-thin mb-2">2024 Jun - Aug (2 Months)</div>
          <div className="">
           Led the development of a full-stack project, including an AI bot, leveraging HTML, CSS, JavaScript, React, and Next.js to create dynamic and interactive web applications.
           Implemented responsive design and modern user interfaces using Bootstrap and Tailwind, ensuring a seamless user experience across devices.
           Contributed to open-source projects by managing API keys, collaborating on production-level code, and enhancing both functionality and security.
           Worked closely with the team to integrate features, optimize performance, and improve user engagement through rigorous testing and iterative improvements.
           Acquired hands-on experience in production environments, actively participating in code reviews and contributing to the enhancement of development processes.

           </div>
        </div>

        <div className="prose prose-xl prose-slate prose-invert">
          <div className="mb-2 font-bold">OctaNet Services Pvt Ltd.</div>
          <div className="text-sm font-thin text-yellow-500">Web Developer Intern</div>
          <div className="text-sm font-thin mb-2">2024 Jun - Aug</div>
          <div className="">
            Developed a responsive landing page and an interactive to-do list
            using HTML, CSS, and JavaScript. Applied best practices for
            cross-browser compatibility and user experience enhancements.
            Collaborated with the design team to ensure visual and functional
            integrity of web components. Optimized web performance to enhance
            loading speeds and user engagement. Participated in code reviews and
            contributed to the improvement of development processes.
          </div>
        </div>

        <div className="prose prose-xl prose-slate prose-invert">
          <div className="mb-2 font-bold">CodeClause</div>
          <div className="text-sm font-thin text-yellow-500">Web Developer Intern</div>
          <div className="text-sm font-thin mb-2">2023 Oct - Dec</div>
          <div className="">
            Developed a live language translation web app using HTML, CSS,
            JavaScript, and a Translation API. Created and maintained websites
            using core web technologies. Ensured web applications were
            responsive and user-friendly. Collaborated with team members to
            integrate new features and improve existing functionality.
            Participated in testing and debugging processes to enhance app
            performance and reliability.
          </div>
        </div>

        <div className="prose prose-xl prose-slate prose-invert">
          <div className="mb-2 font-bold">Bharat Intern</div>
          <div className="text-sm font-thin text-yellow-500">Web Developer Intern</div>
          <div className="text-sm font-thin mb-2">2023 Sep - Nov</div>
          <div className="">
            Developed a dynamic e-commerce website with a user-friendly
            interface. Implemented secure payment gateways and enhanced site
            performance using JavaScript optimizations. Collaborated with
            back-end developers to integrate RESTful APIs for seamless data
            handling. Conducted usability testing to ensure an intuitive user
            experience. Maintained and updated website content, ensuring
            compliance with current web standards.
          </div>
        </div>

        <div className="prose prose-xl prose-slate prose-invert">
          <div className="mb-2 font-bold">Oasis Infobyte</div>
          <div className="text-sm font-thin text-yellow-500">Web Developer Intern</div>
          <div className="text-sm font-thin mb-2">2023 Sep - Oct</div>
          <div className="">
            Developed a fully functional web-based calculator. Created a
            temperature converter allowing users to convert between different
            temperature scales using HTML, CSS, and JavaScript. Ensured both
            applications were responsive and user-friendly. Implemented clean
            and efficient code following best practices. Participated in the
            testing and debugging processes to improve app performance and
            accuracy.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
