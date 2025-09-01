// //main.jsx
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import UserContextProvider from "./context/UserContext.jsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//     <UserContextProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </UserContextProvider>
// );

//main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);