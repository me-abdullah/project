import React from "react";
// import Hero from "./Hero";
export default function About() {
  return (
    <>
      {/* <Hero /> */}
      <div className="container mx-auto my-5 py-5">
     

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-5">
          <div className="bg-white border border-gray-300 rounded-md  p-4 col-span-4">
            <div>
              <p className="text-2xl font-bold">About Us:</p>
              <p className="mt-4">
                {" "}
                Welcome to Hilwa Milk, a brand of Safa International Company! Based in the United Arab Emirates, we are a leading provider of high-quality dairy products, serving customers in the MENA region and East Africa. With a rich history spanning 25 years, our commitment to excellence has made us a trusted name in the industry.
              </p>
          
              <p className="mt-3">
                <span className="font-bold"> At Hilwa Milk,</span>
               we understand the importance of wholesome and nourishing dairy products for a healthy lifestyle. That's why we source our milk from the pristine lands of New Zealand, renowned for its lush pastures and world-class dairy farming practices. Our dedication to quality starts right from the source, ensuring that you receive the finest milk products that meet the highest standards of purity and taste.
              </p>
              <p className="mt-2">
                <span className="font-bold">  At Hilwa Milk,</span>
               we value our customers and aim to exceed their expectations. Our team of passionate professionals works tirelessly to deliver exceptional products and unparalleled customer service. We are constantly innovating and evolving, driven by a desire to bring you the best dairy products that cater to your evolving tastes and preferences.
              </p>
             
              
              <p className="mt-2">
                <span className="font-bold">  Contact us</span>
                today to learn more about our products and how we can serve your dairy needs. Thank you for choosing Hilwa Milk, Full of nutrition.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}
