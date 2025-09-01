// import React, { useState } from "react";

// export default function PricingFaq() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const faqs = [
//     {
//       question: "What is Stackly AI?",
//       answer:
//         "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
//     },
//     {
//       question: "How does Stackly AI work?",
//       answer:
//         "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
//     },
//     {
//       question: "Is Stackly AI free to use?",
//       answer:
//         "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
//     },
//     {
//       question: "What image formats do StacklyAI APIs support?",
//       answer:
//         "Stackly AI supports multiple image formats. You can also reach out via our support page or chat for any format-specific queries.",
//     },
//     {
//       question: "How to handle other image formats e.g. HEIC, HEIF etc?",
//       answer:
//         "For unsupported image formats, you can contact support. We provide guidance or tools to convert and use those formats.",
//     },
//     {
//       question: "What is the expiration period for my credit pack?",
//       answer:
//         "Credit packs typically have an expiration of 12 months from the purchase date. Check your account for details.",
//     },
//   ];

//   return (
//     <section className="w-full py-16 px-4 sm:px-6 bg-white flex flex-col items-center">
//       {/* Heading */}
//       <div className="text-center mb-10 w-full">
//         <h2 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight">
//           <span className="inline-flex items-center gap-2">
//             <span className="text-white w-10 h-10 bg-[#007B82] rounded-full flex justify-center items-center text-2xl">
//               ?
//             </span>
//             Frequently Asked Questions
//           </span>
//         </h2>
//         <p className="mt-6 text-[#606060] max-w-[941px] mx-auto text-base md:text-lg font-normal leading-relaxed">
//           Have questions? We've got answers! Explore our FAQs to learn more
//           about how Stackly AI works, its features, and how it can help you
//           streamline your tasks effortlessly.
//         </p>
//       </div>

//       {/* FAQ Items */}
//       <div className="w-full max-w-[846px] bg-[#007B820F] rounded-[16px] shadow-md p-6 md:p-12 space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
//               activeIndex === index ? "bg-[#007B82]/10" : "bg-white"
//             }`}
//           >
//             <button
//               className={`w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none transition-colors duration-300 ${
//                 activeIndex === index
//                   ? "bg-[#007B82] text-white"
//                   : "text-[#2A2A2A]"
//               }`}
//               onClick={() => toggleFAQ(index)}
//             >
//               <span className="text-base md:text-lg font-medium">
//                 {faq.question}
//               </span>
//               <svg
//                 className={`w-5 h-5 transform transition-transform duration-200 ${
//                   activeIndex === index ? "rotate-180 text-white" : ""
//                 }`}
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {activeIndex === index && (
//               <div className="px-5 pb-6 text-sm md:text-base text-[#2A2A2A] bg-white">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

export default function PricingFaq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is Stackly AI?",
      answer:
        "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "How does Stackly AI work?",
      answer:
        "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Is Stackly AI free to use?",
      answer:
        "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: "What image formats do StacklyAI APIs support?",
      answer:
        "Stackly AI supports multiple image formats. You can also reach out via our support page or chat for any format-specific queries.",
    },
    {
      question: "How to handle other image formats e.g. HEIC, HEIF etc?",
      answer:
        "For unsupported image formats, you can contact support. We provide guidance or tools to convert and use those formats.",
    },
    {
      question: "What is the expiration period for my credit pack?",
      answer:
        "Credit packs typically have an expiration of 12 months from the purchase date. Check your account for details.",
    },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 441;
  const visibleFaqs = isMobile && !showAll ? faqs.slice(0, 3) : faqs;

  return (
  <section
  className="w-full px-4 sm:px-6 bg-white flex flex-col items-center 
             max-[440px]:py-10 py-16 max-[440px]:pb-4"
>


      {/* Heading */}
      <div
        className="text-center mb-10 w-full 
             max-[440px]:flex max-[440px]:flex-col 
             max-[440px]:w-[400px] 
             max-[440px]:h-[99px] 
             max-[440px]:gap-[20px]"
      >
        <h2
          className="text-3xl md:text-5xl font-black text-gray-800 leading-tight 
             max-[440px]:flex max-[440px]:flex-row max-[440px]:w-[400px] 
             max-[440px]:h-[28px] max-[440px]:gap-[14px] max-[440px]:justify-center max-[440px]:items-center max-[440px]:text-center mx-auto"
        >
          <span className="inline-flex items-center gap-2">
            <span className="text-white w-10 h-10 bg-[#007B82] rounded-full flex justify-center items-center text-2xl max-[440px]:w-[24px] max-[440px]:h-[24px]">
              ?
            </span>

            <span className="max-[440px]:w-[274px] max-[440px]:h-[28px] max-[440px]:text-[20px] max-[440px]:font-[600] max-[440px]:leading-[140%] max-[440px]:font-['Inter'] max-[440px]:text-center">
              Frequently Asked Questions
            </span>
          </span>
        </h2>

        <p
          className="mt-6 text-[#606060] max-w-[941px] mx-auto text-base md:text-lg font-normal leading-relaxed 
             max-[440px]:w-[400px] max-[440px]:h-[51px] 
             max-[440px]:text-[12px] max-[440px]:leading-[140%] 
             max-[440px]:font-[400] max-[440px]:text-center 
             max-[440px]:font-['Inter']"
        >
          Have questions? We've got answers! Explore our FAQs to learn more
          about how Stackly AI works, its features, and how it can help you
          streamline your tasks effortlessly.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-[846px] bg-[#007B820F] rounded-[16px] shadow-md p-6 md:p-12 space-y-4">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-sm transition-all duration-300
        ${activeIndex === index ? "bg-[#007B82]/10" : "bg-white"}
        max-[440px]:rounded-[8px] max-[440px]:w-[360px] max-[440px]:mx-auto`}
          >
            <button
              className={`w-full flex justify-between items-center text-left focus:outline-none transition-colors duration-300
          px-5 py-4
          ${activeIndex === index ? "bg-[#007B82] text-white" : "text-[#2A2A2A]"}
          max-[440px]:px-[12px] max-[440px]:py-[8px] max-[440px]:gap-[12px] 
          max-[440px]:h-[56px] max-[440px]:w-[360px]`}
              onClick={() => toggleFAQ(index)}
            >
              <span
                className="text-base md:text-lg font-medium 
            max-[440px]:w-[300px] max-[440px]:h-[20px] 
            max-[440px]:font-['Inter'] max-[440px]:font-[500] 
            max-[440px]:text-[14px] max-[440px]:leading-[140%] max-[440px]:tracking-[0] 
            flex items-center"
              >
                {faq.question}
              </span>

              <svg
                className={`w-5 h-5 transform transition-transform duration-200 
            ${activeIndex === index ? "rotate-180 text-white" : ""}
            max-[440px]:w-[13.63px] max-[440px]:h-[24px] max-[440px]:-rotate-90`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {activeIndex === index && (
              <div className="px-5 pb-6 text-sm md:text-base text-[#2A2A2A] bg-white max-[440px]:px-[12px] max-[440px]:pt-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        {/* View More Button */}
      {/* View More Button */}
{isMobile && faqs.length > 3 && (
  <div className="w-full flex justify-center max-[440px]:mt-4">
    <button
      onClick={() => setShowAll(!showAll)}
      className="text-[#007B82] text-sm font-semibold"
    >
      {showAll ? "View Less" : "View More"}
    </button>
  </div>
)}

      </div>

      
    </section>
  );
}