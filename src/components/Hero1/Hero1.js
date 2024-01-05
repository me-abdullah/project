import React from 'react';
import { useState, useEffect } from 'react';

function Hero1() {
    const [headingText, setHeadingText] = useState('');
    const [paragraphText, setParagraphText] = useState('');
    const targetHeading = "The Best Alternative to Cows Milk";
    const targetParagraph = "Organic milk as healthy as cow’s milk is the new idea of faster and healthy lifestyle.";
  
    useEffect(() => {
      let headingIndex = 0;
      let paragraphIndex = 0;
  
      const typeHeading = setInterval(() => {
        if (headingIndex < targetHeading.length) {
          setHeadingText(targetHeading.substring(0, headingIndex + 1));
          headingIndex++;
        } else {
          clearInterval(typeHeading);
        }
      }, 50);
  
      const typeParagraph = setInterval(() => {
        if (paragraphIndex < targetParagraph.length) {
          setParagraphText(targetParagraph.substring(0, paragraphIndex + 1));
          paragraphIndex++;
        } else {
          clearInterval(typeParagraph);
        }
      }, 50);
  
      return () => {
        clearInterval(typeHeading);
        clearInterval(typeParagraph);
      };
    }, []);
  return (
    <section class="bg-[#8BE8E5]text-black flex mx-auto ">
    <div class="  grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12" >
        <div class="mr-auto place-self-center  col-span-12 lg:col-span-6">
        <h1 class="    max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-yellow md:text-5xl text-red xl:text-6xl  custom-font " id="heading">
  {headingText}
</h1>

      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-yellow" id="paragraph">{paragraphText}</p>

            <a href="/" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#2e7d32] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               See Products
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          
        </div>
        <div class=" hidden  lg:mt-0 lg:col-span-6 lg:flex">
            <img src="/assets/pack.webp" alt="mockup"/>
        </div>                
    </div>
</section>
  );
}

export default Hero1;