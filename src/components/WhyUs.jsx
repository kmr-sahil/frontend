import React from "react";
import Balancer from "react-wrap-balancer";

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[1.5rem] mx-auto md:max-w-[80rem] py-[3rem]">
      {/* Introduction Section */}
      <div className="text-center">
        <Balancer>
          <h2 className="title">
            We’re the Creative Partner You’ve Been Looking For
          </h2>
        </Balancer>
        <Balancer>
          <p className="title-primary pt-[2rem]">
            We’re more than just an agency—we’re your collaborators,<br className="hidden md:block"></br>
            problem-solvers, and growth enablers.
          </p>
        </Balancer>
      </div>

      {/* Marquee Sections */}
      <div className="w-full space-y-[1rem]">
        {/* Your Marquee components here */}
      </div>
    </div>
  );
};

export default WhyUs;
