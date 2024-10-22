import React from "react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const projectFeatures = [
  "1 landing + 4 custom pages",
  "Basic design & layout",
  "Mobile-responsive",
  "Basic SEO (meta, titles, descriptions)",
  "Contact forms, data handling, email integration",
  "1 revision",
  "Hosting & domain setup",
  "Optional: Advanced features (e-commerce, database)",
];

const monthlyFeatures = [
  "1 landing + 8 custom pages",
  "Custom design",
  "Mobile optimized",
  "Basic SEO",
  "API, database, authentication, user management",
  "Monthly updates (content, security, features)",
  "Optional: SEO, blog, integrations (+$50)",
  "2 revisions/month",
  "Performance monitoring",
  "Cloud, DNS, SSL support",
];

// Component for rendering feature list
const FeatureList = ({ features }) => (
  <div className="mb-[1rem] md:mb-[2rem]  flex flex-col gap-[0.5rem]">
    {features.map((title, index) => (
      <div key={index} className="flex gap-[1rem] items-start justify-start">
        <div className="w-[1rem] h-[1rem] bg-[#EBEBEB] rounded-full text-[#41444B] text-[8px] p-[0.25rem] flex justify-center items-center">
          <FaCheck />
        </div>
        <h3 className="title-sub font-medium text-start">{title}</h3>
      </div>
    ))}
  </div>
);

// Component for rendering pricing card
const PricingCard = ({
  price,
  description,
  link,
  buttonText,
  features,
  pricingPeriod,
}) => (
  <div className="w-[100%] p-[1rem] md:p-[1.5rem] rounded-[16px] outline outline-[6px] outline-[#f4f4f4] flex flex-col justify-start items-start gap-[0.5rem] bg-gradient-to-b from-[#f6f6f6] via-[#f6f6f6] to-[#e8e6e656] shadow-[inset_0_6px_15px_0px_rgba(0,0,0,0.05)]">
    <div className="flex flex-col justify-start items-start gap-[0.5rem] bg-[#EBEBEB] bg-opacity-50 w-[100%] p-[1rem] rounded-[12px] mb-[1rem] shadow-[inset_0_-6px_15px_0px_rgba(0,0,0,0.05)]">
      <h1 className="font-bold text-[28px] md:text-[32px]">
        {price}
        <span className="title-sub"> {pricingPeriod}</span>
      </h1>
      <p className="title-sub text-start md:text-[14px]">{description}</p>
    </div>
    {/* <hr className="w-[100%] border-[1px] border-[#4b4141] mt-[0.5rem] mb-[0.75rem] opacity-50" /> */}
    <FeatureList features={features} />
    <Link
      href={link}
      className="btn-primary w-[100%] mt-auto bg-[#41444B] text-[#F5F7F8]"
    >
      {buttonText}
    </Link>
  </div>
);

function Pricing() {
  return (
    <section className="flex flex-col gap-[1.5rem]">
      <h2 className="title-primary">Pricing</h2>
      <div className="flex flex-col sm:flex-row gap-[1.5rem] flex-grow">
        <PricingCard
          price="$299"
          pricingPeriod="/ project"
          description="Standalone project, ideally good for small scale startups"
          link="/f"
          buttonText="Get Started Now"
          features={projectFeatures}
        />
        <PricingCard
          price="$499"
          pricingPeriod="/ month"
          description="Subscription-based, perfect for those who need multipage design"
          link="/f"
          buttonText="Get Started Now"
          features={monthlyFeatures}
        />
      </div>
      <div className="w-[100%] p-[1rem] md:p-[1.5rem] rounded-[16px] outline outline-[#f4f4f4] flex flex-col justify-start items-start gap-[0.5rem] bg-gradient-to-b from-[#f6f6f6] via-[#f6f6f6] to-[#e8e6e656] shadow-[inset_0_6px_15px_0px_rgba(0,0,0,0.05)]">
        <div className="w-[100%]">
          <h1 className="text-[20px] md:text-[2rem] font-medium text-start mb-[0.75rem]">
            Couldn&apos;t find a perfect plan?
          </h1>
          <p className="title-sub text-start sm:pr-[2rem]">
            If your project doesn&apos;t fit the plans mentioned, or if
            you&apos;d like to discuss before deciding, schedule a call with us.
            We promise to find a way to work together.
          </p>
        </div>
        <Link
          href="/f"
          className="btn-primary sm:w-[10rem] mt-[1rem] text-white bg-[#41444B]"
        >
          Let&apos;s Discuss
        </Link>
      </div>
    </section>
  );
}

export default Pricing;
