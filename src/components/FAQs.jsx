"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import Link from "next/link";

function FAQs() {
  const faqsData = [
    {
      question: "Who's Behind the Team?",
      answer: "We're a team of creative specialists, each excelling in their domain—marketing, frontend, DevOps, design, and engineering. Every member brings unique expertise to the table."
    },
    {
      question: "How Long Does a Project Take?",
      answer: "The timeline depends on your selected plan and project scope. We keep you updated throughout the process to ensure transparency."
    },
    {
      question: "What If I Don't Like the Work?",
      answer: "We offer unlimited revisions until you're satisfied. If you're still unhappy, we provide a refund."
    },
    {
      question: "Can I Get My Work Delivered Faster?",
      answer: "Yes! We can speed up the timeline by involving more talent. We'll tailor it according to your budget."
    },
    {
      question: "Can I Request Additional Features Later?",
      answer: "Yes, you can. However, adding features outside the initial scope may affect the timeline and cost. We'll provide an estimate before proceeding."
    },
    {
      question: "Do You Offer Support After the Website Launch?",
      answer: "Absolutely! All packages include post-launch support. For long-term maintenance, we offer extended plans."
    }
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
        <h2 className="text-[1.25rem] lg:text-[2rem] font-medium leading-tight text-start">
          We assure you of the best and quickest service with us. Let&apos;s make
          something great together
        </h2>
        <Link
          href={"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Rwa1VyUevVLzniFjS9o_p_lYKagqz-QfVUUpLb0FQ4e1fmI4_IA2nzlSPBI5pZEQ8NQ-Q75TD"}
          className="text-[1rem] md:text-[1.25rem] leading-5 text-center rounded-[12px] bg-[#F5F7F8] text-[#41444B] font-medium py-[1rem] whitespace-nowrap"
        >
          Book a quick 15 min Call Now
        </Link>
      </div>
    </section>
  );
}

export default FAQs;
