import React from 'react'
import Tick from "../../assets/pricing-pg/tick.png";
import Tick1 from "../../assets/pricing-pg/tick1.png";
import Logo from "../../assets/pricing-pg/flogo.png";
import Success from "../../assets/pricing-pg/success.png";
import Paper from "../../assets/pricing-pg/paper.png";
import { Link } from "react-router-dom";

export default function AfterPayment() {
  return (
    <div>
      <br />

      <div
        className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover
      "
        style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
      >
        <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
          <div className="w-full min-h-[50px] flex justify-start"></div>

          <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">
            <div className="w-full min-h-[76px] flex justify-center items-center">
              <div className="w-[822px] h-[76px] flex justify-start items-center">
                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick} alt="tick" className="w-[40px] h-[40px] " />
                  <div className="font-semibold text-[16px] leading-[56%] text-[#007B82]">
                    Billing Info
                  </div>
                </div>

                <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick} alt="tick" className="w-[40px] h-[40px] " />
                  <div className=" w-[156px] ml-[30px] font-semibold text-[16px] leading-[200%] text-[#007B82]">
                    Payment Method
                  </div>
                </div>

                <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick} alt="tick" className="w-[40px] h-[40px] " />
                  <div className="font-semibold text-[16px] leading-[56%] text-[#007B82]">
                    Success
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[100%] min-h-[500px] flex flex-col justify-center items-center gap-[30px]">
             
              <img src={Logo} alt="Stackly-logo" />
              <div className="w-[610px] h-[31px] font-[400] text-[20px] leading-[156%] text-[#2A2A2A]">
                “Thank you for subscribing to StacklyAI. Your plan is now
                active.”
              </div>
              <img src={Success} alt="logo-success" />
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import Tick from "../../assets/pricing-pg/tick.png";
// import Tick1 from "../../assets/pricing-pg/tick1.png";
// import Logo from "../../assets/pricing-pg/flogo.png";
// import Success from "../../assets/pricing-pg/success.png";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AfterPayment() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [status, setStatus] = useState("");

//   const sessionId = new URLSearchParams(location.search).get("session_id"); // ✅ Move this out

//   useEffect(() => {
//   const queryParams = new URLSearchParams(location.search);
//   const sessionId = queryParams.get("session_id");
//   let isMounted = true; // Track if component is mounted

//   if (sessionId && loading) { // Only proceed if loading is true
//     // Step 1: Verify payment
//     axios
//       .get(`http://localhost:8000/pricing/verify-payment/?session_id=${sessionId}`)
//       .then((res) => {
//         if (!isMounted) return;
        
//         if (res.data.success) {
//           setStatus("Payment verified. Updating subscription...");
//           // Step 2: Update subscription
//           return axios.post(
//             "http://localhost:8000/pricing/update-subscription/",
//             null,
//             { params: { session_id: sessionId } }
//           );
//         } else {
//           setStatus("Payment not completed yet.");
//           throw new Error("Payment not completed.");
//         }
//       })
//       .then((res) => {
//         if (!isMounted) return;
//         setStatus("Subscription updated successfully!");
//       })
//       .catch((err) => {
//         if (!isMounted) return;
//         console.error(err);
//         setStatus("Something went wrong during processing.");
//       })
//       .finally(() => {
//         if (isMounted) setLoading(false);
//       });
//   } else {
//     setStatus("No session ID found in URL.");
//     setLoading(false);
//   }

//   return () => {
//     isMounted = false; // Cleanup function
//   };
// }, [location]);

//   return (
//     <div>
//       <br />
//       <div
//         className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover"
//         style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
//       >
//         <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
//           <div className="w-[1160px] h-[636px] flex flex-col justify-center items-center gap-[16px]">
//             <img src={Logo} alt="Stackly-logo" />
//             <div className="w-[610px] h-[31px] font-[400] text-[20px] leading-[156%] text-[#2A2A2A] text-center">
//               Thank you for subscribing to StacklyAI. Your plan is now active.
//             </div>
//             <img src={Success} alt="logo-success" />
//             <div className="text-[#007B82] text-[16px] font-semibold">
//               {loading ? "Processing your payment..." : status}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
