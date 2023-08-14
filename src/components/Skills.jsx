import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import bg from "../assets/images/banner-bg.png";
import { techIcons } from "../constants";

function Skills() {
  return (
    <>
      <div
        id="skills"
        style={{ backgroundImage: `url(${bg})` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3">
            My current TechStack, learning more as the days go by.
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {techIcons &&
                techIcons.map((icon) => {
                  return (
                    <SwiperSlide key={icon.title} className="bg-[#171717]">
                      {" "}
                      <div className="lg:flex lg:items-center lg:flex-col bg-[#171717]">
                        <img className="w-[8rem] lg:w-[4rem]" src={icon.img} alt="tech-stack-icon" />
                        <p className="font-bold text-2xl my-2">
                          {icon.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
