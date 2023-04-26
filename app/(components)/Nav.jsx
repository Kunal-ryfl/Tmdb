"use client";
import React,{useState,useEffect} from "react";
import { useStateContext } from "../../context/StateContext";
import { AiOutlineSearch } from "react-icons/ai";

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
    <div  className={ color?"  bg-neutral-900 fixed z-50 w-full  top-0 flex flex-col sm:flex-row    justify-between ":" fixed z-50 w-full  top-0 flex flex-col sm:flex-row    justify-between "}>  
          <>
            <form onChange={submitContact}>
              <input
                autoComplete="off"
                className=" ml-2 w-auto pl-1 py-2  bg-transparent border-[1px] border-white backdrop-blur-md my-2 rounded"
                id="name"
                placeholder="search movies"
              />
            </form>
          </>
        
      
    </div>
  );
}
