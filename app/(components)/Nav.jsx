"use client";
import React,{useState} from "react";
import Link from "next/link";
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
  if(typeof window !== undefined) window.addEventListener("scroll", changeColor);

  const {
    active,
    search,
    submitContact,
    showSearch,
    clickSearch,
  } = useStateContext();
  return (
    <div  className={ color?"  bg-neutral-900 fixed z-50 w-full  top-0 flex flex-col sm:flex-row    justify-between ":" fixed z-50 w-full  top-0 flex flex-col sm:flex-row    justify-between "}>
      <ul className="px-2 w-screen sm:w-auto py-2 flex items-center ">
        
        {/* <li className={!showSearch ? "mx-2  flex items-center" : " hidden"}>
          <button  onFocusCapture={() => clickSearch()} className="">
            <AiOutlineSearch />
          </button>
        </li> */}

        
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
        
      </ul>
    </div>
  );
}
