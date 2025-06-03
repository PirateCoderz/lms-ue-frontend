import React from 'react'
import Ranking1 from "../assets/ranking1.png";
import Ranking2 from "../assets/ranking2.png";
import Ranking3 from "../assets/ranking3.png";
import SectionTitle from '../Common/SectionTitle';

const Ranking = () => (
  <div className='py-20'>
    <div className='bg-bgColor py-10'>
      <SectionTitle title="SLMS Ranking" para="Explore Ranking & Certifications" />
    </div>
    <div className='flex w-[80%] mx-auto flex-col gap-4 py-10'>
      <h1 className='custonFonts text-[22px] text-bgColor font-bold'>Platform Ranking and Quality Certifications</h1>
      <p>
        Since its inception, Smart Learning Management System (SLMS) has rapidly emerged as a leading online education platform, trusted by numerous universities worldwide.  
        Our platform has consistently achieved top rankings in usability, innovation, and learner engagement, supported by multiple quality certifications in educational technology and data security.
      </p>
      <p>
        SLMS continuously evolves to meet the dynamic needs of higher education, offering comprehensive course management, real-time analytics, and seamless integration capabilities.  
        Our commitment to quality and user-centric design has positioned SLMS as a benchmark in virtual learning environments, empowering institutions to deliver world-class education online.
      </p>
    </div>
    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 w-[80%] mx-auto gap-8'>
      <div className='flex items-center justify-center'>
        <img
          width="50%"
          className='hover:scale-125 cursor-pointer transition-all ease-in'
          src={Ranking1}
          alt='Award or Certification 1'
        />
      </div>
      <div className='flex items-center justify-center'>
        <img
          width="50%"
          className='hover:scale-125 cursor-pointer transition-all ease-in'
          src={Ranking2}
          alt='Award or Certification 2'
        />
      </div>
      <div className='flex items-center justify-center'>
        <img
          width="50%"
          className='hover:scale-125 cursor-pointer transition-all ease-in'
          src={Ranking3}
          alt='Award or Certification 3'
        />
      </div>
    </div>
  </div>
);

export default Ranking;
