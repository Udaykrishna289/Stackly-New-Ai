import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/api/apibg.png";

const integrationData = [
  {
    title: "Interior Design Platforms",
    description: "Let your users transform their rooms instantly within your app using AI rendering.",
  },
  {
    title: "Architectural SaaS Tools",
    description: "Integrate real-time visualization of floor plans, facades, and elevations.",
  },
  {
    title: "Home Builder Apps",
    description: "Let buyers preview customized homes with different themes and materials.",
  },
  {
    title: "E-Commerce & Furniture Brands",
    description: "Display furniture in realistic settings using AI-generated room mockups.",
  },
  {
    title: "Real Estate Marketplaces",
    description: "Offer virtual staging with one click, enhancing property listings.",
  },
  {
    title: "Home Renovation Platforms",
    description: "Enable users to preview renovation ideas directly on your website.",
  },
];

const StacklyAPIIntegration = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
  <div
  className="relative w-full
             min-[441px]:max-[768px]:h-[684px] mt- [-28] "
>


      {/* Light glow (only on <441px) */}
      {typeof window !== 'undefined' && window.innerWidth <= 440 && (
       <div
  className="w-[120px] h-[120px] rounded-full absolute top-0 left-1/2 translate-x-[-50%] blur-[80px] z-0
             min-[441px]:max-[768px]:h-[684px] bg-black"
  
/>

      )}
      
<div
  className="w-full max-w-[1440px] py-16 px-4 md:px-8 lg:px-16 mx-auto flex flex-col items-center 
             justify-center gap-[52px]

             max-[440px]:w-[440px] max-[440px]:pt-[40px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px] max-[440px]:gap-[32px] max-[440px]:bg-[#021618]

             min-[441px]:max-[768px]:w-[768px] min-[441px]:max-[768px]:h-[684px] min-[441px]:max-[768px]:pt-[40px] min-[441px]:max-[768px]:pr-[40px] 
             min-[441px]:max-[768px]:pb-[60px] min-[441px]:max-[768px]:pl-[40px] min-[441px]:max-[768px]:gap-[32px] 
             min-[441px]:max-[768px]:opacity-100 min-[441px]:max-[768px]:mt-0 min-[441px]:max-[768px]:justify-start"
 style={{
    ...(typeof window !== 'undefined' && window.innerWidth > 440 && {
      height: "881px",
      opacity: 1,
    }),
  }}
>

        {/* Heading */}
  <motion.div
  className="w-[1280px] h-[125px] flex flex-col items-center justify-start gap-[16px] opacity-100
             max-[440px]:w-[400px] max-[440px]:h-auto max-[440px]:gap-[12px]
             min-[441px]:max-[768px]:w-[688px] min-[441px]:max-[768px]:h-[112px] min-[441px]:max-[768px]:gap-[32px] min-[441px]:max-[768px]:opacity-100"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>


    <h2
  className="w-[1280px] h-[41px] text-[32px] font-normal leading-[100%] tracking-[0] text-center text-white whitespace-nowrap"
  style={{ fontFamily: "Lora" }}
>
  Who Can Integrate StacklyAI API?
</h2>

<motion.p
  className="w-[1280px] h-[68px] text-[24px] font-normal leading-[140%] tracking-[0] text-center text-white opacity-100 whitespace-normal"
  style={{ fontFamily: "Poppins" }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  Our API is designed for platforms and businesses that want to bring visual intelligence into their own systems.
</motion.p>


        </motion.div>

      {/* Boxes */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[1279px] gap-5 
             max-[440px]:grid-cols-2 max-[440px]:w-[400px] max-[440px]:gap-[21px] max-[440px]:py-1 
             min-[441px]:max-[768px]:hidden" // Hides the whole grid in tablet
  style={{
    height: "620px",
    opacity: 1,
  }}
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }}
>
  {integrationData.map((item, index) => (
<motion.div
  key={index}
  className="relative w-full max-w-[390px] h-[300px] p-12 bg-black flex flex-col justify-center items-start gap-5
             shadow-[4px_4px_12px_0px_#007B8229] rounded-[40px] text-left
             max-[440px]:w-[194px] max-[440px]:h-[153px] 
             max-[440px]:rounded-[22.28px] max-[440px]:p-4 max-[440px]:gap-3"
  style={{
    backdropFilter: 'blur(84px)',
    boxShadow: `
      4px 4px 12px 0px #007B8229,
      inset 2px 2px 16px 0px #FFFFFF14
    `,
    overflow: 'hidden' // Add this line to clip the glowing effects
  }}
  variants={{
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }}
  transition={{ type: "spring", stiffness: 100 }}
  whileHover={{
    y: -5,
    boxShadow: '0 10px 25px rgba(0, 123, 130, 0.3)',
    transition: { duration: 0.2 },
  }}
  onHoverStart={() => setHoveredIndex(index)}
  onHoverEnd={() => setHoveredIndex(null)}
>
  {/* 🔲 Gradient Border */}
  <motion.div 
    className="absolute inset-0 rounded-[40px] p-[2px] pointer-events-none
               max-[440px]:rounded-[22.28px] 
               min-[441px]:max-[768px]:hidden"
    style={{
      background: 'linear-gradient(180deg, #8A38F5 0%, #FFFFFF 50%, #8A38F5 100%)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
    }}
    animate={{
      opacity: hoveredIndex === index ? 0.8 : 0.6,
      transition: { duration: 0.3 },
    }}
  />

{/* 🔵 Glowing Div 1 – Top Right (moves Left to Right) */}
<motion.div
  className="absolute w-[134px] h-[134px] rounded-full pointer-events-none"
  style={{
    top: '0px',                 
    right: '0px',                
    background: 'rgba(194, 44, 162, 0.5)',
    filter: 'blur(100px)',
    zIndex: 0,
    willChange: 'transform',
  }}
  animate={{
    x: hoveredIndex === index ? -20 : 0,   // Move left on hover
    opacity: hoveredIndex === index ? 1 : 0.8,
    transition: { duration: 0.5 },
  }}
/>

{/* 🔵 Glowing Div 2 – Bottom Left (moves Right to Left) */}
<motion.div
  className="absolute w-[134px] h-[134px] rounded-full pointer-events-none"
  style={{
    bottom: '0px',              
    left: '0px',                 
    background: '#C22CA24D',
    filter: 'blur(100px)',
    zIndex: 0,
    willChange: 'transform',
  }}
  animate={{
    x: hoveredIndex === index ? 20 : 0,   // Move right on hover
    opacity: hoveredIndex === index ? 1 : 0.8,
    transition: { duration: 0.5 },
  }}
/>

      <motion.h3
        className="w-full text-[28px] sm:text-[28px] font-bold text-[#2a2a2a] leading-tight
                   max-[440px]:text-[14px] max-[440px]:font-[700]"
        style={{ 
          fontFamily: "Inter",
          fontStyle: "normal",
          letterSpacing: "0%",
        }}
        animate={{
          color: hoveredIndex === index ? '#8A38F5' : '#FFFFFF',
          transition: { duration: 0.2 },
        }}
      >
        {item.title}
      </motion.h3>

      <motion.p
        className="w-full text-[12px] sm:text-[18px] text-[#FFFFFF] sm:text-[#FFFFFF] leading-snug
                   max-[440px]:text-[12px] max-[440px]:leading-[140%]"
        style={{ 
          fontFamily: "Inter",
          fontStyle: "normal",
          letterSpacing: "0%",
        }}
        animate={{
          x: hoveredIndex === index ? 5 : 0,
          transition: { type: 'spring', stiffness: 300 },
        }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  ))}
</motion.div>

{/* Boxes – Visible only on tablet (441px to 768px) */}
<motion.div
  className="grid grid-cols-2 w-full max-w-[688px] gap-4 
             min-[441px]:max-[768px]:grid 
             max-[440px]:hidden min-[769px]:hidden" // show only on tablet
  style={{
    height: "400px",
    opacity: 1,
  }}
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }}
>
  {integrationData.map((item, index) => (
    <motion.div
      key={index}
      className="relative w-full h-[150px] p-4 bg-white flex flex-col justify-center items-start gap-3
                 shadow-[4px_4px_12px_0px_#007B8229] rounded-[12px] text-left"
      style={{
        backdropFilter: 'blur(84px)',
        boxShadow: `
          4px 4px 12px 0px #007B8229,
          inset 2px 2px 16px 0px #FFFFFF14
        `,
      }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{
        y: -3,
        boxShadow: '0 8px 20px rgba(0, 123, 130, 0.3)',
        transition: { duration: 0.2 },
      }}
    >
      {/* Gradient Border */}
      <motion.div 
        className="absolute inset-0 rounded-[12px] p-[1.5px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #00B0BA 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        animate={{
          opacity: hoveredIndex === index ? 0.8 : 0.6,
          transition: { duration: 0.3 },
        }}
      />

      <motion.h3
        className="text-[14px] font-[600] leading-tight text-[#2a2a2a]"
        style={{ fontFamily: "Inter" }}
        animate={{
          color: hoveredIndex === index ? '#00B0BA' : '#2a2a2a',
          transition: { duration: 0.2 },
        }}
      >
        {item.title}
      </motion.h3>

      <motion.p
        className="text-[12px] leading-snug text-[#707070]"
        style={{ fontFamily: "Inter" }}
        animate={{
          x: hoveredIndex === index ? 5 : 0,
          transition: { type: 'spring', stiffness: 300 },
        }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  ))}
</motion.div>

      </div>
    </div>
  );
};

export default StacklyAPIIntegration;