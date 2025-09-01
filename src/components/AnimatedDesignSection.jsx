import { useEffect, useState, useRef } from "react";

export const useAnimation = () => {
  const sectionRef = useRef(null);
  const [animations, setAnimations] = useState({
    leftVisible: false,
    centerVisible: false,
    rightVisible: false,
  });

  useEffect(() => {
    console.log("Setting up IntersectionObserver");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("IntersectionObserver entry:", entry.isIntersecting);
          if (entry.isIntersecting) {
            setTimeout(() => {
              console.log("leftVisible true");
              setAnimations((prev) => ({ ...prev, leftVisible: true }));
            }, 200);
            setTimeout(() => {
              console.log("centerVisible true");
              setAnimations((prev) => ({ ...prev, centerVisible: true }));
            }, 600);
            setTimeout(() => {
              console.log("rightVisible true");
              setAnimations((prev) => ({ ...prev, rightVisible: true }));
            }, 1000);
          } else {
            console.log("Resetting animations");
            setAnimations({
              leftVisible: false,
              centerVisible: false,
              rightVisible: false,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      console.log("Observer attached to", sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { sectionRef, animations };
};
