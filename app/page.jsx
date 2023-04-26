"use client"
import React, { useEffect } from "react";
import Nav from "./(components)/Nav";
import Trending from "./(components)/Trending";
import Upcoming from "./(components)/Upcoming";
import Hero from "./(components)/Hero";
import { useStateContext } from "../context/StateContext";
import InlineCard from "./(components)/InlineCard";
import Card from "./(components)/Card";
export default function Home() {
  const {
    search,searchArray
  } = useStateContext();

 
  return (
    <>
      <Nav/>
      { !search ? <>
      <Hero />
      <Trending />
      <Upcoming />
    </>:

    <div className="  absolute top-20 ">
      <div className="  relative px-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 py-4 ">
      {searchArray?.results?.map((item)=>(
       <Card key={item.id} movie={item} />
        ))}

    </div>
    </div>
      }
    </>
  );
}
