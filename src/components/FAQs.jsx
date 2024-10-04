"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import Link from "next/link";

function FAQs() {
  const faqsData = [
    {
      question: "How Long Does a Project Take?",
      answer: `The timeline for each project depends on the package you choose:

$299 Basic Package: Typically takes 1-2 weeks. This includes 1 landing page and 4 custom pages with basic design and functionality, along with 1 round of revisions.

$499 Professional Package: Usually completed within 2-4 weeks. This package includes up to 8 custom pages, advanced design, 2 rounds of revisions, and optional advanced features like SEO or blog setup.

Custom Pricing Enterprise Package: The timeline for custom projects varies based on the complexity and scope. A typical enterprise-level project can take anywhere from 4-8 weeks or more, depending on the number of pages, features, and revisions required.

We work closely with you throughout the process to ensure timely delivery without compromising quality.`,
    },
    {
      question: "Can I Request Additional Features After the Project Begins?",
      answer:
        "Yes, you can request additional features even after the project has started. However, any changes or additions outside of the agreed-upon scope may affect the timeline and cost. We&apos;ll evaluate your request and provide you with a clear estimate for any extra work before proceeding.",
    },
    {
      question: "Do You Offer Support After the Website is Launched?",
      answer:
        `Absolutely! All of our packages include post-launch support:

The $299 Basic Package includes 1 month of support for minor adjustments and bug fixes.
The $499 Professional Package offers 1 month of support with ongoing assistance for any technical issues or updates.
Our Custom Pricing Enterprise Package provides up to 6 months of ongoing support, ensuring your website stays up-to-date and runs smoothly.
If you require longer-term support, we also offer extended maintenance plans to keep your website running optimally.`,
    },
    
    // Add more FAQs here as needed
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <section className="w-[100%] flex flex-col md:flex-row justify-start items-start gap-[2rem]">
      <div className="w-[100%] flex-grow flex flex-col gap-[1rem]">
        <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-center leading-tight pb-[1rem] md:pb-[2rem] md:text-start md:pl-[1.5rem]">
          FAQs
        </h2>

        <div className="w-[100%] mx-auto rounded-[16px] flex flex-col px-[1.5rem] gap-[0.5rem]">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col gap-[0.5rem]"
              onClick={() => handleQuestionClick(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="w-[80%] title-sub text-[1rem] font-medium text-start">
                  {faq.question}
                </h3>
                <div className={selectedQuestion === index ? "rotate-180" : ""}>
                  <FaCaretDown />
                </div>
              </div>
              <p
                className={`title-sub text-start ${
                  selectedQuestion === index ? "" : "hidden"
                }`}
              >
                {faq.answer}
              </p>
              <hr className="w-[100%]  my-[0.25rem]"></hr>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow md:max-w-[30rem] bg-gradient-to-bl from-[#131313] via-[#41444B] to-[#131313] text-white p-[1rem] md:p-[2rem] rounded-[16px] flex flex-col gap-[2rem]">
        <h1 className="text-[1.25rem] md:text-[2rem] font-medium leading-tight text-start">
          We assure you of the best and quickest service with us. Let&apos;s make
          something great together
        </h1>
        <Link
          href={"/"}
          className="text-[1rem] md:text-[1.25rem] text-center rounded-[12px] bg-[#F5F7F8] text-[#41444B] font-medium py-[1rem]"
        >
          Book a quick 15 min Call Now
        </Link>
      </div>
    </section>
  );
}

export default FAQs;
