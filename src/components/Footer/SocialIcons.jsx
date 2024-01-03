import React from "react";

const SocialIcons = () => {
  let Icons = [
    { name: "logo-facebook", link: "https://www.facebook.com/hilwamilkpowder/",color:'blue' },
    { name: "logo-youtube", link: "https://www.youtube.com/@hilwamilk",color:'red' },
  
  ];
  return (
    <div className="text-black">
    
        <a
        key={Icons[0].name}
        href={Icons[0].link} // Set the href attribute to the desired URL
          className="p-2 cursor-pointer inline-flex items-center text-white
        rounded-full bg-[#193589] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#D71313]
        duration-300 "
        >
          <ion-icon name={Icons[0].name}></ion-icon>
        </a>
        <a
        key={Icons[1].name}
        href={Icons[1].link} // Set the href attribute to the desired URL
          className="p-2 cursor-pointer inline-flex items-center text-white
        rounded-full bg-[#D71313] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#D71313]
        duration-300 "
        >
          <ion-icon name={Icons[1].name}></ion-icon>
        </a>
      
    </div>
  );
};

export default SocialIcons;
