import { projects } from "../constants";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Below is a list of my projects I've been working on. <b>NOTE</b> that
          because I am using the free version of render the data for the back
          ends of my projects take a minute or two to start.
        </p>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {projects.map((item, i) => <ProjectCard key={i} item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Projects;
