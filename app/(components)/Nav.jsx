"use client";
import React,{useState,useEffect} from "react";
import { useStateContext } from "../../context/StateContext";
import { AiOutlineSearch } from "react-icons/ai";
import {AiOutlineClose } from "react-icons/ai";

import {RiMovie2Line} from 'react-icons/ri'
export default function Nav() {

  const [color, setColor] = useState(false); 
  const changeColor = () => {
    if (window.scrollY >= 30) {
      setColor(true);
    } else {
      setColor(false);
    } 
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // window is available
      window.addEventListener("scroll", changeColor);
    }
  }, []);

  const {
    active,
    search,
    submitContact,
    showSearch,
    clickSearch,
  } = useStateContext();
  return (
    <div  className={ color?"  py-2 px-4 bg-neutral-900 fixed z-50 w-full  top-0 flex  sm:flex-row items-center   justify-between ":" py-2 px-4 fixed justify-between items-center   z-50 w-full  top-0 flex  sm:flex-row    "}>  
          
          <RiMovie2Line className="  text-2xl  md:text-4xl fill-red-700"/>
          
             {
              !showSearch?
               <AiOutlineSearch onClick={clickSearch} className=" z-10 text-xl cursor-pointer right-6 bottom-[18px] absolute"/>
              :<AiOutlineClose onClick={clickSearch} className=" z-10 text-xl cursor-pointer right-6 bottom-[18px] absolute"/>
             }
          
      

           <form className={showSearch?"   transition duration-5 ease-in-out  relative ":"  opacity-0 transition duration-5 ease-in-out  relative "} onChange={submitContact}>
              <input
                autoComplete="off"
                className="    pl-1 py-2 text-white w-40  text-sm md:w-60  rounded-sm    bg-transparent/5   border-[1px] border-white backdrop-blur-md  "
                id="name"
                placeholder="search movies"
                />
           
            </form>
                 
        
      
    </div>
  );
}
