import React from "react";

function ProjectCard({ item }) {
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt="project-thumbnail" className="w-full" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-[3rem]">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
          <div className="mt-[2rem]">
            <a
              className="mr-[2rem] bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold text-black hover:bg-black hover:text-white"
              href={item.link}
              target="_blank"
            >
              Code
            </a>
            <a
              className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold text-black hover:bg-black hover:text-white"
              href={item.deploy}
              target="_blank"
            >
              Deployment
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
