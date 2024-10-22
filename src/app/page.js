import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Balancer from "react-wrap-balancer";
import GridBackground from "@/components/Background";
import TechStack from "@/components/TechStack";
import AnimatedHeading from "@/components/Heading";

function page() {
  return (
    <div className="max-w-[40rem] md:max-w-[80rem] mx-auto p-[1.5rem] md:px-[4rem] flex flex-col justify-center items-center gap-[4rem] md:gap-[5rem] lg:gap-[6rem] text-[#41444B]">
      <div className="absolute top-0 right-0 w-screen -z-50">
        <GridBackground />
      </div>
      <Navbar />
      <div className="h-[50px]"></div>

      <section className="relative flex flex-col justify-center items-center gap-[2rem] z-10 py-[0rem]">
        <div className="absolute top-[1rem] w-[100%] h-[100%] bg-[#F5F7F8] rounded-full blur-2xl -z-10 "></div>
        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.2] md:leading-[1.2] lg:leading-[1.2] text-center p-[0.25rem] bg-gradient-to-tl from-[#575a63] via-[#131313] to-[#131313] bg-clip-text text-transparent">
          <Balancer>
            Crafting engaging websites with meaningful designs that{" "}
          </Balancer>

          <AnimatedHeading />
        </h1>

        <h3 className="text-[14px] md:text-[20px] font-light tracking-tight leading-tight text-center">
          <Balancer>
            We work with startups, creatives, and visionaries. Through efficient
            design, we create websites that excel as powerful sales engines,
            fostering success, engagement, and growth.
          </Balancer>
        </h3>

        <div className="bg-gradient-to-b from-[#f6f6f6] via-[#f6f6f6] to-[#e8e6e656] shadow-[inset_0_6px_15px_0px_rgba(0,0,0,0.075)] p-[1rem] rounded-[16px] flex items-center justify-center">
          <Link
            href={"facebook.com"}
            className=" px-[1.5rem] py-[0.5rem] rounded-[8px] bg-gradient-to-br from-[#131313] via-[#41444B] to-[#131313] md:text-[1.25rem] font-medium text-white"
          >
            Book a free Call
          </Link>
        </div>
      </section>

      {/* <Work /> */}

      <Process />

      <TechStack />

      <Pricing />

      <FAQs />

      {/* <Footer /> */}
    </div>
  );
}

export default page;
