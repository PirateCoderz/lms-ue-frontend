/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import { Link } from "react-router-dom";
import Background from "../assets/background.jpeg"



const Hero = () => (
    <div
        className="w-full"
        style={{
            backgroundImage: `url(${Background})`,
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8 )",
            height: "100vh",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
        }}
    >
        <div
            className="w-full h-full"
        >
            <div className="flex flex-col absolute md:gap-4 gap-8 top-10 left-10 lg:left-40 text-white">
                <h5 className="text-[12px] font-light pb-2">University of Education, Faisalabad</h5>
                <div className="border-b w-[8%] border-textColor"></div>
                <p className="md:text-[48px] text-[24px]  font-bold custonFonts  ">
                    Are providing you{" "}
                    <span className="text-textColor">
                        world best
                        <br />
                    </span>{" "}
                    platform
                </p>
                <p className="text-[18px] font-medium leading-8 ">
                    As one of the pioneering educational institutions in Faisalabad, the University of Education, Faisalabad (UE) is renowned for its academic excellence. It holds the distinction of being the first government institution in Faisalabad since partition, and continues to lead in providing quality education and fostering student development.
                </p>
                <Link to="/about">
                    <button className="bg-bgColor rounded-full md:w-1/4 w-1/2 hover:border hover:border-textColor hover:bg-transparent hover:text-textColor transition-all ease-out duration-500 text-white p-2">
                        Read more
                    </button>
                </Link>
            </div>
        </div>

    </div>
);

export default Hero;