// src/components/SlideInView.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SlideInView({ children, delay = 0, onInView }){
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  if (onInView && inView) {
    onInView();
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}; 

// export default SlideInView;
