import Item from "./Item";
import { PRODUCTS,COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
  <div className="absolute inset-0  h-full w-full bg-opacity-75 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.imgur.com/JktprCi.jpg")', opacity: 0.5, zIndex: -1 }}></div>
  <Item Links={PRODUCTS} title="PRODUCTS" className="bg-white p-4 rounded-lg shadow-md" />

  <Item Links={COMPANY} title="About Us" className="bg-white p-4 rounded-lg shadow-md" />
  <Item Links={SUPPORT} title="Address" className="bg-white p-4 rounded-lg shadow-md" />
</div>

  );
};

export default ItemsContainer;

