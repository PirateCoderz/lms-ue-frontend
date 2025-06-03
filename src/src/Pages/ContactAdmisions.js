/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { RiMapPin2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import GoogleMap from 'src/Comp/GoogleMap';
import useFetch from 'src/hooks/useFetch';
// import SimpleMap from "../components/SimpleMap";

const ContactAdmisions = () => {
  const { data: paths } = useFetch('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/path');
  const { data: stops } = useFetch('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/stops');

  return (
    <div className="my-20">
      <div className="w-[80%] py-10 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="group w-full ">
          <div className="flex h-[250px] bg-bgColor  text-white p-8 flex-col items-center justify-center gap-2 rounded-2xl  cursor-pointer  ">
            <div className="w-20 h-20 flex items-center justify-center border rounded-full">
              <RiMapPin2Fill className="text-3xl" />
            </div>
            <h2 className="text-center">{` SLMS Faisalabad`}</h2>
          </div>
        </div>
        <div className="group w-full ">
          <div className="flex h-[250px] flex-col bg-bgColor text-white p-8  items-center justify-center gap-2 rounded-2xl   cursor-pointer">
            <div className="w-20 h-20 flex items-center justify-center border rounded-full">
              <FaPhoneAlt className="text-3xl" />
            </div>
            <h2>
              <span className="font-bold">Phone:</span>+92-300-0000000
            </h2>
            <h2>
              <span className="font-bold">WhatsApp:</span>+92-300-0000000
            </h2>
          </div>
        </div>
        <div className="group w-full ">
          <div className="flex h-[250px] flex-col bg-bgColor text-white p-8 items-center justify-center gap-2 rounded-2xl  cursor-pointer">
            <div className="w-20 h-20 flex items-center justify-center border rounded-full">
              <SiGmail className="text-3xl" />
            </div>
            <h2>ue.edu.pk@gmail.com</h2>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto py-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>{paths && stops ? <GoogleMap paths={paths} stops={stops} /> : null}</div>
        <div className="flex flex-col gap-4 p-4 md:p-12 bg-bgColor ">
          <h2 className="text-[32px] text-white custonFonts">Keep In Touch</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              
              className="w-full p-4 outline-none rounded-xl border-b border-bgColor"
            />
            <input
              type="text"
              placeholder="Last Name"
              
              className="w-full p-4 outline-none rounded-xl border-b border-bgColor"
            />
            <input
              type="email"
              placeholder="Email"
              
              className="w-full p-4 outline-none rounded-xl border-b border-bgColor"
            />
            <input
              type="text"
              placeholder="Subject"
              
              className="w-full p-4 outline-none rounded-xl border-b border-bgColor"
            />
            <textarea
              type="text"
              rows="4"
              placeholder=""
              
              className="w-full p-4 outline-none rounded-xl border-b border-bgColor"
            />
            <button className="bg-white transition eas-out duration-500 text-bgColor p-4  rounded-xl custonFonts uppercase">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactAdmisions;
