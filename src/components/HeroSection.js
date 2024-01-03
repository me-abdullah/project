import React from 'react'

import { faBan } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faCheese,faCheck } from '@fortawesome/free-solid-svg-icons';

const HeroSection= () => {
  return (
    <section className="relative  min-h-screen">
    <div className="absolute inset-0 bg-yellow-300"></div>
    <div className="relative container mx-auto py-12 px-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10  p-4 shadow-md rounded-lg"style={{  backgroundColor: 'transparent', boxShadow: 'none', border: 'none'}}>
            <img
              src="/assets/bann.webp"
              alt="Product Image"
              className="max-w-full h-auto mx-auto md:ml-0 md:mr-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="mx-auto mt-2">
  <ul className="space-y-1 ml-3">
    <li className="flex items-center">
      <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-4" />
      <h1 className="ml-4 font-bold">Pure and Natural:</h1>

    </li>
    <p className="ml-8">
      We believe in the power of nature. That's why our milk powder is made from carefully selected, high-quality cow's milk sourced from trusted dairy farms in New Zealand. We ensure that our milk is free from additives, preservatives, and artificial flavors, preserving its natural goodness.
    </p>
    <li className="flex items-center">
      <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-4" />
      <h1 className="ml-4 font-bold">Rich in Nutrients:</h1>

    </li>
    <p className="ml-8">
      Hilwa Milk powder is packed with essential nutrients to support your overall well-being. It is an excellent source of calcium, which promotes strong bones and teeth. Our milk powder is also fortified with vitamins such as vitamin D, essential for calcium absorption, and B vitamins for energy and vitality.
    </p>
    <li className="flex items-center">
      <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-4" />
      <h1 className="ml-4 font-bold">Convenience at Your Fingertips:</h1>

    </li>
    <p className="ml-8">
      Hilwa Milk powder offers the ultimate convenience for your busy lifestyle. Our powdered milk is easy to store and has a longer shelf life, making it a practical choice for households and travelers alike. Simply add water, and you have a refreshing glass of milk ready in no time.
    </p>
    <li className="flex items-center">
      <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-4" />
      <h1 className="ml-4 font-bold">Versatile and Delicious:</h1>

    </li>
    <p className="ml-8">
      Enjoy the versatility of Hilwa Milk powder in a variety of culinary creations. From baking mouthwatering cakes and cookies to preparing creamy hot beverages and refreshing smoothies, our milk powder adds a rich and creamy texture, enhancing the flavors of your favorite recipes.
    </p>
  </ul>
</div>


        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection