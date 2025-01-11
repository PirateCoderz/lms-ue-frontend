/* eslint-disable jsx-a11y/img-redundant-alt */
import SectionTitle from "../Common/SectionTitle"
import Event1 from "../assets/event1.jpeg"
import Event2 from "../assets/event2.jpeg"
import Event3 from "../assets/event3.jpeg"

const blogData = [
    {
        id: 1,
        image: Event1,
        title: "UNDERGRADUATE GALA",
        para: "5TH UNDERGRADUATE RESEARCH GALA",
        date: " | 12:00 am - 11:59 pm"

    },
    {
        id: 2,
        image: Event2,
        title: "internship programs",
        para: "Metro Company Creates opportunities for RSBM students for internship programs",
        date: " | 8:00 am - 4:00 pm"

    },
    {
        id: 3,
        image: Event3,
        title: "International Conference",
        para: "International Conference on Ecolinguistics and Ecological Narratives by the Department of English (Linguistics and Literature ) Islamabad (CELEN’22)",
        date: " |8:00 am - 5:00 pm"

    },

]
const Events = () => (
        <div className='w-full bg-bgColor py-10'>
            <SectionTitle title="Events" para="EXPLORE" />
            <div className='w-[80%] m-auto py-10 cursor-pointer gap-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    blogData.map((item) => (
                        <div className='flex w-full  flex-col gap-4 border border-gray-700 rounded-lg' key={item.id}>
                            <div className='w-full '>
                                <img className='w-full h-[350px] opacity-50 hover:opacity-100  transition-all ease-in-out' src={item.image} alt='image' />
                            </div>
                            <div className='flex flex-col p-8 gap-2'>
                                <h4 className='text-textColor text-[18px] font-semibold'>{item.title}</h4>
                                <p className='text-[#999999] text-[18px] font-normal'>{item.para}</p>
                                <p className='text-textColor text-[14px] font-normal'>{item.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

export default Events