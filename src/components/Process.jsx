import React from "react";
import Image from "next/image";

const Step = ({ number, title, description }) => (
  <div className="w-[100%] px-[1rem] md:px-[1.5rem] py-[1.5rem] rounded-[16px] outline outline-[6px] outline-[#f4f4f4] flex flex-col items-center justify-start gap-[0.5rem] bg-gradient-to-b from-[#f6f6f6] via-[#f6f6f6] to-[#e8e6e646] bg-opacity-60 shadow-[inset_0_6px_15px_0px_rgba(0,0,0,0.05)]">
    <div className="bg-[#e9e7e7] rounded-full p-[0.5rem] bg-opacity-40">
      <div className="bg-gradient-to-br from-[#fff] via-[#e9e7e7] to-[#fff] rounded-full w-[40px] h-[40px] text-[20px] font-bold text-[#131313] text-center flex items-center justify-center">
        {number}
      </div>
    </div>
    <h3 className="text-[1.5rem] md:text-[32px] font-medium mt-[0.75rem]">
      {title}
    </h3>
    <p className="title-sub">{description}</p>
  </div>
);

function Process() {
  return (
    <div className="flex flex-col justify-center items-center gap-[1rem] mx-auto md:max-w-[80rem]">
      <h2 className="title-primary">How we work</h2>

      <div className="flex flex-col md:flex-row gap-[1.5rem]">
        <Step
          number="1"
          title="Discover"
          description="We assess your goals, study your industry, and understand your audience to design a custom tech solution."
        />
        <Step
          number="2"
          title="Create"
          description="Our team crafts engaging designs and scalable systems to ensure a standout, high-performance platform."
        />
        <Step
          number="3"
          title="Deliver"
          description="We deliver with precision and provide ongoing support, ensuring everything works smoothly for your success."
        />
      </div>
    </div>
  );
}

export default Process;
