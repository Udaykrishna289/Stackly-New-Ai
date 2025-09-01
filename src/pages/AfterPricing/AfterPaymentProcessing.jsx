// import React, { useEffect, useState } from 'react';
// import Tick from "../../assets/pricing-pg/tick.png";
// import Tick1 from "../../assets/pricing-pg/tick1.png";
// import Logo from "../../assets/pricing-pg/flogo.png";
// import Success from "../../assets/pricing-pg/success.png";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AfterPaymentProcessing() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [status, setStatus] = useState("");

//   const sessionId = new URLSearchParams(location.search).get("session_id");

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const sessionId = queryParams.get("session_id");
//     let isMounted = true;

//     if (sessionId && loading) {
//       axios
//         .get(`http://localhost:8000/pricing/verify-payment/?session_id=${sessionId}`)
//         .then((res) => {
//           if (!isMounted) return;

//           if (res.data.success) {
//             setStatus("Payment verified. Updating subscription...");
//             return axios.post(
//               "http://localhost:8000/pricing/update-subscription/",
//               null,
//               { params: { session_id: sessionId } }
//             );
//           } else {
//             setStatus("Payment not completed yet.");
//             throw new Error("Payment not completed.");
//           }
//         })
//         .then((res) => {
//           if (!isMounted) return;
//           setStatus("Subscription updated successfully!");
//         })
//         .catch((err) => {
//           if (!isMounted) return;
//           console.error(err);
//           setStatus("Something went wrong during processing.");
//         })
//         .finally(() => {
//           if (isMounted) {
//             setLoading(false);
//             // Moved navigate after setLoading
//             setTimeout(() => navigate("/AfterPayment"), 500); // Small delay to ensure UI updates
//           }
//         });
//     } else {
//       setStatus("No session ID found in URL.");
//       setLoading(false);
//       setTimeout(() => navigate("/AfterPayment"), 500);
//     }

//     return () => {
//       isMounted = false;
//     };
//   }, [location, navigate]); // Added navigate to dependencies

//   return (
//     <div>
//       <br />

//       <div
//         className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover"
//         style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
//       >
//         <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
//           <div className="w-full min-h-[50px] flex justify-start"></div>

//           <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">
//             <div className="w-full min-h-[76px] flex justify-center items-center">
//               <div className="w-[822px] h-[76px] flex justify-start items-center">
//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className="font-semibold text-[16px] leading-[56%] text-[#007B82]">
//                     Billing Info
//                   </div>
//                 </div>

//                 <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className=" w-[156px] ml-[30px] font-semibold text-[16px] leading-[200%] text-[#B0B0B0]">
//                     Payment Method
//                   </div>
//                 </div>

//                 <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233] "></div>

//                 <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
//                   <img src={Tick1} alt="tick" className="w-[40px] h-[40px] " />
//                   <div className="font-semibold text-[16px] leading-[56%] text-[#B0B0B0]">
//                     Success
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-[100%] min-h-[500px] flex flex-col justify-center items-center gap-[30px]">
//               <img src={Logo} alt="Stackly-logo" />
//               <div className="w-[610px] h-[31px] font-[400] text-center text-[20px] leading-[156%] text-[#2A2A2A]">
//                 "Your transaction is being processed. Please wait."
//               </div>

//               {/* Loading Circle */}
//               {loading && (
//                 <div 
//                   className="w-[93px] h-[93px] rounded-full border-4 border-transparent animate-spin"
//                   style={{
//                     background: 
//                       'linear-gradient(0deg, #007B82, #007B82), linear-gradient(270deg, #00B0BA 0%, rgba(0, 0, 0, 0.3) 52.88%, #007B82 100%)',
//                     backgroundOrigin: 'border-box',
//                     backgroundClip: 'content-box, border-box',
//                     borderImageSlice: 1
//                   }}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import Tick from "../../assets/pricing-pg/tick.png";
import Tick1 from "../../assets/pricing-pg/tick1.png";
import Logo from "../../assets/pricing-pg/flogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AfterPaymentProcessing() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [hasSessionId, setHasSessionId] = useState(false);

  const sessionId = new URLSearchParams(location.search).get("session_id");

  useEffect(() => {
    let isMounted = true;

    if (sessionId) {
      setHasSessionId(true);
      axios
        .get(`http://localhost:8000/pricing/verify-payment/?session_id=${sessionId}`)
        .then((res) => {
          if (!isMounted) return;
          if (res.data.success) {
            setStatus("Payment verified. Updating subscription...");
            return axios.post(
              "http://localhost:8000/pricing/update-subscription/",
              null,
              { params: { session_id: sessionId } }
            );
          } else {
            setStatus("Payment not completed yet.");
            throw new Error("Payment not completed.");
          }
        })
        .then(() => {
          if (!isMounted) return;
          setStatus("Subscription updated successfully!");
          setTimeout(() => navigate("/AfterPayment"), 2000);
        })
        .catch((err) => {
          if (!isMounted) return;
          console.error(err);
          setStatus("Payment processing failed: " + err.message);
        })
        .finally(() => {
          if (isMounted) setLoading(false);
        });
    } else {
      setStatus("Waiting for payment confirmation...");
      setHasSessionId(false);
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [sessionId, navigate]);

  return (
    <div>
      <br />
      <div
        className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/PricingPg/billing.jpg")' }}
      >
        <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
          <div className="w-full min-h-[50px] flex justify-start"></div>

          <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">
            <div className="w-full min-h-[76px] flex justify-center items-center">
              <div className="w-[822px] h-[76px] flex justify-start items-center">
                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick} alt="tick" className="w-[40px] h-[40px]" />
                  <div className="font-semibold text-[16px] text-[#007B82]">
                    Billing Info
                  </div>
                </div>

                <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233]"></div>

                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick} alt="tick" className="w-[40px] h-[40px]" />
                  <div className="ml-[30px] font-semibold text-[16px] text-[#007B82]">
                    Payment Method
                  </div>
                </div>

                <div className="w-[226px] h-[4px] rounded-[5px] bg-[#007B8233]"></div>

                <div className="w-[94px] h-[76px] flex flex-col justify-center items-center px-[7px] gap-[9px]">
                  <img src={Tick1} alt="tick" className="w-[40px] h-[40px]" />
                  <div className="font-semibold text-[16px] text-[#B0B0B0]">
                    Success
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full min-h-[500px] flex flex-col justify-center items-center gap-[30px]">
              <img src={Logo} alt="Stackly-logo" />
              <div className="w-[610px] text-center text-[20px] text-[#2A2A2A]">
                {loading ? "Your transaction is being processed. Please wait." : status}
              </div>

              {loading && (
                <div className="relative">
                  <div
                    className="animate-spin rounded-full"
                    style={{
                      width: '93px',
                      height: '93px',
                      border: '8px solid transparent',
                      borderTop: '8px solid #007B82',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                    }}
                  />
                  <div
                    style={{
                      width: '93px',
                      height: '93px',
                      borderRadius: '50%',
                      background: 'linear-gradient(270deg, #00B0BA 0%, rgba(0, 0, 0, 0.3) 52.88%, #007B82 100%)',
                      opacity: 0.2,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}