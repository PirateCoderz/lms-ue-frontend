/* eslint-disable arrow-body-style */
import React from "react";
import FeeStructures from "../components/CustomizeAccordians";
import SectionTitle from "../Common/SectionTitle";

const FeeStructure = () => {
  return (
    <div className="flex flex-col gap-4 p-24">
      <SectionTitle color="bgColor" bgColor="bg-bgColor" title="FAQ" para="Explore" />
      <FeeStructures />
    </div>
  );
};

export default FeeStructure;
