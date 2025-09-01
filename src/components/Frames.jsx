// Frames.jsx
import React from "react";

export const Frame1 = ({ visible }) => (
  <img
    src="/home/sec5/frame1.png"
    alt="frame1"
    className={`absolute left-0 top-[370px] rounded-sm transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{ zIndex: 8 }}
  />
);

export const Frame2 = ({ visible }) => (
  <img
    src="/home/sec5/frame2.png"
    alt="frame2"
    className={`absolute left-0 bottom-5 rounded-sm transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{ zIndex: 7 }}
  />
);

export const Frame3 = ({ visible }) => (
  <img
    src="/home/sec5/frame3.png"
    alt="frame3"
    className={`absolute right-0 top-[400px] rounded-sm transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{ zIndex: 6 }}
  />
);

export const Frame4 = ({ visible }) => (
  <img
    src="/home/sec5/frame4.png"
    alt="frame4"
    className={`absolute left-20 top-[600px] rounded-sm transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{ zIndex: 5 }}
  />
);

export const Frame5 = ({ visible }) => (
  <img
    src="/home/sec5/frame5.png"
    alt="frame5"
    className={`absolute left-[50%] bottom-0 rounded-sm transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{ zIndex: 4 }}
  />
);

export const Frame6 = ({ visible }) => (
  <img
    src="/home/sec5/frame6.png"
    alt="frame6"
    className={`absolute left-[50%] bottom-[30%] rounded-sm transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{ zIndex: 3 }}
  />
);

export const Frame7 = ({ visible }) => (
  <img
    src="/home/sec5/frame7.png"
    alt="frame7"
    className={`absolute bottom-0 rounded-sm transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{ zIndex: 2 }}
  />
);

export const Frame8 = ({ visible }) => (
  <img
    src="/home/sec5/frame8.png"
    alt="frame8"
    className={`absolute right-[40%] rounded-sm transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={{ zIndex: 1 }}
  />
);
