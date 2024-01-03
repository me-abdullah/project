


import FlippingCard from '../../Cards/FlippingCard'
import "./Home.css"
import Hero1 from '../../Hero1/Hero1';

import Customer from '../../Customers/Customer';
import HeroSection from '../../HeroSection';
// import Product from '../Product/Components/Product';
import RevealOnScroll from '../../RevealOn/Reveal';
import Gallery from '../../Animation/Gallery';


const cardsData = [
       
       
  {
    id: 3,
    title: 'Milk Powder',
    detail: 'Experience pure Nutrition with Hilwa, our  milk powder crafted from the lush farms of New Zealand. Taste the richness of our carefully sourced ingredients, as they blend harmoniously to create a truly captivating flavour.    ',
    image: '/assets/Flipping Card 1.webp', // Replace with your actual image URL
    path:'/productpage3'
  },
  {
      id: 2,
      title: 'Condensed Milk',
      detail: 'Experience the magic of Hilwa condensed milk as it adds a luscious, velvety finish to your culinary creations. From creamy pies to delicious beverages, our brand elevates every dish with its smooth texture and irresistible sweetness.    ',
      image: '/assets/Flipping Card 2.webp', // Replace with your actual image URL
      path:'/productpage2'
    },
  {
      id: 1,
      title: 'Evaporated Milk',
      detail: 'Experience the richness of Hilwa evaporated milk, lovingly made from the finest dairy in New Zealand. Unlock a world of culinary possibilities as our brand brings a creamy, dreamy element to your favorite dishes and beverages.',
      image: '/assets/flipping card 3.webp', // Replace with your actual image URL
      path:'/productpage1'
    },

  // Add more card objects as needed
];
const data={
    name:"Sheela Stor",
  }
export default function App() {
  
  return (
  //   <div>
  //     <Header/>
  //   <div className="h-screen"></div>
  //   <Footer />
  // </div>


  <div>
  <div>
{/* 
    <Hero1></Hero1>  */}
   

    
    {/* <div className="  w-auto flex justify-center flex-wrap items-center space-y-[-200px] min-h-[1500px] sm:min-h-screen w-auto bg-transparent mx-auto slide-in space-y-[60px]" > */}

    <div className="min-h-screen flex flex-wrap justify-center items-center mx-auto bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500" >

    <Gallery/>
    </div>

    <div className="  h-auto flex flex-wrap justify-center items-center mx-auto" style={{ backgroundColor: 'green' }}>

     <div className="container h-[100vh] flex flex-wrap justify-center items-center" >
       <div className=' '> <FlippingCard
          key={cardsData[0].id}
          title={cardsData[0].title}
          detail={cardsData[0].detail}
          image={cardsData[0].image}
          path={cardsData[0].path}
        /></div>
     
     <FlippingCard
          key={cardsData[1].id}
          title={cardsData[1].title}
          detail={cardsData[1].detail}
          image={cardsData[1].image}
          path={cardsData[1].path}
        />
         <FlippingCard
          key={cardsData[2].id}
          title={cardsData[2].title}
          detail={cardsData[2].detail}
          image={cardsData[2].image}
          path={cardsData[2].path}
        />
</div></div>
    {/* </div> */}
<RevealOnScroll>
    <HeroSection myData={data}/></RevealOnScroll>
    {/* <Customer/> */}
{/* <Product/> */}
 </div>
 </div>
  )
}