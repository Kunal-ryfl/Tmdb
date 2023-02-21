// "use client"

import React from "react";

import Nav from './(components)/Nav';
import Trending from './(components)/Trending';
import Upcoming from './(components)/Upcoming';
import Hero from './(components)/Hero'

export default function Home() {

  return (
    <>

<Trending/>
    <Nav/>
    <Hero/>
   <Upcoming/>
    </>
     )
     
}
