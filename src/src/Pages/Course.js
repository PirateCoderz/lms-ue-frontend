import React from "react";
import { useLocation } from "react-router-dom";

const Course = () => {
  const location = useLocation();
  const state = location.state.data;
  console.log(state);
  return (
    <div className="flex p-36 flex-col gap-4 ">
      <h1 className="font-semibold text-[28px]">Department Of {state.name}</h1>
      <div className="flex py-2  flex-col gap-1">
        <h2 className="font-semibold">Scheme of Studies</h2>
        <h2 className="bg-bgColor text-white p-4">BS,MS {state.name}</h2>
      </div>
      <div className="flex py-2 flex-col gap-1">
        <h3 className="font-semibold text-[18px]">Vision</h3>
        <p>{state.vision}</p>
      </div>
      <div className="flex py-2 flex-col gap-1">
        <h3 className="font-semibold text-[18px]">Mission</h3>
        <p>{state.mission}</p>
      </div>
      <div className="flex py-2 flex-col gap-1">
        <h3 className="font-semibold text-[18px]">Introduction</h3>
        <p>{state.introduction}</p>
      </div>
    </div>
  );
};

export default Course;
