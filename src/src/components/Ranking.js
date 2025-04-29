import React from 'react'
import Ranking1 from "../assets/ranking1.png";
import Ranking2 from "../assets/ranking2.png";
import Ranking3 from "../assets/ranking3.png";
import SectionTitle from '../Common/SectionTitle';


const Ranking = () => (
        <div className='py-20'>
            <div className='bg-bgColor py-10'>
                <SectionTitle title="College Ranking" para="Explore Ranking" />
            </div>
            <div className='flex w-[80%] mx-auto flex-col gap-2 py-10'>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>College Ranking and Quality Certification</h1>
                <p>In 1975, it was upgraded to Degree level and in 1999 MA (Political Science) was started followed by English and Economics in 2002 and Islamic Studies in 2010. Recognizing the importance of IT and commerce, the college introduced ICS and I.Com Programs in 1999 and 2007 respectively. The College is offering BS (FYDP) under semester system in the disciplines of Botany, Chemistry, Geography, Computer Science, Economics, English, Information Technology, Islamic Studies, Mathematics, Physics, Sociology, Urdu, History, Punjabi, Statistics, Psychology, Zoology and Political Science. The College is affiliated with the BISE Faisalabad for intermediate and with GC University Faisalabad for higher studies. Heading a step forward in academics the College commenced M.Phil in three disciplines i.e Chemistry, Islamic Studies and Urdu in spring 2014. It affords a great pleasure that two batches of M.Phil have successfully completed their degrees. College name was changed to University of Education Faisalabad in 2021 as per policy of HED, Govt. of Punjab.</p>
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