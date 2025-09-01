// import React from 'react'
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import { Link } from 'react-router-dom'

// export default function Otp() {
//   return (
//     <div>
//       <section
//         className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover
//                "
//         style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
//       >
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
//           <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
//             <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
//               <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
//                 Enter OTP
//               </div>
//               <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] ">
//                 We’ve sent a 6-digit OTP to your email. Please enter it below to
//                 continue.
//               </div>
//             </div>

//             <div className="w-[461px] min-h-[260px] flex flex-col gap-[40px]">
//               <div className="w-[461px] min-h-[200px] flex flex-col gap-[40px]">
//                 <div className="w-[461px] min-h-[50px] flex justify-between">
//                   <div className="w-[461px] min-h-[50px] flex justify-between">
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                     <div className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82]"></div>
//                   </div>
//                 </div>

//                 <Link to="/ResetPassword">
//                   {" "}
//                   <div className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-[white] font-bold text-[16px] leading-[35px] text-center cursor-pointer">
//                     Verify OTP
//                   </div>
//                 </Link>

//                 <div className="w-[461px] min-h-[24px] font-[400] text-[13px] leading-[24px] text-center text-white">
//                   Didn’t receive the code?
//                   <span className="text-[#007B82]"> Resend in 00:45</span>
//                 </div>

//                 <div className="w-[461px] text-center flex justify-center">
//                   <Link
//                     to=""
//                     className="w-[122px] h-[20px] flex justify-center items-center gap-[4px]"
//                   >
//                     {" "}
//                     <img src={Arrow} alt="" />
//                     <div className="font-semibold text-[15px] leading-[100%] text-[#009A98] ">
//                       <Link to="/Sign-in">Back to Login</Link>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// import React from 'react'
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import { Link } from 'react-router-dom'

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import axios from 'axios';

// export default function Otp() {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(45);
//   const [error, setError] = useState('');
//   const [isResending, setIsResending] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get email from location state or localStorage
//   const email = location.state?.email || localStorage.getItem('resetEmail');
//   const mode = location.state?.mode || "forgot-password"; // default to forgot

//   // Timer countdown
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prev => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleVerify = async () => {
//     const enteredOtp = otp.join('');

//     if (enteredOtp.length !== 6) {
//       setError('Please enter a 6-digit OTP');
//       return;
//     }

//     try {
//       const response = await axios.post(
//         'http://localhost:8000/forget-password/verify-otp',
//         {
//           otp: enteredOtp,
//           email: email
//         }
//       );
//       navigate('/ResetPassword', { state: { email } });
//     } catch (err) {
//       setError(err.response?.data?.detail || 'Invalid OTP');
//     }
//   };

//   const handleResendOTP = async () => {
//     if (timer > 0 || !email) return;

//     setIsResending(true);
//     setError('');

//     try {
//       const response = await axios.post(
//         'http://localhost:8000/forget-password/resend-otp',
//         { email },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       setTimer(45);
//       setOtp(['', '', '', '', '', '']);
//       alert('New OTP has been sent to your email');
//     } catch (err) {
//       const errorMsg = err.response?.data?.detail || 'Failed to resend OTP';
//       setError(errorMsg);

//       // If rate limited, set timer to remaining time
//       if (err.response?.status === 429) {
//         setTimer(60); // Reset to 1 minute
//       }
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return (
//     <div>
//       <section
//         className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
//         style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
//       >
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm">
//           <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]">
//             <div className="w-[100%] min-h-[86px] flex flex-col justify-center items-center gap-[12px]">
//               <div className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]">
//                 Enter OTP
//               </div>
//               <div className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]">
//                 We've sent a 6-digit OTP to {email}. Please enter it below to continue.
//               </div>
//             </div>

//             <div className="w-[461px] min-h-[260px] flex flex-col gap-[40px]">
//               <div className="w-[461px] min-h-[200px] flex flex-col gap-[40px]">
//                 <div className="w-[461px] min-h-[50px] flex justify-between">
//                   {otp.map((digit, index) => (
//                     <input
//                       key={index}
//                       id={`otp-${index}`}
//                       type="text"
//                       maxLength="1"
//                       value={digit}
//                       onChange={(e) => handleChange(index, e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === 'Backspace' && !digit && index > 0) {
//                           document.getElementById(`otp-${index - 1}`).focus();
//                         }
//                       }}
//                       className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82] text-white text-center bg-transparent focus:outline-none"
//                     />
//                   ))}
//                 </div>

//                 {error && (
//                   <div className="text-red-500 text-center text-sm">
//                     {error}
//                   </div>
//                 )}

//                 <div
//                   onClick={handleVerify}
//                   className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer hover:opacity-90"
//                 >
//                   Verify OTP
//                 </div>

//                 <div className="w-[461px] min-h-[24px] font-[400] text-[13px] leading-[24px] text-center text-white">
//                   Didn't receive the code?
//                   <span
//                     className={`${timer > 0 ? 'text-gray-400' : 'text-[#007B82] cursor-pointer hover:underline'}`}
//                     onClick={handleResendOTP}
//                   >
//                     {isResending ? ' Resending...' :
//                      timer > 0 ? ` Resend in 00:${timer.toString().padStart(2, '0')}` :
//                      ' Resend OTP'}
//                   </span>
//                 </div>

//                 <div className="w-[461px] text-center flex justify-center">
//                   <Link
//                     to="/Sign-in"
//                     className="w-[122px] h-[20px] flex justify-center items-center gap-[4px] hover:opacity-80"
//                   >
//                     <img src={Arrow} alt="Back arrow" />
//                     <span className="font-semibold text-[15px] leading-[100%] text-[#009A98]">
//                       Back to Login
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import axios from 'axios';
// import logoImg from "/src/assets/Logo.png";

// export default function Otp() {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(45);
//   const [error, setError] = useState('');
//   const [isResending, setIsResending] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get email from location state or localStorage
//   const email = location.state?.email || localStorage.getItem('resetEmail');
//   const mode = location.state?.mode || "forgot-password"; // default to forgot

//   // Timer countdown
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prev => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleVerify = async () => {
//     const enteredOtp = otp.join('');

//     if (enteredOtp.length !== 6) {
//       setError('Please enter a 6-digit OTP');
//       return;
//     }

//     try {
//       const response = await axios.post(
//         'http://localhost:8000/forget-password/verify-otp',
//         {
//           otp: enteredOtp,
//           email: email
//         }
//       );
//       navigate('/ResetPassword', { state: { email } });
//     } catch (err) {
//       setError(err.response?.data?.detail || 'Invalid OTP');
//     }
//   };

//   const handleResendOTP = async () => {
//     if (timer > 0 || !email) return;

//     setIsResending(true);
//     setError('');

//     try {
//       const response = await axios.post(
//         'http://localhost:8000/forget-password/resend-otp',
//         { email },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       setTimer(45);
//       setOtp(['', '', '', '', '', '']);
//       alert('New OTP has been sent to your email');
//     } catch (err) {
//       const errorMsg = err.response?.data?.detail || 'Failed to resend OTP';
//       setError(errorMsg);

//       // If rate limited, set timer to remaining time
//       if (err.response?.status === 429) {
//         setTimer(60); // Reset to 1 minute
//       }
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return (
//     <div>
//       <section
//         className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
//         style={{
//           backgroundImage: 'url("/ForgetPg/fgPg.png")',
//           height: '100dvh' // Uses dynamic viewport height for mobile
//         }}
//       >

//         <div style={{
//           position: 'absolute',
//           top: '35px',
//           left: '24px',
//           backgroundColor: 'white',
//           padding: '2px',
//           borderRadius: '3px',
//           display: window.innerWidth < 441 ? 'block' : 'none'
//         }}>
//           <img
//             src={logoImg}
//             alt="logo"
//             style={{
//               width: '100px',
//               height: '30px',
//               display: 'block' // Add this to ensure img renders
//             }}
//           />
//         </div>
//         <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm
//             max-[440px]:flex-col max-[440px]:w-full max-[440px]:max-w-[400px]
//             max-[440px]:min-h-[506px] max-[440px]:rounded-[10px]
//             max-[440px]:border-[1px] max-[440px]:border-solid max-[440px]:border-white
//             max-[440px]:pt-[28px] max-[440px]:pr-[32px] max-[440px]:pb-[28px] max-[440px]:pl-[32px]
//             max-[440px]:gap-[40px]">
//           <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]
//             max-[440px]:flex-col max-[440px]:w-full max-[440px]:max-w-[336px]
//             max-[440px]:min-h-[382px] max-[440px]:gap-[40px]">
//             <div
//               className="w-full min-h-[86px] flex flex-col justify-center items-center gap-[12px]
//   max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[86px] max-[440px]:gap-[12px]"
//             >

//               <div
//                 className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]
//   max-[440px]:w-[127px] max-[440px]:h-[26px] max-[440px]:text-[26px] max-[440px]:leading-[26px] max-[440px]:font-[600] max-[440px]:text-center"
//                 style={{ fontFamily: 'Inter' }}
//               >
//                 Enter OTP
//               </div>

//               <div
//                 className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]
//   max-[440px]:w-[336px] max-[440px]:h-[48px] max-[440px]:text-[14px] max-[440px]:leading-[24px] max-[440px]:font-[400] max-[440px]:text-center"
//                 style={{ fontFamily: 'Inter' }}
//               >
//                 We've sent a 6-digit OTP to {email}. Please enter it below to continue.
//               </div>

//             </div>

//             <div
//               className="w-[461px] min-h-[260px] flex flex-col gap-[40px]
//   max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[256px] max-[440px]:gap-[40px]"
//             >

//               <div
//                 className="w-[461px] min-h-[200px] flex flex-col gap-[40px]
//   max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[256px] max-[440px]:gap-[40px]"
//               >

//                 <div
//                   className="w-[461px] min-h-[50px] flex justify-between
//   max-[440px]:flex-row max-[440px]:w-[336px] max-[440px]:h-[50px] max-[440px]:justify-between"
//                 >

//                   {otp.map((digit, index) => (
//                     <input
//                       key={index}
//                       id={`otp-${index}`}
//                       type="text"
//                       maxLength="1"
//                       value={digit}
//                       onChange={(e) => handleChange(index, e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === 'Backspace' && !digit && index > 0) {
//                           document.getElementById(`otp-${index - 1}`).focus();
//                         }
//                       }}
//                       className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82] text-white text-center bg-transparent focus:outline-none"
//                     />
//                   ))}
//                 </div>

//                 {error && (
//                   <div className="text-red-500 text-center text-sm">
//                     {error}
//                   </div>
//                 )}

//                 <div
//                   onClick={handleVerify}
//                   className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82]
//   flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer hover:opacity-90
//   max-[440px]:w-[336px] max-[440px]:h-[42px] max-[440px]:rounded-[8px]"
//                 >
//                   Verify OTP
//                 </div>

//                 <div
//                   className="w-[461px] min-h-[24px] font-[400] text-[13px] leading-[24px] text-center text-white
//   max-[440px]:w-[336px] max-[440px]:h-[24px] max-[440px]:text-[13px] max-[440px]:leading-[24px] max-[440px]:font-[400] max-[440px]:text-center"
//                   style={{ fontFamily: 'Inter' }}
//                 >
//                   Didn't receive the code?
//                   <span
//                     className={`${timer > 0 ? 'text-gray-400' : 'text-[#007B82] cursor-pointer hover:underline'}`}
//                     onClick={handleResendOTP}
//                   >
//                     {isResending ? ' Resending...' :
//                       timer > 0 ? ` Resend in 00:${timer.toString().padStart(2, '0')}` :
//                         ' Resend OTP'}
//                   </span>
//                 </div>

//                 <div
//                   className="w-[461px] text-center flex justify-center mx-auto
//   max-[440px]:flex-row max-[440px]:w-[192px] max-[440px]:h-[20px] max-[440px]:gap-[4px]"
//                 >

//                   <Link
//                     to="/Sign-in"
//                     className="w-full max-[440px]:w-[192px] h-[20px] flex justify-center items-center gap-[4px] hover:opacity-80"
//                   >
//                     <img src={Arrow} alt="Back arrow" />
//                     <span
//                       className="font-semibold text-[15px] leading-[100%] text-[#009A98] text-center
//         max-[440px]:font-[600] max-[440px]:text-[14px] max-[440px]:leading-[100%] max-[440px]:w-[168px] max-[440px]:h-[17px]"
//                       style={{ fontFamily: 'Inter' }}
//                     >
//                       Back to forget Password
//                     </span>
//                   </Link>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import close from '../../assets/forgetPg/close.png'
// import Arrow from '../../assets/forgetPg/arrow.png'
// import axios from 'axios';
// import logoImg from "/src/assets/Logo.png";

// export default function Otp() {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(45);
//   const [error, setError] = useState('');
//   const [isResending, setIsResending] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get email from location state or localStorage
//   const email = location.state?.email || localStorage.getItem('resetEmail');
//   const mode = location.state?.mode || "forgot-password"; // default to forgot

//   // Timer countdown
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prev => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleVerify = async () => {
//     const enteredOtp = otp.join('');

//     if (enteredOtp.length !== 6) {
//       setError('Please enter a 6-digit OTP');
//       return;
//     }

//     try {
//       const response = await axios.post(
//         'http://localhost:8000/forget-password/verify-otp',
//         {
//           otp: enteredOtp,
//           email: email
//         }
//       );
//       navigate('/ResetPassword', { state: { email } });
//     } catch (err) {
//       setError(err.response?.data?.detail || 'Invalid OTP');
//     }
//   };

//   const handleResendOTP = async () => {
//     if (timer > 0 || !email) return;

//     setIsResending(true);
//     setError('');

//     try {
//       const response = await axios.post(
//         'http://localhost:8000/forget-password/resend-otp',
//         { email },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       setTimer(45);
//       setOtp(['', '', '', '', '', '']);
//       alert('New OTP has been sent to your email');
//     } catch (err) {
//       const errorMsg = err.response?.data?.detail || 'Failed to resend OTP';
//       setError(errorMsg);

//       // If rate limited, set timer to remaining time
//       if (err.response?.status === 429) {
//         setTimer(60); // Reset to 1 minute
//       }
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return (
//     <div>
//       <section
//         className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
//         style={{
//           backgroundImage: 'url("/ForgetPg/fgPg.png")',
//           height: '100dvh' // Uses dynamic viewport height for mobile
//         }}
//       >

//         {window.innerWidth < 769 && (
//          <div
//            style={{
//              position: 'absolute',
//              top: '35px',

//              left: window.innerWidth < 441 ? '24px' : '60px', // Change this value as needed
//              backgroundColor: 'white',
//              padding: '2px',
//              borderRadius: '3px',
//              width: '100px',
//              height: '30px',
//              opacity: 1,
//              // left: '44px',
//            }}
//          >
//               <img
//                    src={logoImg}
//                    alt="logo"
//                    style={{
//                      width: '100%',
//                      height: '100%',
//                      objectFit: 'contain',
//                      borderRadius: '3px',
//                    }}
//                  />

//                 </div>
//               )}
//        <div
//   className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white
//              px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center
//              gap-[40px] bg-[#00000033] backdrop-blur-sm

//              max-[440px]:flex-col max-[440px]:w-full max-[440px]:max-w-[400px]
//              max-[440px]:min-h-[506px] max-[440px]:rounded-[10px]
//              max-[440px]:border-[1px] max-[440px]:border-solid max-[440px]:border-white
//              max-[440px]:pt-[28px] max-[440px]:pr-[32px] max-[440px]:pb-[28px] max-[440px]:pl-[32px]
//              max-[440px]:gap-[40px]

//              min-[441px]:max-[768px]:w-[608px] min-[441px]:max-[768px]:h-[510px]
//              min-[441px]:max-[768px]:pt-[28px] min-[441px]:max-[768px]:pr-[32px]
//              min-[441px]:max-[768px]:pb-[28px] min-[441px]:max-[768px]:pl-[32px]
//              min-[441px]:max-[768px]:gap-[40px] min-[441px]:max-[768px]:rounded-[10px]
//              min-[441px]:max-[768px]:border-[1px]"
// >

//           <div className="w-full min-h-[80px] text-end flex justify-end">
//             <img
//               src={close}
//               alt="close"
//               className="w-[28px] h-[28px]
//       min-[441px]:max-[768px]:w-[28px]
//       min-[441px]:max-[768px]:h-[28px]
//       min-[441px]:max-[768px]:opacity-100
//       min-[441px]:max-[768px]:mt-[20px]"
//             />
//           </div>
//          <div
//   className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]

//              max-[440px]:flex-col max-[440px]:w-full max-[440px]:max-w-[336px]
//              max-[440px]:min-h-[382px] max-[440px]:gap-[40px]

//              min-[441px]:max-[768px]:w-[544px] min-[441px]:max-[768px]:h-[386px]
//              min-[441px]:max-[768px]:gap-[40px]"
// >

//             <div
//   className="w-full min-h-[86px] flex flex-col justify-center items-center gap-[12px]

//              max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[86px] max-[440px]:gap-[12px]

//              min-[441px]:max-[768px]:w-[336px] min-[441px]:max-[768px]:h-[86px] min-[441px]:max-[768px]:gap-[12px]"
// >

//               <div
//                 className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]
//                max-[440px]:w-[127px] max-[440px]:h-[26px] max-[440px]:text-[26px] max-[440px]:leading-[26px] max-[440px]:font-[600] max-[440px]:text-center"
//                 style={{ fontFamily: 'Inter' }}
//               >
//                 Enter OTP
//               </div>

//               <div
//                 className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]
//   max-[440px]:w-[336px] max-[440px]:h-[48px] max-[440px]:text-[14px] max-[440px]:leading-[24px] max-[440px]:font-[400] max-[440px]:text-center"
//                 style={{ fontFamily: 'Inter' }}
//               >
//                 We've sent a 6-digit OTP to {email}. Please enter it below to continue.
//               </div>

//             </div>

//          <div
//   className="w-[461px] min-h-[260px] flex flex-col gap-[40px]
//              max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[256px] max-[440px]:gap-[40px]
//              min-[441px]:max-[768px]:w-[544px] min-[441px]:max-[768px]:h-[260px] min-[441px]:max-[768px]:gap-[40px]"
// >

//               <div
//   className="w-[461px] min-h-[200px] flex flex-col gap-[40px]
//              max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[256px] max-[440px]:gap-[40px]
//              min-[441px]:max-[768px]:w-[544px] min-[441px]:max-[768px]:h-[260px]"
// >

//                <div
//   className="w-[461px] min-h-[50px] flex justify-between
//              max-[440px]:flex-row max-[440px]:w-[336px] max-[440px]:h-[50px] max-[440px]:justify-between
//              min-[441px]:max-[768px]:w-[544px] min-[441px]:max-[768px]:h-[50px] min-[441px]:max-[768px]:justify-between"
// >

//                   {otp.map((digit, index) => (
//                     <input
//                       key={index}
//                       id={`otp-${index}`}
//                       type="text"
//                       maxLength="1"
//                       value={digit}
//                       onChange={(e) => handleChange(index, e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === 'Backspace' && !digit && index > 0) {
//                           document.getElementById(`otp-${index - 1}`).focus();
//                         }
//                       }}
//                      className="w-[50px] h-[50px] border-b-[1px] border-solid border-[#007B82] text-white text-center bg-transparent focus:outline-none
//            min-[441px]:max-[768px]:w-[50px] min-[441px]:max-[768px]:h-[50px] min-[441px]:max-[768px]:border-b-[1px]"

//                     />
//                   ))}
//                 </div>

//                 {error && (
//                   <div className="text-red-500 text-center text-sm">
//                     {error}
//                   </div>
//                 )}

//               <div
//   onClick={handleVerify}
//   className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82]
//              flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer hover:opacity-90
//              max-[440px]:w-[336px] max-[440px]:h-[42px] max-[440px]:rounded-[8px]
//              min-[441px]:max-[768px]:w-[544px] min-[441px]:max-[768px]:h-[46px] min-[441px]:max-[768px]:rounded-[8px]"
// >
//   Verify OTP
// </div>

//               <div
//   className="w-[461px] min-h-[24px] font-[400] text-[13px] leading-[24px] text-center text-white
//              max-[440px]:w-[336px] max-[440px]:h-[24px] max-[440px]:text-[13px] max-[440px]:leading-[24px] max-[440px]:font-[400] max-[440px]:text-center
//              min-[441px]:max-[768px]:w-[544px] min-[441px]:max-[768px]:h-[24px] min-[441px]:max-[768px]:text-[13px] min-[441px]:max-[768px]:leading-[24px] min-[441px]:max-[768px]:font-[400] min-[441px]:max-[768px]:text-center"
//   style={{ fontFamily: 'Inter' }}
// >
//   Didn't receive the code?
//   <span
//     className={`${timer > 0 ? 'text-gray-400' : 'text-[#007B82] cursor-pointer hover:underline'}`}
//     onClick={handleResendOTP}
//   >
//     {isResending ? ' Resending...' :
//       timer > 0 ? ` Resend in 00:${timer.toString().padStart(2, '0')}` :
//         ' Resend OTP'}
//   </span>
// </div>

//                 <div
//                   className="w-[461px] text-center flex justify-center mx-auto
//   max-[440px]:flex-row max-[440px]:w-[192px] max-[440px]:h-[20px] max-[440px]:gap-[4px]"
//                 >

//                   <Link
//                     to="/Sign-in"
//                     className="w-full max-[440px]:w-[192px] h-[20px] flex justify-center items-center gap-[4px] hover:opacity-80"
//                   >
//                     <img src={Arrow} alt="Back arrow" />
//                   <span
//   className="font-semibold text-[15px] leading-[100%] text-[#009A98] text-center
//              max-[440px]:font-[600] max-[440px]:text-[14px] max-[440px]:leading-[100%] max-[440px]:w-[168px] max-[440px]:h-[17px]
//              min-[441px]:max-[768px]:w-[192px] min-[441px]:max-[768px]:h-[20px] min-[441px]:max-[768px]:gap-[4px]"
//   style={{ fontFamily: 'Inter' }}
// >
//   Back to forget Password
// </span>

//                   </Link>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ import toast
import "react-toastify/dist/ReactToastify.css";

import Arrow from "../../assets/forgetPg/arrow1.png";
import BgImage from "../../assets/forgetPg/ForgotPassword.png";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(45);
  const [isResending, setIsResending] = useState(false);
const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  // countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const next = document.getElementById(`otp-${index + 1}`);
        if (next) next.focus();
      }
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }

    try {
      await axios.post("http://localhost:8000/forget-password/verify-otp", {
        otp: enteredOtp,
        email,
      });

      toast.success("OTP verified successfully!");
      localStorage.removeItem("resetEmail");
      
      // delay navigation so toast is visible
      setTimeout(() => {
        navigate("/ResetPassword", { state: { email } });
      }, 1500);
    } catch (err) {
      console.error("OTP Verify Error:", err.response?.data || err.message);

      let msg = "Invalid OTP";
      if (err.response?.data) {
        if (err.response.data.detail) {
          msg = err.response.data.detail;
        } else if (err.response.data.message) {
          msg = err.response.data.message;
        } else if (typeof err.response.data === "string") {
          msg = err.response.data;
        }
      }

      toast.error(msg);
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0 || !email) return;

    setIsResending(true);

    try {
      await axios.post(
        "http://localhost:8000/forget-password/resend-otp",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setTimer(45);
      setOtp(["", "", "", "", "", ""]);
      toast.info("A new OTP has been sent to your email.");
    } catch (err) {
      const errorMsg = err.response?.data?.detail || "Failed to resend OTP";
      toast.error(errorMsg);

      if (err.response?.status === 429) {
        setTimer(60);
      }
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${BgImage})`,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className={`
          relative bg-[#00000066] w-[740px] h-[438px] rounded-[16px] border-2 
          pt-[32px] pr-[24px] pb-[32px] pl-[24px] flex flex-col items-center gap-[24px]
          backdrop-blur-md   
        `}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            borderRadius: "inherit",
            padding: "2px",
            background: `
              linear-gradient(48.81deg, rgba(0, 0, 0, 0) 60.41%, #51218F 89.33%),
              linear-gradient(221.1deg, rgba(0, 0, 0, 0) 74.13%, #51218F 92.57%)
            `,
            WebkitMask: `
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0)
            `,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: "-1",
          }}
        ></div>

        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link to="/sign-in" 
          onClick={() => {
                        localStorage.removeItem("resetEmail");  
                        toast.info("OTP verification cancelled");
                      }}
                      className="flex items-center gap-2 text-white">
            <div className="w-9 h-9 bg-[#8A38F533] rounded-full flex items-center justify-center border border-[#8A38F5]">
              <img src={Arrow} alt="back" className="w-4 h-4" />
            </div>
            <span className="text-[18px] text-white">Back</span>
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-white text-[28px] mt-14 font-normal leading-[100%] tracking-normal text-center font-[Poppins]">
          Enter OTP
        </h2>

        {/* Subtext */}
        <p className="text-[#F7F7FF80] text-[16px] font-normal leading-[150%] tracking-normal text-center font-[Poppins] max-w-[414px] opacity-100 mt-0">
          We’ve sent a 6-digit OTP to your email. Please enter it below to
          continue.
        </p>

        {/* OTP Inputs */}
        <div className="w-[554px] h-[45px] flex justify-center gap-11 mt-0">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              className="
                w-[50px]
                h-[50px]
                text-center
                text-white
                text-[20px]
                bg-transparent
                outline-none
                border-b-[1px]
                border-solid
                border-[#C22CA2]
                focus:border-[#FF45EC]
              "
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
  onClick={handleVerify}
  disabled={loading} // ✅ Optional: disable while loading
  className={`${
    loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8A38F580] hover:scale-105"
  } bg-[#8A38F533] text-white font-bold w-[554px] mt-5 py-3 rounded-[30px] border border-[#FFFFFF33] transition-all`}
>
  {loading ? "Verifying..." : "Verify OTP"} {/* ✅ Change text while loading */}
</button>

        {/* Timer */}
        <p className="text-[#F7F7FF80] text-[14px] text-center mt-4 font-normal">
          Didn’t receive the code?{" "}
          <span
            onClick={handleResendOTP}
            className={`${
              timer > 0
                ? "text-gray-400"
                : "text-[#FF45EC] cursor-pointer hover:underline"
            }`}
          >
            {isResending
              ? "Resending..."
              : timer > 0
              ? `Resend in 00:${timer.toString().padStart(2, "0")}`
              : "Resend OTP"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
