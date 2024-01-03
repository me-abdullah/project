import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h2 className="mb-1 font-semibold  text-[#1A5D1A]">{title}</h2>
      {Links.map((link) => (
        <li key={link.name} className="list-none">
          <a
            className="text-white hover:text-[#BB2525] duration-300
          text-xl cursor-pointer leading-6 no-underline  text-bold" 
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
