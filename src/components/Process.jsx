import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const FeatureBox = ({ title, description }) => (
  <div className="w-[100%] px-[1rem] md:px-[1.5rem] py-[1.5rem] md:py-[2rem] rounded-[16px] outline outline-[6px] outline-[#f1f1f1] flex flex-col items-center justify-start gap-[0.5rem] bg-gradient-to-b from-[#f6f6f6] via-[#f6f6f6] to-[#e8e6e646] bg-opacity-60 shadow-[inset_0_6px_20px_0px_rgba(0,0,0,0.09)]">
    {/* Placeholder for icons */}
    <div className="bg-[#e9e7e7] rounded-full p-[0.5rem] bg-opacity-40 w-[50px] h-[50px] flex items-center justify-center">
      {/* Add your icon here later */}
    </div>
    <h3 className="title-primary pt-[1rem] pb-[0.2rem]">
      {title}
    </h3>
    <p className="title-sub text-center">{description}</p>
  </div>
);

function Process() {
  return (
    <div className="flex flex-col justify-center items-center gap-[1rem] mx-auto md:max-w-[80rem] text-center mb-[2rem]">
      <Balancer>
        <h2 className="title">
          From Concept to Execution, We’ve Got You Covered
        </h2>
      </Balancer>

      <Balancer>
        <p className="title-primary">
          We don’t just deliver tasks—we deliver solutions. Whether it’s a
          single design or a full-scale project, we’re here to guide you every
          step of the way.
        </p>
      </Balancer>

      <div className="flex flex-col md:flex-row gap-[1.5rem] mt-[1.5rem]">
        <FeatureBox
          title="End-to-End Expertise"
          description="Top 1% creative talent for all your problems."
        />
        <FeatureBox
          title="Fast & Reliable"
          description="We respect your time and deliver on our promises."
        />
        <FeatureBox
          title="Polished Outcomes"
          description="We listen, we create, and we polish solutions until they work for you."
        />
      </div>
    </div>
  );
}

export default Process;
