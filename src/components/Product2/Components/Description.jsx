import React from "react";
import CartIcon from "./Icons/CartIcon";


const Description = ({ onQuant, onSetOrderedQuant,qun,pack, }) => {
  return (
    <section className="description">
      <p className="pre">Hilwa</p>
      <h1>Milk powder </h1>
      <p className="desc">
      Hilwa milk powder ,where quality meets purity. our milk powder product is crafted with utmost care and devotion. Renowned for its pristine environment, rich pastures, and stringent quality standards.From the best farms in New Zealand known for its high quality cows.

Our milk powder undergoes comprehensive testing and adheres to strict regulations to ensure it meets the highest standards of purity and safety. From farm to factory, every step of the production process is meticulously monitored to maintain the integrity and quality of our product.

Our milk powder is a powerhouse of essential nutrients vital for a balanced health. It is rich in high-quality proteins, offering all nine essential amino acids necessary for growth and development. Additionally, it provides an abundant source of calcium, phosphorus, and vitamins such as vitamin D and vitamin B12, promoting strong bones, teeth, and overall well-being. 


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
