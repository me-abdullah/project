import React from "react";
import CartIcon from "./Icons/CartIcon";




const Description = ({ onQuant, onSetOrderedQuant,qun,pack, }) => {
  return (
    <section className="description">
      <p className="pre">Hilwa</p>
      <h1>Condensed milk</h1>
      <p className="desc">
      Introducing Hilwa condensed milk. where sweetness is elevated to extraordinary levels. Our condensed milk product embodies the essence of indulgence, captivating taste buds and creating memorable culinary experiences.

We take pride in sourcing only the finest ingredients to create our condensed milk. Starting with fresh, high-quality milk, we carefully transform it through a meticulous process that concentrates its natural sweetness and creates a velvety texture. Our commitment to quality shines through every step, ensuring a product that surpasses your expectations in both taste and consistency.

At the heart of our condensed milk is the belief that food has the power to create lasting memories. It's the sweetness that lingers on your palate, the comforting aroma that fills the kitchen, and the shared joy of savoring something truly exceptional. Whether you're baking for your loved ones, hosting a gathering, or simply indulging in a personal moment of self-care, our condensed milk transforms ordinary moments into extraordinary ones.


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
