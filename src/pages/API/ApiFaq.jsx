// import React, { useState } from "react";

// export default function ApiFaq({ faqs }) {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <section className="w-full py-8 md:py-16 px-4 sm:px-6 bg-white flex flex-col items-center mt-10">
//       <div className="text-center mb-6 md:mb-10 w-full">
//         <h2 className="text-3xl md:text-[48px] font-black text-gray-800 leading-[100%]">
//           <span className="inline-flex items-center text-md:text-[30px] gap-2">
//             <span className="text-[white] w-8 h-8 md:w-[50px] md:h-[50px] bg-[#007B82] rounded-full flex justify-center items-center text-xl md:text-4xl">?</span> Frequently Asked
//             Questions
//           </span>
//         </h2>
//         <p className="mt-4 md:mt-10 text-[#B0B0B0] max-w-[941px] min-h-[48px] mx-auto text-md text-base md:text-[20px] font-[400] leading-[120%] md:leading-[100%]">
//           Have questions? We've got answers! Explore our FAQs to learn more
//           about how Stackly AI works, its features, and how it can help you
//           streamline your tasks effortlessly.
//         </p>
//       </div>

//       <div className="w-full max-w-[846px] h-auto md:h-[758px] bg-[#007B820F] rounded-[16px] shadow-md p-4 sm:p-6 md:p-12 space-y-4 flex flex-col justify-center">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`bg-white rounded-lg overflow-hidden shadow-sm ${
//               activeIndex === index ? "bg-[#007B82] bg-opacity-10" : ""
//             }`}
//           >
//             <button
//               className={`w-full flex justify-between items-center p-3 sm:p-4 md:p-5 text-base sm:text-lg md:text-[22px] font-medium text-left focus:outline-none ${
//                 activeIndex === index ? "bg-[#007B82] text-white" : "text-[#2A2A2A]"
//               }`}
//               onClick={() => toggleFAQ(index)}
//             >
//               <span className="text-left">{faq.question}</span>
//               <svg
//                 className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-200 ${
//                   activeIndex === index ? "rotate-180 text-white" : "text-current"
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
//               <div className="px-10 pt-2 pb-10 text-[#2a2a2a] bg-[white] text-sm sm:text-base md:text-[18px]">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";

export default function ApiFaq({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 441);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleFaqs = isMobile && !showAll ? faqs.slice(0, 4) : faqs;

  return (
    <section className="w-full py-8 md:py-16 px-4 sm:px-6 bg-white flex flex-col items-center mt-10 max-[440px]:pb-4">
      {/* Heading */}
      <div
        className="text-center mb-6 md:mb-10 w-full 
               max-[440px]:flex max-[440px]:flex-col 
               max-[440px]:items-center max-[440px]:gap-[20px] 
               max-[440px]:w-[400px] max-[440px]:h-auto"
      >
        <h2
          className="text-3xl md:text-[48px] font-black text-gray-800 leading-[100%] 
                 max-[440px]:w-[400px] max-[440px]:h-[28px] 
                 max-[440px]:text-[20px] max-[440px]:font-[600] 
                 max-[440px]:leading-[140%] max-[440px]:mx-auto 
                 max-[440px]:text-center"
        >
          <span
            className="inline-flex items-center gap-2 md:text-[30px] 
                     max-[440px]:gap-[14px] max-[440px]:w-full 
                     max-[440px]:justify-center max-[440px]:items-center"
          >
            <span
              className="text-white w-8 h-8 md:w-[50px] md:h-[50px] bg-[#007B82] 
                       rounded-full flex justify-center items-center 
                       text-xl md:text-4xl"
            >
              ?
            </span>
            <span className="max-[440px]:text-[20px] max-[440px]:leading-[140%] max-[440px]:font-[600]">
              Frequently Asked Questions
            </span>
          </span>
        </h2>

        <p
          className="mt-4 md:mt-10 text-[#B0B0B0] max-w-[941px] min-h-[48px] mx-auto text-md text-base md:text-[20px] font-[400] leading-[120%] md:leading-[100%] 
                   max-[440px]:w-[400px] max-[440px]:h-[51px] 
                   max-[440px]:text-[12px] max-[440px]:font-[400] 
                   max-[440px]:leading-[140%] max-[440px]:text-center"
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
        {isMobile && faqs.length > 4 && (
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

