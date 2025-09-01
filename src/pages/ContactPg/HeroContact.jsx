import React from "react";
import { motion } from "framer-motion";
import ContactBanner from "./ContactBanner";
import ContactForm1 from "./ContactForm1";
import Profile from "../Profile/Profile";
import Faq from "./ContactFaq";

export default function HeroContact() {
  return (
    <div>
      
      {/* <ContactBanner/> */}

      <ContactForm1/>
      <Faq/>

    </div>
  )
}
