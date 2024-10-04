import React from "react";
import Image from "next/image";

const Step = ({ number, title, description }) => (
  <div className="w-[100%] px-[1rem] py-[1.5rem] rounded-[16px] outline outline-[6px] outline-[#D1D4D5] flex flex-col items-center justify-start gap-[0.5rem] ">
    <div className="bg-[#D1D4D5] rounded-full p-[0.5rem]">
      <div className="bg-gradient-to-br from-[#131313] via-[#41444B] to-[#131313] rounded-full w-[40px] h-[40px] text-[20px] font-bold text-white text-center flex items-center justify-center">
        {number}
      </div>
    </div>
    <h3 className="text-[1.5rem] md:text-[2rem] font-bold mt-[0.75rem]">{title}</h3>
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
          description="We dive deep into your business goals, analyze your industry landscape, and understand your target audience to craft a personalized tech solution that fits perfectly."
        />
        <Step
          number="2"
          title="Create"
          description="Our team of experts creates visually compelling designs and robust, scalable systems to ensure your website or platform stands out and performs seamlessly."
        />
        <Step
          number="3"
          title="Deliver"
          description="We deliver your project with precision and provide continuous support to ensure everything runs smoothly. Your satisfaction drives our commitment to ongoing success."
        />
      </div>
    </div>
  );
}

export default Process;
