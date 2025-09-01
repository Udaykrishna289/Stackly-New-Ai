import React, { useEffect, useState } from "react";
import Banner from "../../assets/profile/banner.jpg";
import Pimage from "../../assets/profile/pimage.png";
import Img from "../../assets/profile/msg.png";
import Eye from "../../assets/profile/eye.png";
import { Link } from "react-router-dom";
import { px } from "framer-motion";
import axios from 'axios';


export default function HelpCenter() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState("");
  
  const [profileData, setProfileData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      profile_pic: null,
      previewImage: Pimage
    });

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await fetch("http://localhost:8000/help-center", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.detail || "Submission failed");

      setSuccessMsg("Your message has been sent successfully!");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      let userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      // If no direct userId, fallback to userInfo
      if (!userId) {
        const userInfoRaw = localStorage.getItem("userInfo");
        if (userInfoRaw) {
          try {
            const userInfo = JSON.parse(userInfoRaw);
            userId = userInfo.userId || userInfo.id;
          } catch (err) {
            console.warn("Failed to parse userInfo from localStorage", err);
          }
        }
      }

      if (!token) throw new Error("No authentication token found");
      if (!userId) throw new Error("No user ID found in storage");

      // Fetch profile data
      const profileResponse = await axios.get("http://localhost:8000/profile", {
        params: { userid: userId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profilePicUrl = profileResponse.data.profile_pic
        ? (profileResponse.data.profile_pic.startsWith("/media/profile_pics")
            ? `http://localhost:8000${profileResponse.data.profile_pic}`
            : profileResponse.data.profile_pic)
        : Pimage;

      setProfileData((prev) => ({
        ...prev,
        first_name: profileResponse.data.first_name || "",
        last_name: profileResponse.data.last_name || "",
        email: profileResponse.data.email || "",
        phone_number: profileResponse.data.phone_number || "",
        profile_pic: profileResponse.data.profile_pic,
        previewImage: profilePicUrl,
      }));

    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.response?.data?.detail || "Failed to load data");

      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-500">
        Error: {error}
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

        {/* profiles  */}

        <div className="w-[1280px] h-[869px] flex justify-center items-start gap-[20px] mt-[-100px]">
                  {/* Left Profile Card */}
                  <div className="w-[373px] h-[859px] rounded-[12px] bg-[#FFFFFFCC] backdrop-blur-[3px] shadow-[0_1px_4px_0] shadow-[#00000040]">
                    <div className="w-[100%] h-[97px] rounded-[12px] bg-[#00B0BA33]">
                      <div className="text-center flex flex-col justify-center items-center gap-[20px] pt-[40px]">
                        <img
                          src={profileData.previewImage}
                          alt="profile-pic"
                          className="w-24 h-24 rounded-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = Pimage;
                          }}
                        />
                        <div className="w-[full] h-[29px] font-bold text-[24px] leading-[100%] text-[#2A2A2A]">
                          {profileData.first_name} {profileData.last_name}
                        </div>
                        <div className="w-[100%] h-[2px] bg-[#E0E4E7]"></div>
        
                        <div className="w-[100%] h-auto p-[20px] flex flex-col gap-[20px]">
                          <div className="w-[89px] h-[22px] font-bold text-[18px] leading-[100%] text-[#00B0BA]">
                            Basic info:
                          </div>
        
                          <div className="w-[147px] h-[19px] flex justify-between font-bold text-[16px] text-[#2A2A2A]">
                            First name : <span className="text-black font-medium">{profileData.first_name}</span>
                          </div>
                          <div className="w-[147px] h-[19px] flex justify-between font-bold text-[16px] text-[#2A2A2A]">
                            Last name : <span className="text-black font-medium">{profileData.last_name}</span>
                          </div>
                          <div className="w-[247px] h-[19px] flex justify-between font-bold text-[16px] text-[#2A2A2A]">
                            Email : <span className="text-black font-medium">{profileData.email}</span>
                          </div>
                          <div className="w-[270px] h-[19px] flex justify-between font-bold text-[16px] text-[#2A2A2A]">
                            Contact number : <span className="text-black font-medium">{profileData.phone_number}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

          {/* profile 2  */}

          <div className="w-[807px] h-[869px] rounded-[10px] bg-[#FFFFFFCC] backdrop-blur-[6px] shadow-[0_1px_4px_0] shadow-[#0000003D]">
            {/* header  */}
            <div className="w-[100%] h-[98px] flex justify-between items-center px-[30px]">
              <Link to="/HeroProfile">
                <button className="w-[94px] h-[98px] flex justify-center items-center font-medium text-[18px] leading-[100%] text-[black] hover:text-[#007B82] hover:border-b-[#007B82] hover:border-solid hover:border-b-[2px] focus-within:text-[#007B82] focus-within:border-b-[#007B82] cursor-pointer active:text-[#007B82] active:border-b-[#007B82] focus:border-b-[2px] outline-none  focus:border-b-[#007B82]">
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

            {/* profile  */}

            <div className="w-[807px] h-[733px] px-[60px] py-[20px] flex flex-col justify-start items-center gap-[10px]">
              <div className="w-[687px] h-[693px] flex flex-col gap-[32px] justify-start items-center">
                <div className="w-[100%] h-[24px] text-center font-semibold text-[20px] text-[#2a2a2a]">
                  Need Assistance?
                </div>
                <div className="w-[100%] h-[17px] text-center font-[400] text-[14px] text-[#2A2A2A]">
                  We're here to help. Whether you're facing an issue or simply
                  have a question, feel free to reach out anytime.
                </div>
                <div className="w-[687px] h-[533px] rounded-[12px] border-[1px] border-solid border-[#007B82] flex flex-col justify-center items-center gap-[36px] px-[36px] py-[32px] shadow-[#ABB2BB40] shadow-[0_1.54px_12.2px_0]">
                  <div className="w-[244px] h-[24px] flex justify-between items-center gap-[8px]">
                    <img src={Img} alt="icon" />
                    <div className="font-semibold text-[20px] text-[#007B82]">
                      Let’s Stay Connected!
                    </div>
                  </div>
                  <div className="w-[615px] h-[18px] font-[400] text-[14px] text-center text-[#2A2A2A]">
                    Leave your email and message below. We’ll get back to you as
                    soon as possible.
                  </div>
                  <div className="w-[487px] h-[355px] flex flex-col justify-between items-center gap-[32px]">
                    <div className="w-[487px] h-[282px] flex flex-col justify-between items-center gap-[24px]">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your email"
                        className="w-[487px] h-[44px] rounded-[10px] border-[1px] border-[#007B82] border-solid px-[16px] py-[10px] text-[16px] text-[#2A2A2A] focus:outline-none focus:border-[#007B82]"
                      />
                      <input
                        type="email"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Write a Subject"
                        className="w-[487px] h-[44px] rounded-[10px] border-[1px] border-[#007B82] border-solid px-[16px] py-[10px] text-[16px] text-[#2A2A2A] focus:outline-none focus:border-[#007B82]"
                      />
                      <textarea
                        type="email"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message (Max 500 characters)"
                        className="w-[487px] h-[144px] rounded-[10px] border-[1px] border-[#007B82] border-solid px-[16px] py-[10px] text-[16px] text-[#2A2A2A] focus:outline-none focus:border-[#007B82]"
                      />

                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-[371px] h-[41px] rounded-[10px] px-[40px] py-[6px] flex justify-center items-center bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82] font-semibold text-[16px] text-[white]"
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

