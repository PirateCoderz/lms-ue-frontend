/* eslint-disable arrow-body-style */

import React from "react";
// import SectionTitle from "../Common/SectionTitle";
import Aboutbg from "../assets/-library_pick.jpg"
import SectionTitle from "../Common/SectionTitle";

const AboutUs = () => {



    return (
        <div
            className="w-full h-full py-20 bg-bgColor"
            style={{
                backgroundImage: `url(${Aboutbg})`,
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8 )",
                width: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }}
        >
            <SectionTitle title="About us" para="WHO WE ARE" />
            <div className="lg:w-[70%] h-full w-full  m-auto md:flex lg:flex-row flex-col ">
                <div className="lg:w-[40%] lg:h-[100vh] w-[100%] flex flex-col justify-end">
                    <img className="w-full h-[100vh]" src={Aboutbg} alt="" />
                </div>
                <div className="lg:w-[60%] xl:h-[100vh] w-[100%] flex flex-col justify-end">
                    <div className="w-full xl:h-[90vh] lg:h-max  bg-white flex flex-col gap-4 p-14">
                        <h3 className="text-bgColor custonFonts text-[26px] font-bold">
                            Smart Learning Management System (SLMS)


                        </h3>
                        <p className="text-[16px] font-normal text-[#999999] ">
                        Smart Learning Management System (SLMS) is a comprehensive and innovative platform designed to transform the educational experience across universities. Built to support academic excellence and streamline educational administration, SLMS empowers institutions with cutting-edge tools for course management, student engagement, performance tracking, and quality assurance.Rooted in a legacy of educational advancement, SLMS adapts to the evolving needs of modern academia by offering a scalable, user-friendly environment that fosters learning, collaboration, and institutional growth. Our platform integrates seamlessly with university infrastructures, enhancing both teaching and learning outcomes across diverse disciplines.</p>
                        <div className="flex gap-10 text-[14px] font-bold">
                            <p>Join hundreds of institutions embracing the future of education with SLMS — where innovation meets quality.

</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;