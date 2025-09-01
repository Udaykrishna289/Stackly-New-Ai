import React from "react";

const plans = [
  {
    name: "Basic",
    keys: "1 Key",
    credits: "10 Renders",
    usage: "For personal or early-stage testing",
  },
  {
    name: "Silver",
    keys: "5 Keys",
    credits: "1000 Renders",
    usage: "Ideal for startups or small teams",
  },
  {
    name: "Gold",
    keys: "10 Keys",
    credits: "Unlimited*",
    usage: "Built for agencies, platforms, or scaling apps",
  },
];

const Plan = () => {
  return (
    <div className="w-full  flex flex-col items-center px-4 py-10 bg-white">
      {/* Heading */}
      <h2 className="text-[44px] h-[64px] font-bold text-center leading-[64px] py-[20px]">
        <span className="text-[#00c6be]">API</span> Access Based on Your Plan
      </h2>

      {/* Table */}
      <div className="w-[1280px] min-h-[433px] rounded-[20px] border-[1px] border-solid border-[#007B82] top-10 relative overflow-hidden">
        <table className="w-[1280px] h-[433px] text-center text-sm md:text-base text-[#2A2A2A] border-collapse outline-none  rounded-bl-[20px] rounded-br-[20px]">
          <thead className="w-[1280px] min-h-[83px] rounded-tl-[20px] rounded-tr-[20px] bg-[#00B0BA1F]  ">
            <tr>
              <th className="px-6 py-4 font-medium border-r border-[#E0E0E0]">
                Plan
              </th>
              <th className="px-6 py-4 font-medium border-r border-[#E0E0E0]">
                API Keys Included
              </th>
              <th className="px-6 py-4 font-medium border-r border-[#E0E0E0]">
                Monthly Credits
              </th>
              <th className="px-6 py-4 font-medium">Usage Scenario</th>
            </tr>
          </thead>
          <tbody className="gradient-bg">
            {plans.map((plan, idx) => (
              <tr key={idx} className="border-t border-[#E0E0E0]">
                <td className="px-6 py-4 border-b border-[#E0E0E0] ">
                  {plan.name}
                </td>
                <td className="px-6 py-4 border-b border-[#E0E0E0]">
                  {plan.keys}
                </td>
                <td className="px-6 py-4 border-b border-[#E0E0E0]">
                  {plan.credits}
                </td>
                <td className="px-6 py-4">{plan.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default Plan;
