import React from "react";

const AfterCustomAPIPlan = () => {
  return (
    <div className="w-full min-h-[794px] bg-gradient-to-b from-[#011B1C] to-[#057D82] flex justify-center items-center">
      <div className="max-w-[1280px] min-h-[581px] flex flex-col items-center">
        <h2 className="w-[709px] min-h-[64px] font-[800] text-[44px] leading-[64px] text-center text-white">
          Why Choose a <span className="text-[#00B0BA]">Custom API Plan?</span>
        </h2>
        <div className="flex gap-[40px] mt-[60px] flex-wrap justify-center">
          {/* Box 1 */}
          <div className="w-[350px] h-[330px] px-[40px] py-[80px] gap-[10px] bg-white rounded-[24px] flex flex-col items-center text-center">
            <h3 className="text-[#00B0BA] font-bold text-[28px] leading-[100%]">
              Tailored Integrations
            </h3>
            <p className="mt-[16px] text-[#2B2B2B] text-[16px] leading-[150%]">
              Get APIs configured to suit your specific workflows, data requirements,
              and use cases—no unnecessary extras.
            </p>
          </div>

          {/* Box 2 */}
          <div className="w-[350px] h-[330px] px-[40px] py-[80px] gap-[10px] bg-white rounded-[24px] flex flex-col items-center text-center">
            <h3 className="text-[#00B0BA] font-bold text-[28px] leading-[100%]">
              Scalable to Your Needs
            </h3>
            <p className="mt-[16px] text-[#2B2B2B] text-[16px] leading-[150%]">
              Whether you're a startup or an enterprise, adjust your API limits,
              endpoints, and access as your business evolves.
            </p>
          </div>

          {/* Box 3 */}
          <div className="w-[350px] h-[330px] px-[40px] py-[80px] gap-[10px] bg-white rounded-[24px] flex flex-col items-center text-center">
            <h3 className="text-[#00B0BA] font-bold text-[28px] leading-[100%]">
              Priority Support
            </h3>
            <p className="mt-[16px] text-[#2B2B2B] text-[16px] leading-[150%]">
              Work directly with our experts for implementation, troubleshooting, and
              optimization to ensure your API runs smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterCustomAPIPlan;
