"use client";
import React, { useState, useEffect, Suspense } from "react";
import Card from "./Card";
import { useStateContext } from "../../context/StateContext";
import Skeleton from './Skeleton'
import {use} from "react"
import Image from "next/image";
import {BsLink45Deg} from 'react-icons/bs'
import Link from "next/link";

async function getPopular() {
  const res =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}` );
  return res.json();
}

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}


let a = getPopular()

export default  function Main() {
  // const { popular, search } = useStateContext();
  const popular =  use(a)

  // const [mounted, setMounted] = useState(false)
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return <div className='px-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 py-4'>
  //   {[...Array(20).keys()].map(()=>(
  //     <Skeleton/>
  //   ))}

  //    </div>
  // }

  const random = get_random(popular.results);
  return (
    <div className="  relative px-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 pb-4 pt-[450px]">
      <div  className=" -z-10  w-screen absolute top-0 h-screen">

  <Image src={`https://image.tmdb.org/t/p/original${random.backdrop_path}`} fill alt="" priority className="    object-cover -z-10  "/>
      <div className=" opacity-100  bg-gradient-to-b  from-transparent from-30% via-black via-40% to-neutral-900 to-10%  h-screen  w-screen" />
      </div>


      <div className=" px-4 md:px-10 py-2 absolute max-w-[330px] md:max-w-[600px] top-20 md:top-32  ">
        <h1 className=" text-[24px]  md:text-3xl font-bold">{random.title}</h1> 
        <div className="  text-sm flex " >

        <p className="  text-green-600 mr-3"> {random.vote_average} average</p>
        <p>{random.release_date}</p>
        </div>
        <p className=" mt-4  text-[10px] md:text-sm">{random.overview}</p>
       <Link href={`movies/${random.id}`}>
        <button className=" mt-2 bg-white flex items-center rounded-sm px-2 py-1 font-bold text-black"><BsLink45Deg /> Open</button>
       </Link>
      </div>
          {popular.results?.map((item) => (
            <Suspense key={item.id} fallback={<div className=" h-96 animate-pulse rounded bg-white/60 "></div>}>
            <Card key={item.id} movie={item} />
            </Suspense>
          ))}
     
    </div>
  );
};