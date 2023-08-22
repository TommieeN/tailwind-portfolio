import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
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
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="lg:mt-[0] mt-[6rem] wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content ">
            <div className="btn py-3">
              <button className="lg:hidden border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 lg:mt-[3rem] lg:mb-[1rem] rounded-2xl">
                Welcome to my Portfolio
              </button>
            </div>
            <div className="lg:mt-[2rem] text-white lg:text-4xl text-5xl font-bold pt-[0.2rem] lg:ml-[0.5rem]">
              <h1 className="mb-[1rem]">Hi! I'm Tommy</h1>
              <Flicking className="lg:text-[1.5rem] lg:h-[1.5rem] text-[2.3rem] h-[2.3rem] pb-[0.1rem] text-[#ffffff] overflow-hidden" {...flickingOptions}>
                <div>Full Stack Developer 💻</div>
                <div>Teaching Assistant 👨‍🏫</div>
                <div>Vietnamese 🇻🇳</div>
                <div>BrainStation Alumni 🎓</div>
                <div>Gamer 🎮</div>
                <div>Canadian 🇨🇦</div>
                <div>Dedicated 🏃‍♂️</div>
                <div>Located Surrey, B.C 🏔️</div>
              </Flicking>
            </div>
            <div
            className="my-[1rem] text-white lg:py-[0rem] py-4 max-w-lg bg-[linear-gradient(90deg,#b004b0,#38097a)] rounded-[1rem]"
            style={{
              background: 'linear-gradient(90deg, rgba(176, 4, 176, 0.8), rgba(56, 9, 122, 0.8))',
              backdropFilter: 'blur(10px)', // Optional: Add a backdrop blur effect
            }}>
            <p className="lg:px-[0.5rem] p-[1rem]">
              Full stack developer BrainStation alumni 🎓, trying to make a
              transition to the tech industry. Feedback fuels my growth , and
              mistakes are my stepping stones 🏃‍♂️. 
            </p>
            <p className="lg:px-[0.5rem] p-[1rem]">Beyond coding, I'm often out
              exploring Vancouver with my wife, sipping bubble-tea🧋, and
              discovering the city's charms 🌇. Ready to infuse my newfound
              skills into innovative projects feel free to talk to me about
              anything on linkedin 🤝!</p>
              </div>
            <AnchorLink href="#contact" className=" lg:mt-[1rem] text-white text-2xl rounded-lg p-[0.5rem]"
            style={{
              background: 'linear-gradient(90deg, rgba(176, 4, 176, 0.8), rgba(56, 9, 122, 0.8))',
              backdropFilter: 'blur(10px)', // Optional: Add a backdrop blur effect
            }}
            >
              Let's Connect{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
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
