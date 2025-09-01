import React, { useState } from "react";
import apiBackground from "../../assets/api/back.png";
import AfterKeys from "./AfterKeys";
import AfterApiIntegrate from "./AfterApiIntegrate";
import AfterPlan from "./AfterPlan";
import AfterApiAccess from "./AfterApiAccess";
import AfterHowItWorks from "./AfterHowItWorks";
import AfterCustomAPIPlan from "./AfterCustomApiPlan";
import AfterDraggable from "./AfterDraggable";
import sec14Img2 from "../../assets/home/sec14/Vector.png";
import sec14Img3 from "../../assets/home/sec14/m1.jpg";
import sec14Img4 from "../../assets/home/sec14/m2.jpg";
import sec14Img5 from "../../assets/home/sec14/m3.jpg";
import AfterApiFaq from "./AfterApiFaq";
import keyImage from "../../assets/api/key.png";
import { Link } from "react-router-dom";
import axios from "axios";
import BG1 from "../../assets/afterHome/APIAfterLogin.png";
import BG2 from "../../assets/afterHome/APIAfterLogin2.png";
import Group from "../../assets/afterHome/GroupApi.png";
import card from "../../assets/afterHome/ApiCard.png";
import Group2 from "../../assets/afterHome/Group2.png";
import ApiVector from "../../assets/afterHome/ApiVector.png";

export default function AfterHeroApi() {
  const faqs = [
    {
      question: "How do I get started with StacklyAI APIs?",
      answer:
        "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "What authentication method does StacklyAI use?",
      answer:
        "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Are there any rate limits on API requests?",
      answer:
        "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: " What image formats do StacklyAI APIs support?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "How to handle other image formats e.g. HEIC, HEIF etc?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "What is the expiration period for my credit pack?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
  ];
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    company_name: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId"); // FIXED: use the correct key
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      alert("Login required to submit the form.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/submit-api-access",
        {
          user_id: parseInt(userId),
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // add token if backend requires auth
          },
        }
      );

      alert(res.data.message);
      setFormData({
        full_name: "",
        email: "",
        contact_number: "",
        company_name: "",
        address: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed. Please try again.");
    }
  };
  return (
    <div>
      {/* section1 */}
 <div
  className="relative w-full h-[399px] flex flex-col items-center justify-center bg-white-to-cyan bg-cover bg-center -mt-[82px] pt-[82px] overflow-hidden"
  style={{ backgroundImage: `url(${BG1})` }}
>
 <div className="flex justify-center w-full">
 <div
  className="w-[1213.24px] h-[261.51px] flex items-center justify-between gap-[107px]  opacity-100"
  style={{ transform: "rotate(0deg)" }}
>
  {/* Left Text Div */}
<div className="w-[705px] h-[135px] opacity-100 flex items-center">
  <p className="lora-text font-normal text-[32px] leading-[140%] tracking-[0%] text-white">
    An <span className="font-semibold bg-gradient-to-b from-[#8A38F5] to-[#C22CA2] text-transparent bg-clip-text">API</span> key is your unique access code to authenticate and use 
    <span className="font-semibold"> StacklyAI’s </span> rendering engine 
    from your own app or system.
  </p>
</div>

  {/* Right Image Div */}
  <div className="flex items-center justify-center w-[350px] h-[200px]">
    <img
      src={Group}
      alt="API Illustration"
      className="w-full h-full object-contain"
    />
  </div>
</div>
</div>
</div>
      {/* section-2  */}

      {/* //<div className="relative w-full h-[848px] flex items-center justify-center bg-black"> */}
      <div
        className="relative w-full h-[384px] flex items-center justify-center bg-[#011213] bg-cover bg-center"
        style={{ backgroundImage: `url(${BG2})` }}
      >
        <div className="w-full flex justify-center">
          <div
            className="w-[1097px] h-[264px] opacity-100 flex gap-[168px] items-center"
            style={{ transform: "rotate(0deg)" }}
          >
            {/* Left Div */}
            <div
              className="w-[358px] h-[87px] opacity-100 flex flex-col justify-center items-start gap-2"
              style={{ transform: "rotate(0deg)" }}
            >
              {/* Top Text Div */}
              <div className="w-[358px] h-[33px] opacity-100">
                <p className="font-[Lora] font-medium text-[26px] leading-[100%] text-white">
                  Your Current <span className="text-[#8A38F5]">API</span> Access
                </p>
              </div>

              {/* Bottom Text Div */}
              <div className="w-[358px] h-[42px] opacity-100">
                <p className="font-[Poppins] font-normal text-[14px] leading-[100%] text-white">
                  Stay in control of your integration with clear access details and key usage limits.
                </p>
              </div>
            </div>

            {/* Right Div */}
            <div
              className="w-[571px] h-[264px] opacity-100 rounded-[20px] border border-solid border-white/50 bg-cover bg-center"
              style={{ backgroundImage: `url(${card})`, transform: "rotate(0deg)" }}
            >
              <div
                className="w-[292px] h-[66px] absolute top-[32.49px] left-[25.5px] opacity-100 flex items-center gap-[2px]"
                style={{ transform: "rotate(0deg)" }}
              >
                {/* profile user */}
                <div className="flex justify-end items-start">
                  <div
                    className="w-[40px] h-[40px] opacity-100 rounded-full flex items-center justify-center -mt-8"
                    style={{
                      transform: "rotate(0deg)",
                      background: "linear-gradient(90deg, #8A38F5 0%, #51218F 100%)"
                    }}
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2a5 5 0 100 10 5 5 0 000-10zm-7 18a7 7 0 0114 0H5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>


                {/* content div */}
                <div
                  className="w-[244px] h-[66px] opacity-100 flex flex-col justify-center rounded-[12px] px-3 gap-[12px]"
                  style={{ transform: "rotate(0deg)" }}
                >
                  {/* Top text */}
                  <div className="w-[244px] h-[30px]">
                    <p className="font-[Lora] font-medium text-[28px] leading-[100%] text-white">
                      Premium
                    </p>
                  </div>

                  {/* Bottom text */}
                  <div className="w-[244px] h-[24px] flex items-center">
                    <p className="font-[Poppins] text-[16px] font-normal leading-[100%] text-white">
                      Total assigned keys:{" "}
                      <span className="font-medium text-[#8A38F5]">6</span> keys
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="w-[130px] h-[135px] absolute top-[98px] left-[413px] opacity-100 flex flex-col items-center gap-[16px]"
                style={{ transform: "rotate(0deg)" }}
              >
                {/* content 1 */}
                <div className="w-[130px] h-[62px] flex flex-col gap-[6px] opacity-100">

                  {/* Top text */}
                  <p
                    className="w-[130px] h-[20px] text-right text-white font-[Lora] font-normal text-[16px] leading-[100%]"
                  >
                    API Keys Left
                  </p>

                  {/* Bottom text */}
                  <p
                    className="w-[130px] h-[36px] text-right font-[Poppins] font-normal text-[12px] leading-[100%] text-[#6D6D6D]"
                  >
                    Stay updated on your remaining balance.
                  </p>
                </div>

                {/* content 2 */}
                <div className="w-[78px] h-[57px] flex flex-col items-center justify-center gap-[4px] opacity-100">
                  {/* Top text */}
                  <p
                    className="w-[78px] h-[29px] text-center font-poppins font-semibold text-[24px] leading-[100%]"
                    style={{
                      background:
                        "linear-gradient(108.35deg, #8A38F5 35.6%, rgba(255, 255, 255, 0.8) 51.59%, #8A38F5 67.58%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      boxShadow: "0px 0px 2px 0px #FFFFFF1F",
                    }}
                  >
                    14
                  </p>

                  {/* Bottom text */}
                  <p className="w-[78px] h-[24px] text-center font-poppins font-normal text-[16px] leading-[100%] text-white">
                    FOURTEEN
                  </p>
                </div>
              </div>
              <div className="absolute bottom-3 left-14">
                <img
                  src={Group2}
                  alt="Group2"
                  className="w-[150px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3  */}

      {/* <AfterKeys /> */}

      {/* section 4  */}

      {/* <AfterApiIntegrate /> */}

      {/* section-5  */}

      <AfterPlan />

      {/* section-6  */}

      {/* <AfterApiAccess /> */}

      {/* section-7  */}

      {/* <AfterHowItWorks /> */}

      {/* section-8  */}

      {/* <AfterCustomAPIPlan /> */}

      {/* section-9  */}

    
        <div className="relative bg-black overflow-hidden w-full flex justify-center items-center py-28 px-4 min-h-screen mt-[-70px]">
      {" "}
      {/* Added mt-0 and mb-16 */}
      {/* Ellipse background image */}
     
      {/* Form section */}
      <div className="relative z-10 w-[668px] flex flex-col items-center gap-[28px] text-white">
    <div
  className="w-[443px] h-[100px] opacity-100 flex flex-col items-center gap-[12px] mb-8"
  style={{ transform: "rotate(0deg)" }}
>
  <h2 className="w-f[443px] text-[36px] font-lancelot font-normal text-center whitespace-nowrap">
    <span className="text-white">Ready to </span>
    <span className="text-[#8A38F5]">Create Something Great?</span>
  </h2>

  <p className="w-[403px] text-white text-center font-poppins text-[16px] font-normal">
    We offer flexible API plans tailored to your needs. Let’s build the right setup—just for you.
  </p>
</div>

        <form className="w-full flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">
                Full name*
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
            <div className="flex-1">
             <label className="block text-sm mb-1 text-white">Email ID*</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              
              <label className="block text-sm mb-1 text-white">Company Name*</label>
              <input
                type="text"
                placeholder="Paul"
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
            
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 99999 99999"
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
          </div>

      <div className="mt-4">
  <label className="block text-sm mb-1 text-white">Address</label>
  <textarea
    placeholder="eg: St. thomas lane.."
    className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none resize-none overflow-hidden"
    style={{
      borderRadius: "12px",
      border: "1px solid rgba(255, 255, 255, 0.40)",
      background: "rgba(255, 255, 255, 0.12)",
      height: "48px", // fixed height
    }}
  />
</div>



          <div>
            <label className="block text-sm mb-1 text-white">Message</label>
            <textarea
              rows="4"
              placeholder="Type something..."
              className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.40)",
                background: "rgba(255, 255, 255, 0.12)",
              }}
            />
          </div>

         
<button
  type="submit"
  className="w-full mt-2 py-2 rounded-full text-white font-semibold flex items-center justify-center gap-2"
  style={{
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "30px",
    background: "rgba(138, 56, 245, 0.2)",
  }}
>
  <span>Let’s Connect</span>
  <div className="w-[24px] h-[24px]">
    <img src={ApiVector} alt="icon" className="w-full h-full object-contain" />
  </div>
</button>
        </form>

        <p className="text-white text-center text-base font-normal mt-6">
          *Questions, comments, or suggestions? Simply fill in the form and
          we'll be in touch shortly.
        </p>
      </div>

</div>
      {/* {section-10} */}
      {/* <section className="w-full py-16 px-4 flex flex-col justify-center items-center mt-20">
        <h2 className="text-[48px] md:text-5xl font-semibold text-center text-gray-800 leading-[140%]">
          Discover Our{" "}
          <span className="text-[#007B82]">Advanced AI Interior Tools</span> and
          Redesign
        </h2>
        <h2 className="text-[48px] md:text-5xl font-semibold text-center text-[black] mt-3">
          Your Space Instantly
        </h2>
      </section> */}

      {/* <div className="relative w-full h-[709px] flex items-center justify-center bg-[white]">
        //Background API Image 
        <img
          src={apiBackground}
          alt="API Background"
          className="absolute w-[1150.91px] h-[848px] p-[34px] opacity-60"
        />

        //Text Content 
        <div className="relative z-10 w-[1172px] h-[242px] flex flex-col items-center justify-center text-black text-center -mt-40">
          <h2 className="w-[816px] h-[64px] font-semibold text-[48px] leading-[64px]">
            Ready to{" "}
            <span className="text-[#00B0BA]">Create Something Great?</span>
          </h2>
          <p className="w-[1280px] h-[199px] font-[400] text-[28px] leading-[36px] mt-4">
            We offer flexible API plans tailored to your needs.
            <br />
            Let’s build the right setup—just for you.
          </p>
          <Link to="#">
            {" "}
            <button className="w-[800px] h-[70px] mt-[80] rounded-[6px] border border-transparent bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-white font-semibold text-[18px] leading-[100%] ">
              Let’s Connect!
            </button>
          </Link>
        </div>
      </div> */}

      {/* section-11  */}

      {/* <AfterDraggable /> */}

      {/* section-12  */}

      {/* <section
         className="relative w-full  absolute-0  bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('./src/assets/home/sec14/bg1.jpg')" }}
       >
         <div className="py-20 px-6 bg-[#00000096]">
           <div className="flex flex-col items-center text-center text-white">
             <h2 className="text-[48px] md:text-5xl leading-[140%] text-center font-bold mb-4">
               <span className="text-6xl font-bold">“</span> Meet Our Members{" "}
               <span className="text-6xl font-bold">”</span>
             </h2>
             <p className="max-w-[630px] min-h-[78px] text-[28px] leading-[140%] text-center md:text-xl text-gray-300 mb-8">
               You're in good company with{" "}
               <span className="text-cyan-400  font-semibold">Stackly AI</span>,
               trusted by people in all 195 countries.
             </p> */}
      {/* Center logo */}
      {/* <div className="mb-16">
               <div className="bg-[#FFFFFF1F] rounded-full p-8 shadow-lg">
                 <img src={sec14Img2} alt="Center Icon" className="w-12 h-12" />
               </div>
             </div> */}

      {/* Member Cards */}
      {/* <div className="w-[100vw] flex justify-center item-center flex-wrap gap-10"> */}
      {/* Card 1 */}
      {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
                 <div className="min-w-[413px] h-full flex justify-around items-center">
                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1 ">
                     <h3 className="text-black text-[22px] font-medium leading-[140%] ">Guru Ragav Auditor</h3>
                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Auditor</p>
                   </div>
                   <img
                     src={sec14Img3}
                     alt="Member 1"
                     className="w-20 h-20 rounded-full object-cover"
                   />
                 </div>
                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
                   “I use Stackly AI to help my clients visualize how their
                   backyard could look like if they hire me for the job. It works
                   flawlessly!”
                 </p>
               </div> */}

      {/* Card 2 */}
      {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
                 <div className="min-w-[413px] h-full flex justify-around items-center">
                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
                     <h3 className="text-black text-[22px] font-medium leading-[140%]">Cristian Rama</h3>
                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Architect</p>
                   </div>
                   <img
                     src={sec14Img4}
                     alt="Member 2"
                     className="w-20 h-20 rounded-full object-cover"
                   />
                 </div>
                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
                   “I needed to replace my living room furniture so I generated a
                   few design ideas with Stackly AI. Awesome technology!”
                 </p>
               </div> */}

      {/* Card 3 */}
      {/* <div className="max-w-[413px] min-h-[288px] bg-white rounded-[12px] p-10 flex flex-col items-center">
                 <div className="min-w-[413px] h-full flex justify-around items-center">
                   <div className="max-w-[206px] min-h-[64px] flex flex-col items-start gap-1">
                     <h3 className="text-black text-[22px] font-medium leading-[140%]">Ram Krishnan</h3>
                     <p className="text-[#b0b0b0] font-[400] text-[18px] leading-[140%]">Architect</p>
                   </div>
                   <img
                     src={sec14Img5}
                     alt="Member 3"
                     className="w-20 h-20 rounded-full object-cover"
                   />
                 </div>
                 <p className="text-[#2A2A2A] font-[400] text-[18px] leading-[140%] mt-10">
                   “I run a real estate agency and my clients send me pictures
                   with their empty properties. I use Stackly AI to furnish them
                   automatically!”
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section> */}

      {/* section-14  */}

      {/* <AfterApiFaq faqs={faqs} /> */}
    </div>
  );
}