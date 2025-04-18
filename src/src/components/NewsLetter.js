/* eslint-disable react/self-closing-comp */
import ueImage from "../assets/background.jpeg"

const NewsLetter = () => (
        <div
            className="w-full flex items-center justify-center h-[50vh]"
            style={{
                backgroundImage: `url(${ueImage})`,
                boxShadow: "inset 0 0 0 2000px rgba(31,33,39, 0.9 )",
                width: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="w-[80%] m-auto grid md:grid-cols-2 grid-cols-1 gap-12  ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <div className="flex gap-2 items-center">
                            <p className="text-white text-[12px]">SUBSCRIBE TO OUR</p>
                            <div className="w-8 h-[1px] bg-textColor"></div>
                        </div>
                        <h2 className="custonFonts text-textColor text-[34px] font-bold">Newsletter</h2>
                    </div>
                    <p className="text-white text-base">Receive the latest info on admisions, programs and scholorships, as well as updated tips and trends from our it experts.</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex">
                        <input type="email" placeholder="Enter your email address" className="py-4 px-8 border-none rounded-l-xl outline-none focus:outline-none w-[70%]" />
                        <button className="bg-bgColor custonFonts font-bold text-white px-8 rounded-r-xl py-4 w-[30%]">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );

export default NewsLetter;
