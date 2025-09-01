import React, { useState } from "react";
import axios from "axios";
import ellipse from "../../assets/contactus/Ellipse.png";
import ellipse1 from "../../assets/contactus/Ellipse2.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await axios.post("http://localhost:8000/contact", {
        ...formData,
        source: "contact_us",
      });

      setIsSubmitted(true);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-black overflow-hidden w-full flex justify-center items-center py-28 px-4 min-h-screen mt-[-70px]">
      {/* Background */}
      <img
        src={ellipse}
        alt="Background Ellipse"
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[1568px] z-0 pointer-events-none select-none"
      />
      <img
        src={ellipse1}
        alt="Background Ellipse"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1568px] z-0 pointer-events-none select-none"
      />

      {/* Form section */}
      <div className="relative z-10 w-[668px] flex flex-col items-center gap-[28px] text-white">
        <div className="text-center font-[Poppins]">
          <h2 className="text-[32px] mt-8 font-semibold flex justify-center items-center gap-2">
            Let's Have a Chat
          </h2>
          <p className="mt-2 text-[20px] text-white/80">
            Curious how AI can style your space? <br /> Let's talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="John"
                required
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Paul"
                required
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                placeholder="+91 99999 99999"
                required
                className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Type something..."
              required
              className="w-full p-3 rounded-[12px] border border-white/40 bg-white/10 text-white placeholder-white/50 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-2 rounded-full text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "30px",
              background: "rgba(138, 56, 245, 0.2)",
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success / Error messages */}
        {isSubmitted && (
          <p className="text-green-400 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
        {submitError && (
          <p className="text-red-400 text-center mt-4">{submitError}</p>
        )}

        <p className="text-center text-base font-normal mt-6">
          *Questions, comments, or suggestions? Simply fill in the form and
          we'll be in touch shortly.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
