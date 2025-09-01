// import React from 'react'
// import Banner from "../../assets/profile/banner.jpg"
// import Pimage from "../../assets/profile/pimage.png"
// import Eye from "../../assets/profile/eye.png"
// import { Link } from "react-router-dom";


// export default function HeroProfile() {
//   return (
//     <div>
//       <section className="w-full h-auto p-[50px] flex flex-col justify-start items-center gap-[15px]">
//         <div className="w-[1280px] text-start h-[31px] text-[26px] font-medium text-[#2A2A2A] flex justify-start leading-[100%]">
//           <div className="w-[100%] flex justify-start ml-[5px]">My Profile</div>
//         </div>

//         <img
//           src={Banner}
//           alt="banner"
//           className="w-[1280px] h-[357px] rounded-[10px] bg-[#00000033] bg-cover bg-center bg-no-repeat fit"
//         />

//         {/* profiles  */}

//         <div className="w-[1280px] h-[869px] flex justify-center items-start gap-[20px] mt-[-100px]">
//           {/* profile1  */}

//           <div className="w-[373px] h-[859px] rounded-[12px] bg-[#FFFFFFCC] backdrop-blur-[3px] shadow-[0_1px_4px_0] shadow-[#00000040]">
//             <div className="w-[100%] h-[97px] rounded-[12px] bg-[#00B0BA33]">
//               <div className="text-center flex flex-col justify-center items-center gap-[20px] pt-[40px]">
//                 <img src={Pimage} alt="profile-pic" className="" />
//                 <div className="w-[112px] h-[29px] font-medium text-[24px] leading-[100%] text-[#2A2A2A]">
//                   John Paul
//                 </div>
//                 <div className="w-[100%] h-[2px] bg-[#E0E4E7]"></div>

//                 {/* basic-info  */}

//                 <div className="w-[100%] h-auto p-[20px] flex flex-col gap-[20px]">
//                   <div className="w-[89px] h-[22px] font-medium text-[18px] leading-[100%] text-[#00B0BA]">
//                     Basic info:
//                   </div>

//                   <div className="w-[147px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
//                     First name : <span className="text-[#B0B0B0]">John</span>
//                   </div>
//                   <div className="w-[147px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
//                     Last name : <span className="text-[#B0B0B0]">Paul</span>
//                   </div>
//                   <div className="w-[247px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
//                     Email :{" "}
//                     <span className="text-[#B0B0B0]">johnpaul@gamil.com</span>
//                   </div>
//                   <div className="w-[270px] h-[19px] flex justify-between font-[400] text-[16px] text-[#2A2A2A]">
//                     Contact number :{" "}
//                     <span className="text-[#B0B0B0]">+91 1234567890</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* profile 2  */}

//           <div className="w-[807px] h-[869px] rounded-[10px] bg-[#FFFFFFCC] backdrop-blur-[6px] shadow-[0_1px_4px_0] shadow-[#0000003D]">
//             {/* header  */}
//             <div className="w-[100%] h-[98px] flex justify-between items-center px-[30px]">
//               <Link to="/HeroProfile">
//                 <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus-within:text-[#007B82] focus-within:border-b-[#007B82] cursor-pointer active:text-[#007B82] active:border-b-[#007B82]">
//                   Edit Profile
//                 </button>
//               </Link>
//               <Link to="/Myplan">
//                 <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
//                   My Plan
//                 </button>
//               </Link>
//               <Link to="/Mybilling">
//                 <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
//                   My Billing
//                 </button>
//               </Link>
//               <Link to="/HelpCenter">
//                 <button className="w-[150px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
//                   Help Center
//                 </button>
//               </Link>
//             </div>

//             {/* profile  */}

//             <div className="w-[807px] h-[771px] py-[30px] px-[40px] flex flex-col gap-[30px] justify-start items-start">
//               {/* logo  */}

//               <div className="w-[100%] h-[109px] flex flex-col justify-center items-center gap-[12px] ">
//                 <img
//                   src={Pimage}
//                   alt="logo"
//                   className="border-[2px] border-solid border-[#007B82] rounded-[50%]"
//                 />
//                 <Link to="">
//                   <div className="w-[111px] h-[17px] font-[400] leading-[100%] text-center text-[14px] text-[#007B82] ">
//                     Change image
//                   </div>
//                 </Link>
//               </div>

//               {/* form  */}

//               <div className="w-[687px] h-[488px] flex flex-col justify-start items-start gap-[32px]">
//                 <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
//                   <div className="w-[330px] h-[70px]">
//                     <label
//                       htmlFor=""
//                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                     >
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="John"
//                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                     />
//                   </div>
//                   <div className="w-[330px] h-[70px]">
//                     <label
//                       htmlFor=""
//                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                     >
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Paul"
//                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                     />
//                   </div>
//                 </div>

//                 {/* email  */}

//                 <div className="w-[687px] h-[69px] flex justify-start items-start gap-[27px]">
//                   <div className="w-[330px] h-[70px]">
//                     <label
//                       htmlFor=""
//                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Johnpaul@gmail.com"
//                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                     />
//                   </div>
//                   <div className="w-[330px] h-[70px]">
//                     <label
//                       htmlFor=""
//                       className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                     >
//                       Contact Number
//                     </label>
//                     <input
//                       type="number"
//                       placeholder="+91 1234567890"
//                       className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                     />
//                   </div>
//                 </div>

//                 {/* password  */}

//                 <div className="w-[687px] h-[141px] flex flex-col justify-start items-start gap-[13px]">
//                   <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
//                     Password
//                   </div>

//                   <div className="w-[687px] h-[90px] flex flex-col gap-[5px]">
//                     <div className="w-[687px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
//                       Current Password
//                     </div>
//                     <div className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[687px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus:border-[1px] active:border-[1px] active:border-solid  active:border-[#00B0BA] focus-within:border-[#00B0BA]">
//                       <input
//                         type="password"
//                         placeholder="John@stackly10"
//                         className="w-[100%] focus:placeholder:text-[black] active:placeholder:text-[black] active:border-[#00B0BA] focus:border-[#00B0BA]"
//                       />
//                       <img
//                         src={Eye}
//                         alt="eye"
//                         className="w-[23.25px] h-[13.56px]"
//                       />
//                     </div>
//                     <Link to="">
//                       <div className="w-[687px] h-[17px] font-[400] text-[14px] leading-[100%] text-right text-[400] text-[#007B82] underline">
//                         Reset Password
//                       </div>
//                     </Link>
//                   </div>
//                 </div>

//                 {/* reset password  */}

//                 <div className="w-[687px] h-[112px] flex flex-col items-start justify-start gap-[20px]">
//                   <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
//                     Reset Password
//                   </div>
//                   <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
//                     <div className="w-[330px] h-[70px]">
//                       <label
//                         htmlFor=""
//                         className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                       >
//                         New Password
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Johnpaulstackly10"
//                         className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                       />
//                     </div>
//                     <div className="w-[330px] h-[70px]">
//                       <label
//                         htmlFor=""
//                         className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]"
//                       >
//                         Confirm Password
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Johnpaulstackly10"
//                         className="focus:placeholder:text-[black] active:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid active:border-[#00B0BA] focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* buttons  */}
//                 <div className="w-[100%] h-[41px] flex justify-end items-center gap-[24px]">
//                   <div className="w-[223px] h-[41px] flex gap-[24px] justify-between ">
//                     <Link to="">
//                       <div className="w-[99px] h-[41px] rounded-[10px] border-[1px] border-solid border-[#007B82] px-[20px] py-[6px] gap-[8px] flex justify-center items-center text-[#007B82]">
//                         Discard
//                       </div>
//                     </Link>
//                     <Link to="">
//                       <div className="w-[100px] h-[41px] rounded-[10px] px-[10px] py-[6px] bg-[#007B82] text-[white] flex justify-center items-center">
//                         Save
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

//HeroProfile.jsx
import React, { useState, useEffect } from 'react';
import Banner from "../../assets/profile/banner.jpg";
import Pimage from "../../assets/profile/pimage.png";
import Eye from "../../assets/profile/eye.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Camera } from "lucide-react";

export default function HeroProfile() {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    current_password: '',
    new_password: '',
    confirm_password: '',
    profile_pic: null,
    previewImage: Pimage
  });
  const [loading, setLoading] = useState(true);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //HeroProfile.jsx
  useEffect(() => {
  const fetchUserData = async () => {
    try {
      let userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      // If no direct userId, try from userInfo
      if (!userId) {
        const userInfoRaw = localStorage.getItem("userInfo");
        if (userInfoRaw) {
          try {
            const userInfo = JSON.parse(userInfoRaw);
            userId = userInfo.userId || userInfo.id; // fallback if key is different
          } catch (err) {
            console.warn("Failed to parse userInfo from localStorage", err);
          }
        }
      }

      if (!token) {
        throw new Error("No authentication token found");
      }
      if (!userId) {
        throw new Error("No user ID found in storage");
      }

      const response = await axios.get("http://localhost:8000/profile", {
        params: { userid: userId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserData((prev) => ({
        ...prev,
        first_name: response.data.first_name || "",
        last_name: response.data.last_name || "",
        email: response.data.email || "",
        phone_number: response.data.phone_number || "",
        previewImage: response.data.profile_pic
          ? `http://localhost:8000${response.data.profile_pic}`
          : Pimage,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error(error.response?.data?.detail || "Failed to load profile data");

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
}, []);


  // Rest of your code remains the same...
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData(prev => ({
        ...prev,
        profile_pic: file,
        previewImage: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const formData = new FormData();

      if (userData.first_name?.trim()) {
        formData.append('first_name', userData.first_name);
      }
      if (userData.last_name?.trim()) {
        formData.append('last_name', userData.last_name);
      }
      if (userData.email?.trim()) {
        formData.append('email', userData.email);
      }
      if (userData.phone_number?.trim()) {
        formData.append('phone_number', userData.phone_number);
      }

      if (userData.current_password?.trim()) {
        formData.append('current_password', userData.current_password);
      }
      if (userData.new_password?.trim()) {
        formData.append('new_password', userData.new_password);
      }
      if (userData.confirm_password?.trim()) {
        formData.append('confirm_password', userData.confirm_password);
      }

      if (userData.profile_pic) {
        formData.append('profile_pic', userData.profile_pic);
      }

      // If no fields are updated, don't send empty request
      if ([...formData.keys()].length === 0) {
        toast.warning("No changes detected to update.");
        setLoading(false);
        return;
      }

      const response = await axios.post('http://localhost:8000/update_profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      toast.success('Profile updated successfully!');

      // Update preview image if backend returns updated profile_pic
      if (response.data.user?.profile_pic) {
        setUserData(prev => ({
          ...prev,
          previewImage: response.data.profile_pic
            ? (response.data.profile_pic.startsWith('/media/profile_pics')
              ? `http://localhost:8000${response.data.profile_pic}`
              : response.data.profile_pic)
            : Pimage
        }));
      }

    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.response?.data?.detail || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };


  const handleDiscard = () => {
    // Reset password fields and profile pic selection (but keep other data)
    setUserData(prev => ({
      ...prev,
      current_password: '',
      new_password: '',
      confirm_password: '',
      profile_pic: null
    }));
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div>Loading profile data...</div>
      </div>
    );
  }

  return (
    <div>
      <section className="w-full h-auto p-[50px] flex flex-col justify-start items-center gap-[15px]">
        <div className="w-[1280px] text-start h-[31px] text-[26px] font-medium text-[#2A2A2A] flex justify-start leading-[100%]">
          <div className="w-[100%] flex justify-start ml-[5px]">My Profile</div>
        </div>

        <img
          src={Banner}
          alt="banner"
          className="w-[1280px] h-[357px] rounded-[10px] bg-[#00000033] bg-cover bg-center bg-no-repeat fit"
        />

        <div className="w-[1280px] h-[869px] flex justify-center items-start gap-[20px] mt-[-100px]">
          {/* Left Profile Card */}
          <div className="w-[373px] h-[859px] rounded-[12px] bg-[#FFFFFFCC] backdrop-blur-[3px] shadow-[0_1px_4px_0] shadow-[#00000040]">
            <div className="w-[100%] h-[97px] rounded-[12px] bg-[#00B0BA33]">
              <div className="text-center flex flex-col justify-center items-center gap-[20px] pt-[40px]">
                <img
                  src={userData.previewImage}
                  alt="profile-pic"
                  className="w-24 h-24 rounded-full object-cover border-2 border-white"
                />
                <div className="w-[full] h-[29px] font-bold text-[24px] leading-[100%] text-[#2A2A2A]">
                  {userData.first_name} {userData.last_name}
                </div>
                <div className="w-[100%] h-[2px] bg-[#E0E4E7]"></div>

                {/* Basic Info Section */}
                <div className="w-[100%] h-auto p-[20px] flex flex-col gap-[20px]">
                  <div className="w-[89px] h-[22px] font-bold text-[18px] leading-[100%] text-[#00B0BA]">
                    Basic info:
                  </div>

                  <div className="w-full flex justify-between font-bold text-[16px] text-[#2A2A2A]">
                    <span>First name:</span>
                    <span className="text-black font-medium">{userData.first_name || 'Not set'}</span>
                  </div>
                  <div className="w-full flex justify-between font-bold text-[16px] text-[#2A2A2A]">
                    <span>Last name:</span>
                    <span className="text-black font-medium">{userData.last_name || 'Not set'}</span>
                  </div>
                  <div className="w-full flex justify-between font-bold text-[16px] text-[#2A2A2A]">
                    <span>Email:</span>
                    <span className="text-black font-medium">{userData.email || 'Not set'}</span>
                  </div>
                  <div className="w-full flex justify-between font-bold text-[16px] text-[#2A2A2A]">
                    <span>Contact number:</span>
                    <span className="text-black font-medium">{userData.phone_number || 'Not set'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Profile Edit Section */}
          <div className="w-[807px] h-[869px] rounded-[10px] bg-[#FFFFFFCC] backdrop-blur-[6px] shadow-[0_1px_4px_0] shadow-[#0000003D]">
            {/* Navigation Header */}
            <div className="w-[100%] h-[98px] flex justify-between items-center px-[30px]">
              <Link to="/HeroProfile">
                <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus-within:text-[#007B82] focus-within:border-b-[#007B82] cursor-pointer active:text-[#007B82] active:border-b-[#007B82]">
                  Edit Profile
                </button>
              </Link>
              <Link to="/Myplan">
                <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
                  My Plan
                </button>
              </Link>
              <Link to="/Mybilling">
                <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
                  My Billing
                </button>
              </Link>
              <Link to="/HelpCenter">
                <button className="w-[150px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus:text-[#007B82] focus:border-b-[#007B82] cursor-pointer active:text-[#007B82]">
                  Help Center
                </button>
              </Link>
            </div>

            {/* Profile Edit Form */}
            <div className="w-[807px] h-[771px] py-[30px] px-[40px] flex flex-col gap-[30px] justify-start items-start">
              {/* Profile Image Section */}
              {/* Profile Image Section - Centered */}
              {/* <div className="flex flex-col items-center justify-center w-full gap-3">
                <div className="relative group mx-auto"> 
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-solid border-[#007B82] shadow-md mx-auto">
                    <img
                      src={userData.previewImage}
                      alt="Profile"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <label className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer flex items-center justify-center w-full h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                <label className="text-[#007BFF] text-sm font-medium cursor-pointer hover:underline transition-all text-center block w-full">
                  Change image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div> */}
              {/* Profile Image Section - Centered with Bottom-Right Camera Icon */}
              <div className="flex flex-col items-center w-full gap-3">
                <div className="relative group">
                  {/* Circular Profile Image */}
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#007B82] shadow-lg transition-transform duration-300 group-hover:shadow-xl">
                    <img
                      src={userData.previewImage}
                      alt="Profile"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Bottom-Right Camera Icon Button */}
                  <label className="absolute bottom-0 right-0 bg-[#007B82] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-2 border-white shadow-md hover:bg-[#005f6b] transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Optional: Change image link below the picture */}
                <label className="text-sm text-[#007B82] font-medium cursor-pointer hover:underline transition duration-200">
                  Change image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="w-[687px] h-[488px] flex flex-col justify-start items-start gap-[32px]">
                {/* Name Fields */}
                <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
                  <div className="w-[330px] h-[70px]">
                    <label className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={userData.first_name}
                      onChange={handleChange}
                      placeholder="John"
                      className="focus:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                    />
                  </div>
                  <div className="w-[330px] h-[70px]">
                    <label className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={userData.last_name}
                      onChange={handleChange}
                      placeholder="Paul"
                      className="focus:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="w-[687px] h-[69px] flex justify-start items-start gap-[27px]">
                  <div className="w-[330px] h-[70px]">
                    <label className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      placeholder="johnpaul@gmail.com"
                      className="focus:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                    />
                  </div>
                  <div className="w-[330px] h-[70px]">
                    <label className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={userData.phone_number}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                      className="focus:placeholder:text-[black] w-[328px] h-[44px] rounded-[10px] border-[1px] border-solid focus:border-[#00B0BA] border-[#A0A0A0] px-[20px]"
                    />
                  </div>
                </div>

                {/* Current Password */}
                <div className="w-[687px] h-[141px] flex flex-col justify-start items-start gap-[13px]">
                  <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
                    Password
                  </div>

                  <div className="w-[687px] h-[90px] flex flex-col gap-[5px]">
                    <div className="w-[687px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                      Current Password
                    </div>
                    <div className="w-[687px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus-within:border-[#00B0BA]">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        name="current_password"
                        value={userData.current_password}
                        onChange={handleChange}
                        placeholder="Enter current password"
                        className="w-[100%] focus:placeholder:text-[black]"
                      />
                      <img
                        src={Eye}
                        alt="eye"
                        className="w-[23.25px] h-[13.56px] cursor-pointer"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      />
                    </div>
                  </div>
                </div>

                {/* New Password */}
                <div className="w-[687px] h-[112px] flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[687px] h-[22px] font-medium text-[18px] leading-[100%] text-[#007B82]">
                    Reset Password
                  </div>
                  <div className="w-[687px] h-[70px] flex justify-start items-start gap-[27px]">
                    <div className="w-[330px] h-[70px]">
                      <label className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                        New Password
                      </label>
                      <div className="w-[328px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus-within:border-[#00B0BA]">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          name="new_password"
                          value={userData.new_password}
                          onChange={handleChange}
                          placeholder="Enter new password"
                          className="w-[100%] focus:placeholder:text-[black]"
                        />
                        <img
                          src={Eye}
                          alt="eye"
                          className="w-[23.25px] h-[13.56px] cursor-pointer"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        />
                      </div>
                    </div>
                    <div className="w-[330px] h-[70px]">
                      <label className="w-[328px] h-[19px] font-[400] text-[16px] leading-[100%] text-[#2A2A2A]">
                        Confirm Password
                      </label>
                      <div className="w-[328px] h-[44px] border-[1px] border-solid border-[#A0A0A0] rounded-[10px] px-[20px] flex justify-between items-center focus-within:border-[#00B0BA]">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirm_password"
                          value={userData.confirm_password}
                          onChange={handleChange}
                          placeholder="Confirm new password"
                          className="w-[100%] focus:placeholder:text-[black]"
                        />
                        <img
                          src={Eye}
                          alt="eye"
                          className="w-[23.25px] h-[13.56px] cursor-pointer"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="w-[100%] h-[41px] flex justify-end items-center gap-[24px]">
                  <div className="w-[223px] h-[41px] flex gap-[24px] justify-between">
                    <button
                      type="button"
                      onClick={handleDiscard}
                      disabled={loading}
                      className="w-[99px] h-[41px] rounded-[10px] border-[1px] border-solid border-[#007B82] px-[20px] py-[6px] gap-[8px] flex justify-center items-center text-[#007B82] disabled:opacity-50"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      //disabled={loading}
                      className="w-[100px] h-[41px] rounded-[10px] px-[10px] py-[6px] bg-[#007B82] text-[white] flex justify-center items-center disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}