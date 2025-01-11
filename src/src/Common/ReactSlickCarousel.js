/* eslint-disable react/self-closing-comp */
import { Link } from "react-router-dom";
import Slider from "react-slick";
import IT from "../assets/computer pick.avif";
import CS from "../assets/cs.jpg";
import English from "../assets/english.avif";
import Phy from "../assets/phy.avif";
import Chem from "../assets/chemistry.avif";
import Zolo from "../assets/zoology.avif";

const dataCarousel = [
  {
    id: 1,
    img: IT,
    title: "Information Technology",
    link: "/categories/engineering",
  },
  {
    id: 2,
    img: CS,
    title: "Computer Science",
    link: "/categories/managment",
  },
  {
    id: 3,
    img: English,
    title: "English Literature",
    link: "/categories/computer",
  },
  {
    id: 4,
    img: Phy,
    title: "Physics",
    link: "/categories/health",
  },

  {
    id: 6,
    img: Chem,
    title: "Chemistory",
    link: "/categories/health3",
  },
  {
    id: 7,
    img: Zolo,
    title: "Zoology",
    link: "/categories/pharma",
  },
];

const ReactSlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden  my-10 text-white ">
      <Slider className="w-[80%] relative  m-auto " {...settings}>
        {dataCarousel.map((item) => (
          <div className=" px-8   " key={item.id}>
            <div className="relative rounded-t-md group   overflow-hidden">
              <img
                className="w-full group-hover:scale-110 h-[400px]  ease-in duration-300 cursor-pointer  rounded-t-md"
                src={item.img}
                alt="img"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  group-hover:scale-90  ease-in duration-300 cursor-pointer z-10  w-[80%] h-[350px]  border rounded-t-md"></div>
            </div>
            <h1 className="text-textColor font-bold custonFonts text-[20px] hover:text-white cursor-pointer rounded-b-md bg-transparent w-full py-4 ">
              {item.title}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReactSlickCarousel;
