import React from 'react'
import Ranking1 from "../assets/ranking1.png";
import Ranking2 from "../assets/ranking2.png";
import Ranking3 from "../assets/ranking3.png";
import SectionTitle from '../Common/SectionTitle';


const Ranking = () => (
    <div className='py-20'>
        <div className='bg-bgColor py-10'>
            <SectionTitle title="University Ranking" para="Explore Ranking" />
        </div>
        <div className='flex w-[80%] mx-auto flex-col gap-2 py-10'>
            <h1 className='custonFonts text-[22px] text-bgColor font-bold'>University Ranking and Quality Certification</h1>
            <p>The University of Education Faisalabad (part of the University of Education Lahore) holds a strong reputation in Pakistan. While specific rankings for the Faisalabad campus are not individually listed, the university overall is ranked 24th in Pakistan and 1343rd in Asia, according to EduRank. Additionally, in the Times Higher Education (THE) Impact Rankings 2024, the university achieved a global ranking between 401-600, showcasing its commitment to sustainability and societal impact. These rankings highlight the university's dedication to providing quality education and making meaningful contributions to society.</p>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  w-[80%] mx-auto '>
            <div className='flex items-center justify-center' >
                <img width="50%" className='hover:scale-125 cursor-pointer transition-all ease-in' src={Ranking1} alt='' />
            </div>
            <div className='flex items-center justify-center'>
                <img width="50%" className='hover:scale-125 cursor-pointer transition-all ease-in' src={Ranking2} alt='' />
            </div>
            <div className='flex items-center justify-center'>
                <img width="50%" className='hover:scale-125 cursor-pointer transition-all ease-in' src={Ranking3} alt='' />
            </div>
        </div>
    </div>
)

export default Ranking