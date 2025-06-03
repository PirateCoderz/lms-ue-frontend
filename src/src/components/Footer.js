/* eslint-disable react/self-closing-comp */

import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"

const Footer = () => (
    <div className="w-full py-10 bg-bgColor">
      <div className="w-[80%] md:text-left text-center m-auto gap-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        <div className="flex flex-col gap-4">
          <div className="flex items-center md:justify-start justify-center">
            <img className="w-[30%] mx-16" src={Logo} alt="" />
          </div>
        
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-textColor font-bold custonFonts text-[22px]">
            Policy Links
          </h2>
          <div className="flex flex-col text-white gap-2">
            <p className="text-base hover:text-textColor transition-all ease-out delay-100 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-base hover:text-textColor transition-all ease-out delay-100 cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-textColor font-bold custonFonts text-[22px]">
            Quick Links
          </h2>
          <div className="flex flex-col text-white gap-2">
    
            <Link to="/admissions/merit">
              <div className="navbarLink">Feedback</div>
            </Link>
  
            <Link to="/admissions/fee">
              <div className="navbarLink">FAQ</div>
            </Link>
        
            <Link to="/admissions/contactAdmissions">
              <div className="navbarLink">Contact Admissions Office</div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-textColor font-bold custonFonts text-[22px]">
            Contact Details
          </h2>
          <div className="flex flex-col text-white gap-2">
            <p className="text-base  hover:text-textColor transition-all ease-out delay-100 cursor-pointer">
            University Contact
            </p>
            <p className="text-base">
              <span className="text-textColor">Phone:</span>+92-300-0000000
            </p>
            <p className="text-base">
              <span className="text-textColor">Mail:</span>university.edu.pk@gmail.com
            </p>
            <p className="text-base">
              <span className="text-textColor">Whatsapp:</span>+92-300-0000000
            </p>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <div className="flex md:justify-start justify-center gap-4 items-center">
            <a target="_blank" to="/" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl hover:text-textColor transition-all ease-out duration-150 cursor-pointer" />

            </a>

            <FaInstagramSquare className="text-white text-2xl hover:text-textColor transition-all ease-out duration-150 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );

export default Footer;
