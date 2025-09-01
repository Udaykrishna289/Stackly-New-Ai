// Cancel.jsx
// import { useEffect } from "react";
// import axios from "axios";

// export default function Cancel() {
//   useEffect(() => {
//     const email = localStorage.getItem("billing_email");
//     const name = localStorage.getItem("billing_name");

//     if (email && name) {
//       axios.post("http://localhost:8000/pricing/send-payment-failed-email", {
//         email,
//         name
//       }).then(() => {
//         console.log("Payment failure email sent.");
//       }).catch((error) => {
//         console.error("Error sending failure email:", error);
//       });
//     }

//     // Clean up after sending
//     localStorage.removeItem("billing_email");
//     localStorage.removeItem("billing_name");
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "80px" }}>
//       <h2 style={{ color: "red" }}>Payment Failed</h2>
//       <p>Your payment was not successful. Please try again.</p>
//     </div>
//   );
// }

// Cancel.jsx
import { useEffect } from "react";
import Tick from "../../assets/pricing-pg/tick.png";
import Tick1 from "../../assets/pricing-pg/tick1.png";
import Logo from "../../assets/pricing-pg/flogo.png";
import Success from "../../assets/pricing-pg/error.png";
import Paper from "../../assets/pricing-pg/paper.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cancel() {
    useEffect(() => {
    const email = localStorage.getItem("billing_email");
    const name = localStorage.getItem("billing_name");

    if (email && name) {
      axios.post("http://localhost:8000/pricing/send-payment-failed-email", {
        email,
        name
      }).then(() => {
        console.log("Payment failure email sent.");
      }).catch((error) => {
        console.error("Error sending failure email:", error);
      });
    }

    // Clean up after sending
    localStorage.removeItem("billing_email");
    localStorage.removeItem("billing_name");
  }, []);

    return (
        <div>
            <br />

            <div
                className="bg-[gray] w-full min-h-[800px] flex justify-center items-center bg-center bg-no-repeat bg-cover
      "
                style={{ backgroundImage: 'url("/PricingPg/failure.png")' }}
            >
                <div className="w-[1280px] min-h-[720px] rounded-[16px] border-[1px] border-solid border-[#E8EBF1] drop-shadow-[0_0_12px_0] shadow-[#E3EBFB80] bg-blur-[100px] blur-[100px] backdrop-blur-[20px] flex flex-col justify-start items-start px-[50px] py-[30px]">
                    <div className="w-full min-h-[50px] flex justify-start"></div>

                    <div className="w-[1160px] h-[636px] flex flex-col justify-start items-start gap-[16px]">

                        <div className="w-full min-h-[600px]  flex flex-col justify-center items-center gap-[10px]">
                            {/* Logo in top-right */}
                            <div className="w-[144px] h-[42px] absolute top-20 left-20">
                                <img src={Logo} alt="Stackly-logo" className="w-[120px]" />
                            </div>

                            {/* Centered content */}
                            <img src={Success} alt="logo-error" className="w-[300px] h-[300px]" />

                            <div className="w-[1072px] h-[74px] mt-[30px] text-center font-[400] text-[24px] leading-[156%] text-[#2A2A2A]">
                                We are sorry, there was an error processing your payment. Please try again with a different payment method.
                            </div>
                            <Link to="/pricing#afteruiplans">
                            <div className="w-[304px] h-[37px] mt-[30px] text-center font-[400] text-[20px] leading-[156%] text-[#2A2A2A] underline">
                                Return to payment method
                            </div>
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}