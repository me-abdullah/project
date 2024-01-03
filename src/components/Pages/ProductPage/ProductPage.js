





// import Product from '../../Product/Product';
import FlippingCard from '../../Cards/FlippingCard';
// import Hero from '../../Hero/Hero';



export default function ProductPage() {
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
          name:"Sheela Store",
        }
  return (
    <div className="mx-auto">
<div className="flex relative justify-center flex-wrap items-center h-auto bg-transparent py-5  space-x-4 space-y-4 slide-in" >
    
    <div className="absolute inset-0  h-auto w-full bg-opacity-75 bg-cover bg-center " style={{ opacity: 0.5, zIndex: -3}}></div>
  
        {cardsData.map((card) => (
          <FlippingCard
            key={card.id}
            title={card.title}
            detail={card.detail}
            image={card.image}
            path={card.path}
          />
        ))}
        
        <div className="container mx-auto">
      {/* <Hero/> */}
      </div>
      
      </div>
     
      
      
      </div>

  )
};