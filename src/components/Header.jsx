import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/hero.jpg";
import Navbar from "./Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

import { AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";

function Header() {
  const flickingOptions = {
    circularFallback: "linear",
    circular: true,
    bound: true,
    align: "center",
    horizontal: false,
    plugins: [new AutoPlay({ duration: 2000 })], // Set the duration for auto-play
  };

  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})`}}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="lg:mt-[0] mt-[6rem] wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content">
            <div 
            style={{
              background:
                "linear-gradient(90deg, rgba(176, 4, 176, 0.4), rgba(56, 9, 122, 0.8))",
              backdropFilter: "blur(10px)",
            }}
            className="rounded-[0.5rem] lg:mt-[2rem] text-white lg:text-4xl text-5xl font-bold pt-[0.2rem] lg:ml-[0.5rem] mb-[4rem] pb-[0.5rem]">
              <h1 className="ml-[1rem] mb-[1rem]">Hi! I'm <span className="text-[#da44ff]">Tommy</span></h1>
              <Flicking
                className="pl-[1rem] lg:text-[1.5rem] lg:h-[1.5rem] text-[2.3rem] h-[2.3rem] pb-[0.3rem] uppercase text-[#ffffff] overflow-hidden"
                {...flickingOptions}
              >
                <div>Full Stack Developer 💻</div>
                <div>Teaching Assistant 👨‍🏫</div>
                <div>Vietnamese 🇻🇳</div>
                <div>BrainStation Alumni 🎓</div>
                <div>Gamer 🎮</div>
                <div>Canadian 🇨🇦</div>
                <div>Fast Learner 🏎️</div>
                <div>Located Surrey, B.C 🏔️</div>
              </Flicking>
            </div>
            <div
              className="mt-[1rem] mb-[4rem] text-white lg:py-[0rem] py-4 max-w-lg rounded-[1rem]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(176, 4, 176, 0.6), rgba(56, 9, 122, 0.8))",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="lg:px-[0.5rem] p-[1rem]">
                As I <span className="text-[#fbff00]">Embark</span> 🚀 on a transition to the dynamic tech industry , I
                embrace feedback as the driving force behind my <span className="text-[#34f734]">Growth</span> 🌱,
                recognizing that <span className="text-[#f51f1f] font-bold">Mistakes</span> ❌ serve as stepping{" "}
                stones to
                mastery .
              </p>
              <p className="lg:px-[0.5rem] p-[1rem]">
                Beyond coding, I'm often out exploring Vancouver with my wife,
                sipping{" "}
                <span className="text-[#be2b2b] font-bold">Bubble-Tea</span>🧋,
                and discovering the city's{" "}
                <span className="text-[#ffa500] font-bold">Charms</span> 🌇.
                Ready to infuse my newfound skills into innovative projects feel
                free to talk to me about anything on{" "}
                <span className="text-[#0389f7] font-bold">LinkedIn</span> 🤝!
              </p>
            </div>
            <AnchorLink
              href="#contact"
              className="pulse lg:mt-[1rem] text-white text-2xl rounded-lg px-[1rem] py-[0.5rem] mt-[1rem]"
            >
              Let's Connect{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px]"></i>{" "}
            </AnchorLink>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
