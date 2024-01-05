import React from "react";

import ItemsContainer from "./ItemsContainer";
import { Icons } from "./Menus";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    
    <footer className="text-white relative">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-transparent py-7">
        <h1
          className="lg:text-2xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
       
        </h1>
    
      </div>
      <ItemsContainer />


      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-[#FFC436]  pb-8 bg-[#1A5D1A]"
      >
        <a href="https://safaglobal.com/" className="text-[#FFC436] no-underline"> © All Rights Reserved, Hilwa Dairy, Safa Group 2023 </a>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
