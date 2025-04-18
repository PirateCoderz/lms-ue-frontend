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
                            College Ranking and Quality Certification
                        </h3>
                        <p className="text-[16px] font-normal text-[#999999] ">
                            The University of Education Faisalabad Campus has earned a distinguished reputation for its exceptional performance and excellent results. Established in 1961, it originally operated in the building of the Auqaaf department on Dijkot Road. However, as the institution's goals expanded, it moved to its current 23-acre campus. Initially named Govt. College for Evaluators of Primary Education in West Pakistan, Lyallpur, the institute was later renamed Govt. Training College, Lyallpur in 1976, and eventually became Govt. College of Education, Faisalabad.</p>
                        <div className="flex gap-10 text-[14px] font-bold">
                            <h3>Give us a Call: </h3>
                            <h3>092-42-99262226</h3>
                        </div>
                        <h3 className=" signatureFont  text-[48px] text-bgColor">
                            Dr. Shahid Iabal
                        </h3>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[18px] font-bold">Professor Dr. Shahid Iabal</h3>
                            <p className="text-[14px] font-normal text-[#333333]">
                                Principal of UE - Fsd
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;