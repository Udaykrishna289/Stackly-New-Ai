import HowImage from "../../assets/api/how.png";

const HowItWorks = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="flex flex-col md:flex-row items-start gap-6 max-w-5xl mx-auto">
        <img src={HowImage} alt="How It Works" className="w-[413px]" />
        <p className="text-[#2A2A2A] leading-[28px] text-[18px] font-medium max-w-xl mt-[150px] gap-5">
          Bring AI-powered design into your app with just a few lines of code. The StacklyAI API makes it easy to process user-submitted images, apply custom styles, and deliver stunning visual results—all in real time.
        </p>
      </div>

      <div className="w-full h-auto flex p-[20px] justify-center items-center">

        <div className="w-[330px] h-[400px] flex flex-col  justify-center items-center">
           <div className=" w-[130px] h-[133px] rounded-[140px] border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center">1</div>
           <div  className="w-[305px] h-[184px] rounded-[30px] px-[20px] py-[60px] bg-gradient-to-r from-[#00B0BA] to-[#007B82] gap-[10px] shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex flex-col justify-center items-center">
               <div className="text-center text-[19px] leading-[32px] font-medium text-[#2A2A2A]">Connect your API key to your backend or platform</div>
           </div>
        </div>

          
        <div className="w-[330px] h-[400px] flex flex-col  justify-center items-center">
           <div className="mt-[20px w-[130px] h-[133px] rounded-[140px] border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center">2</div>
           <div  className="w-[305px] h-[184px] rounded-[30px] px-[20px] py-[60px] bg-gradient-to-r from-[#00B0BA] to-[#007B82] gap-[10px] shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex flex-col justify-center items-center">
               <div className="text-center text-[19px] leading-[32px] font-medium text-[#2A2A2A]">Send a user-uploaded image with a chosen style prompt</div>
           </div>
        </div>

          
        <div className="w-[330px] h-[400px] flex flex-col  justify-center items-center">
           <div className="w-[130px] h-[133px] rounded-[140px] border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center">3</div>
           <div  className="w-[305px] h-[184px] rounded-[30px] px-[20px] py-[60px] bg-gradient-to-r from-[#00B0BA] to-[#007B82] gap-[10px] shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex flex-col justify-center items-center">
               <div className="text-center text-[19px] leading-[32px] font-medium text-[#2A2A2A]">Receive high-quality, styled images in seconds</div>
           </div>
        </div>

          
        <div className="w-[330px] h-[400px] flex flex-col  justify-center items-center">
           <div className="w-[130px] h-[133px] rounded-[140px] border-dashed border-[2px] border-[#007B82] flex justify-center items-center text-[60px] font-bold leading-[100%] text-center">4</div>
           <div  className="w-[305px] h-[184px] rounded-[30px] px-[20px] py-[60px] bg-gradient-to-r from-[#00B0BA] to-[#007B82] gap-[10px] shadow-[0_6.54px_12.2px_0] shadow-[#ABB2BB40] flex flex-col justify-center items-center">
               <div className="text-center text-[19px] leading-[32px] font-medium text-[#2A2A2A]">Display or store them seamlessly within your app</div>
           </div>
        </div>

          


      </div>
      
    </div>
  );
};

export default HowItWorks;
