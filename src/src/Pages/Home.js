/* eslint-disable import/no-useless-path-segments */
import React from "react";
import CustomizedAccordions from "../components/CustomizeAccordians";
// import EasyAdmision from "../components/EasyAdmision";
import Events from "../components/Events";
import Hero from "../components/Hero";
// import LifeAtGgcsf from "../components/LifeAtGgcsf";
import Ranking from "../components/Ranking";
import AboutUs from "./../components/AboutUs";
import Programs from "./../components/Programs";
import NewsLetter from "./../components/NewsLetter";
// import SectionTitle from "../Common/SectionTitle";
import LifeAtUE from "../components/LifeAtUe";

const Home = () => (
    <div>
      <Hero />
      <AboutUs />
      <Programs />
      {/* <EasyAdmision /> */}
      <div className="w-full bg-bgColor">
        <div className="w-[80%]  m-auto py-20">
          <div className="flex flex-col gap-4">
            {/* <SectionTitle title="Fee Structure" para="Explore Fees" /> */}
            <CustomizedAccordions />
          </div>
        </div>
      </div>
      <LifeAtUE />
      <Ranking />
      <Events />
      <NewsLetter />
    </div>
  );

export default Home;
