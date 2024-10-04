import React from "react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const projectFeatures = [
  "1 landing page + 4 custom pages",
  "Basic design and layout (using templates or minimal custom design)",
  "Mobile-responsive website",
  "Basic SEO included (site meta tags, page titles, and descriptions)",
  "Backend functionality: Contact forms, basic data handling, and integration with email services",
  "1 round of revisions",
  "Hosting and domain setup (if needed)",
  "Optional: Advanced features like e-commerce setup or database integration (book a call for further discussion)",
];

const monthlyFeatures = [
  "1 landing page + up to 8 custom pages",
  "Fully custom design tailored to your brand",
  "Advanced mobile responsiveness and optimization",
  "Basic SEO included",
  "Backend functionality: API development, database integration, secure authentication, and user management",
  "Ongoing monthly updates and enhancements (content updates, security patches, feature upgrades)",
  "Optional: Advanced SEO setup, blog setup, and third-party integrations (+$50 or book a call for further discussion)",
  "2 rounds of revisions each month",
  "Regular performance monitoring and site analytics reporting",
  "Full support for cloud deployment, DNS management, and SSL setup",
];

// Component for rendering feature list
const FeatureList = ({ features }) => (
  <div className="mb-[1rem] md:mb-[2rem]  flex flex-col gap-[0.5rem]">
    {features.map((title, index) => (
      <div key={index} className="flex gap-[1rem] items-start justify-start">
        <div className="w-[1rem] h-[1rem] bg-[#41444B] bg-opacity-20 rounded-full text-[#41444B] text-[8px] p-[0.25rem] flex justify-center items-center">
          <FaCheck />
        </div>
        <h3 className="title-sub font-medium text-start">{title}</h3>
      </div>
    ))}
  </div>
);

// Component for rendering pricing card
const PricingCard = ({ price, description, link, buttonText, features, pricingPeriod }) => (
  <div className="w-[100%] p-[1rem] rounded-[16px] outline outline-[6px] outline-[#D1D4D5] flex flex-col justify-start items-start gap-[0.5rem]">
    <h1 className="font-bold text-[28px] md:text-[32px]">
      {price}
      <span className="title-sub"> {pricingPeriod}</span>
    </h1>
    <p className="title-sub text-start md:text-[14px]">{description}</p>
    <hr className="w-[100%] border-[1px] border-[#4b4141] mt-[0.5rem] mb-[0.75rem] opacity-50" />
    <FeatureList features={features} />
    <Link href={link} className="btn-primary w-[100%] mt-auto bg-[#41444B] text-[#F5F7F8]">
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
          buttonText="Book a Call Now"
          features={projectFeatures}
        />
        <PricingCard
          price="$499"
          pricingPeriod="/ month"
          description="Subscription-based, perfect for those who need multipage design"
          link="/f"
          buttonText="Book a Call Now"
          features={monthlyFeatures}
        />
      </div>
      <div className="w-[100%] p-[1rem] rounded-[16px] outline outline-[6px] outline-[#D1D4D5] flex flex-col justify-center items-start gap-[0.5rem]">
        <div className="w-[100%]">
          <h1 className="text-[20px] md:text-[2rem] font-medium text-start mb-[0.75rem]">
            Couldn&apos;t find a perfect plan?
          </h1>
          <p className="title-sub text-start sm:pr-[2rem]">
            If your project doesn&apos;t fit the plans mentioned, or if you&apos;d like to
            discuss before deciding, schedule a call with us. We promise to find
            a way to work together.
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
