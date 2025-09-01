//import React from 'react';
import React, { useState } from "react";
import axios from "axios";
import formBanner from "../../assets/pricing-pg/formBanner.jpg"; // Adjust path as needed

//Connect fastapi
const AfterContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/contact", {
        ...formData,
        source: "contact_us",
      });
      alert("Message sent successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    // <section
    //   className="w-full h-[921px] bg-cover bg-center flex items-center justify-center"
    //   style={{
    //     backgroundImage: `url(${formBanner})`,
    //   }}
    // >
    //   <div className="max-w-[1400px]  rounded-xl  flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-10">
    //     {/* Left Text Content */}
    //     <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">

    //       <h2 className="text-[80px] leading-[85px] font-bold text-[white] text-center">
    //         Let's talk <br /> with us
    //       </h2>
    //       <p className="text-[#F5F5F5] mt-4  min-h-[51px] text-center text-[18px] ">
    //         Questions, comments, or suggestions? Simply<br/> fill in the form and we’ll be in touch shortly.
    //       </p>
    //     </div>

    //     {/* Right Form */}
    //     {/* <div className="  max-w-[730px] min-h-[80px] bg-white p-6 rounded-[10px]"> */}
    //     <div className="w-[730px] h-[650px] bg-white p-6 rounded-[10px] overflow-auto">
    //       <form className="space-y-4" onSubmit={handleSubmit}>
    //         {/* Name Fields */}
    //         <div className="flex gap-4">
    //           <div className="w-1/2">
    //             <label className="block text-sm font-medium text-gray-700">
    //               First name<span className="text-red-500">*</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="first_name"
    //               placeholder="Ram"
    //               value={formData.first_name}
    //               onChange={handleChange}
    //               className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100 focus:border-[1px] border-solid border-[#00B0BA]"
    //             />
    //           </div>
    //           <div className="w-1/2">
    //             <label className="block text-sm font-medium text-gray-700">
    //               Last Name
    //             </label>
    //             <input
    //               type="text"
    //               name="last_name"
    //               placeholder="Prakash"
    //               className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
    //               value={formData.last_name}
    //               onChange={handleChange}
    //               //readOnly
    //             />
    //           </div>
    //         </div>

    //         {/* Email */}
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Email<span className="text-red-500">*</span>
    //           </label>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="ramprakash@example.com"
    //             className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
    //             value={formData.email}
    //             onChange={handleChange}
    //           />
    //         </div>

    //         {/* Contact Number */}
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Contact Number<span className="text-red-500">*</span>
    //           </label>
    //           <input
    //             type="tel"
    //             name="contact_number"
    //             placeholder="+91 0123456789"
    //             className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
    //             value={formData.contact_number}
    //             onChange={handleChange}
    //           />
    //         </div>

    //         {/* Subject Dropdown */}
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Select Subject<span className="text-red-500">*</span>
    //           </label>
    //           <select
    //             name="subject"
    //             value={formData.subject}
    //             onChange={handleChange}
    //             className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
    //           >
    //             <option value="">Select a Subject</option>
    //             <option value="Support">Support</option>
    //             <option value="Sales">Sales</option>
    //             <option value="Other">Other</option>
    //           </select>
    //         </div>

    //         {/* Message */}
    //         <div>
    //           <textarea
    //             placeholder="Your Message (Max 500 Characters)"
    //             maxLength={500}
    //             rows={4}
    //             name="message"
    //             className="mt-1 w-full border rounded-md px-3 py-2 bg-gray-100"
    //             value={formData.message}
    //             onChange={handleChange}
    //           />
    //         </div>

    //         {/* Submit Button */}
    //         <button
    //           type="submit"
    //           className="w-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-medium py-2 rounded-md hover:opacity-90"
    //         >
    //           Submit
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </section>
    <section
      className="w-full h-[960px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${formBanner})`,
      }}
    >
      <div className="max-w-[1400px] w-full rounded-xl flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-[80px] leading-[85px] font-bold text-[white] text-center">
            Let's talk <br /> with us
          </h2>
          <p className="text-[#F5F5F5] mt-4  min-h-[51px] text-center text-[18px] ">
            Questions, comments, or suggestions? Simply
            <br /> fill in the form and we’ll be in touch shortly.
          </p>
        </div>

        {/* Right Form - increased size */}
        <div className="md:w-1/2 min-h-[650px] bg-white p-8 rounded-[10px] shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium  font-bold">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="first_name"
                  placeholder="Ram"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-md px-4 py-3 bg-gray-100 focus:border-[1px] border-solid border-[#00B0BA]"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium  font-bold">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Prakash"
                  className="mt-1 w-full border rounded-md px-4 py-3 bg-gray-100"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium  font-bold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="ramprakash@example.com"
                className="mt-1 w-full border rounded-md px-4 py-3 bg-gray-100"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium  ">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contact_number"
                required
                placeholder="+91 0123456789"
                className="mt-1 w-full border rounded-md px-4 py-3 bg-[#e8f0fe]"
                value={formData.contact_number}
                onChange={handleChange}
              />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium">
                Select Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-1">
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full border rounded-md pl-5 pr-10 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${formData.subject === "" ? "text-gray-400 bg-gray-100" : "text-black bg-[#e8f0fe]"
                    }`}
                >
                  <option value="" disabled hidden>
                    Select a Subject
                  </option>
                  <option value="Support">Support</option>
                  <option value="Sales">Sales</option>
                  <option value="Other">Other</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>


            {/* Message */}
            <div>
              <label className="block text-sm font-medium  ">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Your Message (Max 500 Characters)"
                maxLength={500}
                rows={5}
                name="message"
                className="mt-1 w-full rounded-md px-4 py-3 bg-[#e8f0fe]"
                value={formData.message}
                required
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                background: `linear-gradient(to right, #007c82 0%,rgb(4, 68, 75),rgb(3, 89, 94) 100%)`,
              }}
              className="w-full bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-medium py-3 rounded-md hover:opacity-90 text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AfterContactForm;
