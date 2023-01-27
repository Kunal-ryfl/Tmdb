"use client"
import { use, useEffect, useState } from 'react';
import Card from './(components)/Card';
import React, {
  createContext,
  useContext,
} from "react";

import { useStateContext } from "../context/StateContext";
import Nav from './(components)/Nav';

export default function Home() {
  const {popular,setPopular} = useStateContext();
  
  return (
    <>
    <Nav/>
   <div className="home">
    { popular?.map((item)=>(
         <Card key={item.id} movie={item}/>
    ))
    }
   </div>
    </>
     )
     
}
