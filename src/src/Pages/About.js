import React from "react";
// import ReactWhatsapp from "react-whatsapp";
import { Link } from "react-router-dom";
import Vision from "../assets/vision.png"
import LeaderShip from "../assets/leadership.png"
import ComputerImg from "../assets/cmp.jpg"


const About = () => (
  <div className="bg-white w-full my-20">
    <div className="w-[80%] flex flex-col items-center gap-4 m-auto">
      <h2 className="custonFonts font-bold text-center text-[22px] md:text-[32px] lg:text-[48px] text-bgColor">
        Want to be a partner and interested to meet?
      </h2>
      <p className="text-bgColor text-center text-base">
      As one of the earliest Government Colleges in Faisalabad, Govt. Graduate College Samnabad Faisalabad is a unique and well reputed institute. It has the distinction of being the first Govt. College in Lyallpur since partition.
      </p>
      <div className=" w-full  flex gap-4 my-10">
        <Link className="w-full" to="/admissions/contactAdmissions">
          <button className=" w-full py-4  bg-bgColor cursor-pointer custonFonts font-bold text-[18px] text-white rounded-full hover:bg-white hover:border hover:border-bgColor hover:text-bgColor transition-all ease-out duration-500">
            Contact Us
          </button>
        </Link>
        <a
          className="w-full"
          href="https://wa.me/923137248929?text=Hello%2C%20I%20would%20like%20to%20contact%20you."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full py-4 bg-[#075e54] cursor-pointer custonFonts font-bold text-[18px] text-white rounded-full hover:bg-white hover:border hover:border-[#075e54] hover:text-[#075e54] transition-all ease-out duration-500">
            WhatsApp
          </button>
        </a>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 shadow-2xl rounded-3xl  ">
        <div className="flex flex-col shadow-2xl rounded-l-3xl lg:rounded-l-3xl p-8  gap-4 bg-bgColor">
          <h2 className="custonFonts  md:text-[32px] text-[20px] lg:text-[32px] font-bold text-white">
            Years Of <span className="text-textColor">Experience</span> In Education
          </h2>
          <p className="text-[14px] text-white font-normal ">
            Great place for education, knowledge Qualified experienced staff Education sports and a lot of area that
            college cover. Education for woman this is a great place. Quality education is here. A Masjid is also here.
            Library for reading and knowledge. Sports grounds for sports.
          </p>
        </div>

        <img className="w-full lg:rounded-r-3xl mx-4" src={ComputerImg} alt="" />
      </div>
      <h2 className="custonFonts md:text-[32px] text-[20px]   my-10 lg:text-[48px] text-bgColor">
        We are here to solve your problem and deliver your needs
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="">
          <h2 className="custonFonts  text-[25px] text-textColor">Mission</h2>
          <p className="text-base text-[#999999] font-normal">
          It appeared on the academic scene of the City as Govt. Intermediate College Lyallpur in 1958 when it was set in rented building at peoples Colony, Lyallpur. Later, in 1965 it was shifted to its present 117 kanal vast pupose built campus. The subsequent years saw the college reaching various significant mile stone:
          </p>
        </div>
        <div className="md:flex hidden items-center justify-center">
          <img className="w-1/4" src={LeaderShip} alt="" />
        </div>
        <div className="md:flex hidden items-center justify-center">
          <img className="w-1/4" src={Vision} alt="" />
        </div>
        <div className="">
          <h2 className="custonFonts  text-[25px] text-textColor">Vission</h2>
          <p className="text-base text-[#999999] font-normal">
          It appeared on the academic scene of the City as Govt. Intermediate College Lyallpur in 1958 when it was set in rented building at peoples Colony, Lyallpur. Later, in 1965 it was shifted to its present 117 kanal vast pupose built campus. The subsequent years saw the college reaching various significant mile stone:
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
