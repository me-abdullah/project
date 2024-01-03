import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Header = () => {
    let Links1 =[
      {name:"Home",link:"/"},
      {name:"Our Product",link:"/productpage"},
      {name:"About us",link:"/Aboutus"},
    
      {name:"Contact us",link:"/contactus"},
    ];
    let [open,setOpen]=useState(false);
    let scrollRef = useRef();

  return (
    <div className='shadow-md sticky w-full top-0 left-0' style={{ zIndex: 1000 }}>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
   <div className="flex items-center">
   <Link to={Links1[0].link} className='text-gray-800 hover:text-gray-400 duration-500  no-underline ' onClick={()=>{
                scrollToTop();
                setOpen(!open)
               
              }}>
  <span className="text-3xl text-indigo-600 mr-1 pt-2">
    <img
      src="/assets/logo.webp"
      alt="Logo"
      className="h-[70px] w-auto object-contain"
    />
  </span></Link>
 
</div>

   
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}  style={{zIndex:2 }} >
        {
          Links1.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 list-none'>
              <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500  no-underline ' onClick={()=>{
                scrollToTop();
                setOpen(!open)
                if(link.link !== "/"){
                  document.body.style.overflow = "auto";
                }
              }}>{link.name}</Link>
            </li>
          ))
        }    
      </ul>
      </div>
    </div>
  )

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export default Header