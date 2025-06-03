import React from "react";
// import ReactWhatsapp from "react-whatsapp";
import { Link } from "react-router-dom";
import Vision from "../assets/vision.png"
import LeaderShip from "../assets/leadership.png"
import ComputerImg from "../assets/background.jpeg"


const About = () => (
  <div className="bg-white w-full my-20">
    <div className="w-[80%] flex flex-col items-center gap-4 m-auto">
      <h2 className="custonFonts font-bold text-center text-[22px] md:text-[32px] lg:text-[48px] text-bgColor">
        Want to be a partner and interested to meet?
      </h2>
      <p className="text-bgColor text-center text-base">
        The Smart features of the SLMS makes it a unique and well-reputed learning system.</p>
      <div className=" w-full  flex gap-4 my-10">
        <Link className="w-full" to="/admissions/contactAdmissions">
          <button className=" w-full py-4  bg-bgColor cursor-pointer custonFonts font-bold text-[18px] text-white rounded-full hover:bg-white hover:border hover:border-bgColor hover:text-bgColor transition-all ease-out duration-500">
            Contact Us
          </button>
        </Link>
        <a
          className="w-full"
          href="https://wa.me/923000000000?text=Hello%2C%20I%20would%20like%20to%20contact%20you."
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
            Our Smart Learnig Management System is designed to simplify and enhance the educational experience. With unique features like assignment uploads, interactive quizzes, and organized course materials. The subsequent years saw the system reaching various significant mile stone:
          </p>
        </div>
        <div className="md:flex hidden items-center justify-center">
          <img className="w-1/4" src={LeaderShip} alt="" />
        </div>
        <div className="md:flex hidden items-center justify-center">
          <img className="w-1/4" src={Vision} alt="" />
        </div>
        <div className="">
          <h2 className="custonFonts  text-[25px] text-textColor">Vision</h2>
          <p className="text-base text-[#999999] font-normal">
          The SLMS is built to transform the way education is delivered and experienced. It fosters a dynamic and user-friendly environment that supports both teaching and learning with ease and flexibility.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
