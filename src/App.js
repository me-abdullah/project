import Footer from "./components/Footer/Footer";
import Header from './components/Navbar/Header'

import Home from "./components/Pages/Home/Home"

import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Card from './components/Card';

import ProductPage from './components/Pages/ProductPage/ProductPage';
import Login from './components/Login/Login';
import Product from "./components/Product/Product";
import Product1 from "./components/Product1/Product";
import Product2 from "./components/Product2/Product";
import About from "./components/Pages/About/About";



export default function App() {
  
  return (
  //   <div>
  //     <Header/>
  //   <div className="h-screen"></div>
  //   <Footer />
  // </div>


  <div>
  <div>
  <BrowserRouter>
  <Header/>

  {/* <Carousal/> */}

<Routes>

         
     <Route path="/" element={<Home/>} />
     <Route path="/productpage" element={<ProductPage/>} />
     <Route path="/productpage1" element={<Product/>} />
     <Route path="/productpage2" element={<Product1/>} />
     <Route path="/productpage3" element={<Product2/>} />


     <Route path="/Contactus" element={<Login/>} />
     <Route path="/Aboutus" element={<About/>} />
     </Routes>

 <Card></Card>
 {/* <CardHover title="hilwa" detail="hilwa"/> */}
     <Footer />
    
 </BrowserRouter>
 </div>
 </div>
  )
}