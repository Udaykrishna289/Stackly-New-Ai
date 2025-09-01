// import { useEffect, useContext } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';
// import axios from 'axios';

// export default function AuthCallback() {
//   const { login } = useContext(UserContext);
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     const verifyAuth = async () => {
//       try {
//         const res = await axios.get('http://localhost:8000/verify-auth', {
//           withCredentials: true
//         });

//         if (res.data.valid) {
//           const userRes = await axios.get('http://localhost:8000/me', {
//             withCredentials: true
//           });
          
//           login({
//             userId: userRes.data.id,
//             email: userRes.data.email,
            
//           });
          
//           navigate('/AfterHome');
//         } else {
//           navigate('/login', { state: { error: "Authentication failed" } });
//         }
//       } catch (err) {
//         navigate('/login', { state: { error: "Authentication error" } });
//       }
//     };

//     verifyAuth();
//   }, [navigate, login]);

//   return <div>Processing authentication...</div>;
// }

//AuthCallback.jsx
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AuthCallback({ setUserInfo }) {
  const navigate = useNavigate();
  const location = useLocation();
  const hasProcessed = useRef(false); // Prevent multiple executions

  useEffect(() => {
    if (hasProcessed.current) return; // Skip if already processed

    const queryParams = new URLSearchParams(location.search);
    const authSuccess = queryParams.get("authSuccess");
    const token = queryParams.get("token");
    const userId = queryParams.get("userId");
    const email = queryParams.get("email");

    console.log("AuthCallback query params:", { authSuccess, token, userId, email });

    if (authSuccess === "true" && token && userId && email !== undefined) {
      const userData = { userId, email, token };
      setUserInfo(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));
      console.log("Stored userInfo in localStorage:", userData);
      hasProcessed.current = true; // Mark as processed
      navigate("/", { replace: true });
    } else {
      console.error("Missing or invalid query parameters:", { authSuccess, token, userId, email });
      hasProcessed.current = true; // Mark as processed to prevent looping
      navigate("/sign-in", { replace: true });
    }
  }, [location.search, navigate, setUserInfo]);

  return <div>Redirecting...</div>;
}

export default AuthCallback;