import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Tommy</h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://www.linkedin.com/in/tommy-nguyenn" target="_blank">
              <i className="fa-brands fa-linkedin-in border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.instagram.com/tiimmytimmy" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/TommieeN" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://drive.google.com/file/d/1juta5yilnsAGWpyeo0jGFg7ZUDlaocA_/view"
              target="_blank"
            >
              <i className="fa-solid fa-clipboard-user border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
