import React from "react";
import BG3 from "../../assets/afterHome/APIAfterLogin3.png";

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

const AfterPlan = () => {
  return (
     <div
      className="w-full flex flex-col items-center px-4 py-10 pb-[100px] bg-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BG3})` }}
    >
    <h2 className="w-[1270px] h-[31px] text-center font-medium text-[24px] leading-[100%]">
  <span className="text-[#8A38F5]  lora-text">API</span>
  <span className="text-white  lora-text" > Access Based on Your Plan</span>
</h2>



      {/* Table */}
      <div className="w-[1270px] min-h-[254px] rounded-[20px] top-10 relative overflow-hidden">
        <table className="w-[1270px] h-[254px] text-center text-sm md:text-base text-[#2A2A2A] border-collapse outline-none  rounded-bl-[20px] rounded-br-[20px]">
          <thead
            className="w-[1270px] min-h-[62px] rounded-tl-[20px] rounded-tr-[20px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(138, 56, 245, 0.2) 0%, rgba(194, 44, 162, 0.12) 124.19%)",
            }}
          >
            <tr>
              <th
                className="w-[73px] h-[30px] px-6 py-4 border-r border-[#E0E0E0] 
             text-center font-poppins font-medium text-[20px] leading-[100%] 
             tracking-[0%] text-white"
              >
                Plan
              </th>

              <th
                className="w-[177px] h-[30px] px-6 py-4 border-r border-[#E0E0E0] 
             text-center font-poppins font-medium text-[20px] leading-[100%] 
             tracking-[0%] text-white"
              >
                API Keys Included
              </th>

              <th
                className="w-[159px] h-[30px] px-6 py-4 border-r border-[#E0E0E0] 
             text-center font-poppins font-medium text-[20px] leading-[100%] 
             tracking-[0%] text-white"
              >
                Monthly Credits
              </th>

              <th
                className="w-[351px] h-[30px] px-6 py-4 border-r border-[#E0E0E0] 
             text-center font-poppins font-medium text-[20px] leading-[100%] 
             tracking-[0%] text-white"
              >
                Usage Scenario
              </th>

            </tr>
          </thead>
        <tbody
  className="gradient-bg"
  style={{
    background: "#FFFFFF1F",
    border: "1px solid #000000",
  }}
>
              {plans.map((plan, idx) => (
              // <tr key={idx} className="border-t border-[#E0E0E0]">
             <tr
  key={idx}
  className="border-t"
  style={{ borderBottom: "1px solid #000000" }}
>
  <td className="px-6 py-4 text-[16px]">{plan.name}</td>
  <td className="px-6 py-4 text-[16px]">{plan.keys}</td>
  <td className="px-6 py-4 text-[16px] font-bold">{plan.credits}</td>
  <td className="px-6 py-4 text-[16px] font-bold">{plan.usage}</td>
</tr>
            ))}
          </tbody>
        </table>
      </div> 
    </div>
  );
};

export default AfterPlan;