import React from "react";
import CartIcon from "./Icons/CartIcon";


const Description = ({ onQuant, onSetOrderedQuant,qun,pack, }) => {
  return (
    <section className="description">
      <p className="pre">Hilwa</p>
      <h1>Evaporated milk</h1>
      <p className="desc">
      Enjoy the best taste with Hilwa evaporated milk. Our commitment to excellence begins with the selection of premium ingredients. We source only the finest quality milk, known for its exceptional richness and flavor. Through a meticulous process of evaporation, we carefully remove water from the milk, concentrating its natural goodness and creating a luxurious texture. The result is an evaporated milk of unparalleled quality, ensuring a delightful experience with every use.

Its smooth and indulgent nature makes it an ideal ingredient for creating luscious desserts such as custards, puddings, and ice creams. It also adds a creamy richness to savory dishes like soups, sauces, and creamy pasta dishes, elevating their taste profiles to new heights.


Hilwa evaporated milk brings a touch of indulgence to everyday moments. Whether you're preparing a comforting bowl of oatmeal, a cup of creamy hot chocolate, or a delightful afternoon coffee, our product adds a luxurious creaminess that elevates your simple pleasures. It transforms ordinary moments into extraordinary ones, making every sip and every bite a delightful experience.

      </p>
      <div className="price">
        <div className="main-tag">
          <p>{qun}</p>
          <p>{pack}</p>
        </div>

      </div>
      
    </section>
  );
};

export default Description;
