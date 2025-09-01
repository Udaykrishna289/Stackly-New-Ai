import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vector from "../../assets/api/vector.png";
import user from "../../assets/api/user.png";
import trending from "../../assets/api/trending.png";
import { AnimatePresence } from "framer-motion";
import buttonkey from '../../assets/api/Key1.png'

const CustomAPIPlan = () => {
  const [current, setCurrent] = useState(0);
  const [hoverStates, setHoverStates] = useState([false, false, false]);

  const boxes = [
    {
      title: "Tailored Integrations",
      desc: "Get APIs configured to suit your specific workflows, data requirements, and use cases—no unnecessary extras.",
      icon: vector,
      gradient: "rgba(0, 176, 186, 0.3)",
      color: "#00B0BA"
    },
    {
      title: "Scalable to Your Needs",
      desc: "Whether you're a startup or an enterprise, adjust your API limits, endpoints, and access as your business evolves.",
      icon: user,
      gradient: "rgba(177, 121, 23, 0.3)",
      color: "#B17917"
    },
    {
      title: "Priority Support",
      desc: "Work directly with our experts for implementation, troubleshooting, and optimization to ensure your API runs smoothly.",
      icon: trending,
      gradient: "rgba(255, 255, 255, 0.3)",
      color: "#FFFFFF"
    }
  ];


  return (
   <div className="w-full h-[631px] bg-black flex flex-col justify-center items-center  px-[80px] py-[80px]">
<div
  className="absolute top-[1520px] left-1/2 transform -translate-x-1/2 w-full max-w-[1230px] h-auto opacity-100 flex flex-col gap-[38px] px-4 mt-[-70px]"
>
  {/* Top Heading */}
  <div className="w-full text-center text-white">
    <h2 className="font-[Lora] font-semibold text-[32px] leading-[100%]">
      Who Can Integrate StacklyAI API?
    </h2>
  </div>

  {/* Bottom Cards Section */}
  <div className="w-full flex justify-center">
    <div className="w-full flex flex-wrap justify-center gap-[18px]">
      {boxes.map((box, index) => (
        <motion.div
          key={index}
          className="flex flex-col justify-start items-start rounded-md px-4 py-5 gap-[18px] bg-black border border-gray-800"
          style={{
            width: index === 0 ? 383 : index === 1 ? 356 : 340,
            height: index === 0 ? 186 : 184,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: index * 0.1 },
            },
          }}
          whileHover={{
            y: -5,
            borderColor: box.color,
          }}
        >
          {/* Icon + Title in one line */}
          <div className="flex flex-row items-center gap-2 mb-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{
                filter: [
                  `drop-shadow(0 0 2px ${box.color})`,
                  `drop-shadow(0 0 8px ${box.color})`,
                  `drop-shadow(0 0 4px ${box.color})`,
                ],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              viewport={{ once: true }}
              transition={{
                x: {
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                },
                opacity: { duration: 0.4 },
              }}
            >
              <img
                src={box.icon}
                alt={box.title}
                className="w-[24px] h-[24px] transition-all duration-300 hover:scale-110"
              />
            </motion.div>

            <motion.h3
              className="text-[18px] font-semibold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.3,
              }}
            >
              {box.title}
            </motion.h3>
          </div>

          {/* Description */}
          <motion.p
            className="text-sm text-white leading-[1.4] text-opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.4,
            }}
          >
            {box.desc}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </div>
</div>


{/* SEC2 DIV */}

<div className="w-full px-4 mt-[245px] flex justify-center">
  <div className="w-full max-w-[1280px] h-[257px] flex flex-col items-center justify-center gap-[32px] text-center text-white">

    {/* Top Title */}
    <h2
      className="text-[52px] leading-[100%] font-[400] font-[Lancelot]"
      style={{ fontFamily: 'Lancelot, serif' }}
    >
      Ready to Create Something Great?
    </h2>

    {/* Middle Paragraph */}
    <p className="text-[20px] font-[400] leading-[140%] font-[Poppins] max-w-[1000px]">
      We offer flexible API plans tailored to your needs. <br />
      Let’s build the right setup, just for you!
    </p>

<Link to="/sign-in"> {/* update with your actual route */}
  <div
    className="w-[297px] h-[44px] flex items-center gap-[10px] px-[30px] py-[10px] rounded-[30px] border cursor-pointer"
    style={{
      background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
      borderColor: "#C22CA299",
    }}
  >
    {/* Text */}
    <div className="text-white text-[16px] font-medium font-[Poppins] leading-none">
      LOGIN TO ACCESS API KEY
    </div>

    {/* Icon */}
    <div className="w-[24px] h-[24px]">
      <img
        src={buttonkey}
        alt="icon"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</Link>



  </div>
</div>


</div>

  );
};

export default CustomAPIPlan;