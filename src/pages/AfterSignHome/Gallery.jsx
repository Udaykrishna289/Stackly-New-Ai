import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryHover({
  sec5BlockImg,
  sec5Frame1,
  sec5Frame2,
  sec5Frame3,
  sec5Frame4,
  sec5Frame5,
  sec5Frame6,
  sec5Frame7,
  sec5Frame8,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const frameSize = 350;

  const frames = [
    { src: sec5Frame1, className: "left-[8%] top-[8%]", delay: 0.1 },
    { src: sec5Frame2, className: "top-[12%] left-[35%]", delay: 0.3 },
    { src: sec5Frame3, className: "top-[8%] right-[8%]", delay: 0.5 },
    { src: sec5Frame4, className: "bottom-[25%] left-[18%]", delay: 0.7 },
    { src: sec5Frame5, className: "bottom-[30%] right-[30%]", delay: 0.9 },
    { src: sec5Frame6, className: "top-[60%] left-[15%]", delay: 1.1 },
    { src: sec5Frame7, className: "top-[55%] right-[15%]", delay: 1.3 },
    { src: sec5Frame8, className: "bottom-[15%] right-[15%]", delay: 1.5 },
  ];

  // Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5 },
    },
  };

  // Frame animation variants
  const frameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom.delay,
        duration: 0.6,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gray-900 bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/home/sec5/banner.jpg')" }}
    >
      <div className="w-full min-h-screen flex flex-col items-center pt-[70px] pb-[200px] px-4">
        {/* Animated Title */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
            >
              <motion.h1
                className="text-5xl font-semibold leading-tight text-white mb-4"
                variants={textVariants}
              >
                DESIGN YOUR{" "}
                <motion.span className="text-[#00d1dd]" variants={textVariants}>
                  FUTURE HOME
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl font-medium text-white max-w-3xl mx-auto leading-relaxed"
                variants={textVariants}
              >
                Bring your dream home to life! Explore innovative designs,
                customize every detail,
                <br />
                and create a space that reflects your style and vision
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Container */}
        <div className="relative w-full max-w-7xl mx-auto h-[800px] mt-8 px-8">
          {/* Center image */}
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              >
                <motion.img
                  src={sec5BlockImg}
                  alt="gallery center"
                  className="object-contain rounded-lg shadow-xl"
                  style={{
                    width: `${frameSize}px`,
                    height: `${frameSize}px`,
                    zIndex: frames.length + 5,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated Frames */}
          <div className="relative w-full h-full ">
            <AnimatePresence>
              {isVisible &&
                frames.map((frame, index) => (
                  <motion.img
                    key={index}
                    src={frame.src}
                    alt={`frame${index + 1}`}
                    className={`absolute object-contain rounded-lg shadow-lg ${frame.className}`}
                    style={{
                      width: `${frameSize}px`,
                      height: `${frameSize}px`,
                      zIndex: index + 1,
                    }}
                    custom={{ delay: frame.delay }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={frameVariants}
                    whileHover={{
                      scale: 1.08,
                      zIndex: frames.length + 10,
                      transition: { duration: 0.3 },
                    }}
                  />
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
