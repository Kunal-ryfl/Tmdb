"use client"
import { use, useEffect, useState } from 'react';
import Card from './(components)/Card';
import React, {
  createContext,
  useContext,
} from "react";

import { useStateContext } from "../context/StateContext";
import Nav from './(components)/Nav';
import Trending from './(components)/Trending';
import Upcoming from './(components)/Upcoming';

export default function Home() {
  const {popular,setPopular,search} = useStateContext();
  
  return (
    <>
 
<Trending/>

    <Nav/>
   <div className="home">
    { 
    (search && popular.length ===0 )?<>
    <p>Not found!</p></> :
    <>
    {popular?.map((item)=>(
         <Card key={item.id} movie={item}/>
    ))
    }
    </>
    }
   </div>
   <Upcoming/>
    </>
     )
     
}
