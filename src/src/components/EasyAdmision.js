/* eslint-disable react/self-closing-comp */

import { IoBagCheckOutline } from "react-icons/io5";
import { CgCardHearts } from "react-icons/cg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import SectionTitle from "../Common/SectionTitle";

const processData = [
  {
    id: 1,
    step: "Step 1",
    icon: IoBagCheckOutline,
    title: "Register Online",
    para: "Create your account and fill out the online admission form through SLMS portal.",
  },
  {
    id: 2,
    step: "Step 2",
    icon: CgCardHearts,
    title: "Verify Documents",
    para: "Upload necessary documents and await verification from the admissions team.",
  },
  {
    id: 3,
    step: "Step 3",
    icon: TfiHeadphoneAlt,
    title: "Complete Payment",
    para: "Pay your admission fees securely online to confirm your enrollment.",
  },
];

const EasyAdmission = () => (
  <div className="w-full bg-textColor py-10">
    <div className="flex flex-col pb-4 gap-4">
      <div className="flex flex-col mx-auto justify-center">
        <h4 className="text-[12px] text-bgColor">Why Choose SLMS</h4>

        <h2 className="text-[34px] text-bgColor font-bold custonFonts">
          Easy Admission Process
        </h2>
        <div className="w-[40px] flex justify-start items-start h-[1px] bg-bgColor"></div>
      </div>
    </div>

    <div className="w-[80%] py-10 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
      {processData.map((item) => (
        <div className="flex flex-col items-center gap-4" key={item.id}>
          <div className="w-28 relative h-28 bg-bgColor rounded-full flex items-center justify-center">
            <item.icon className="text-[48px] text-textColor" />
            <div className="absolute top-0 right-0 bg-bgColor p-1 text-[12px] text-center rounded-full border-2 border-bgColor text-white">
              {item.step}
            </div>
          </div>

          <h2 className="custonFonts text-bgColor text-[18px] font-bold">
            {item.title}
          </h2>
          <p className="text-bgColor text-center w-[80%] text-[16px] font-normal">
            {item.para}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default EasyAdmission;
