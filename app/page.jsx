"use client"
import Card from './(components)/Card';
import React, {
} from "react";

import { useStateContext } from "../context/StateContext";
import Nav from './(components)/Nav';
import Trending from './(components)/Trending';
import Upcoming from './(components)/Upcoming';

export default function Home() {
  const {popular,search} = useStateContext();
  // console.log("pop = ",popular)
  return (
    <>

<Trending/>


    <Nav/>

  
   <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 py-4">
    { 
    (search && popular.length ===0 )?<>
    <p className=' text-red-600 px-2'>Not found!</p></> :
    <>
    {popular?.map((item)=>( 
      <Card  key={item.id} movie={item}/>
           ))
        }
    </>
    }
   </div>
  
   <Upcoming/>
    </>
     )
     
}
