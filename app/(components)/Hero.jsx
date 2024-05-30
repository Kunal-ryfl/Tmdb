"use client";
import React, { useState, useEffect, Suspense } from "react";
import Card from "./Card";
import InlineCard from "./InlineCard";
import { useStateContext } from "../../context/StateContext";
import Skeleton from "./Skeleton";
import { use } from "react";
import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";
import Link from "next/link";
import InSkel from "./InSkel";
import Trending from "./Trending";
import Upcoming from "./Upcoming";

async function getPopular() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}`,
    { cache: "no-store" }
  );
  return res.json();
}

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

let a = getPopular();

export default function Main() {
  // const { popular, search } = useStateContext();
  // const fetch =  await getPopular()
  const popular = use(a);
  //  console.log("p = ",popular)

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <InSkel />;
  }

  const random = get_random(popular.results);
  return (
    <div className="   ">
      <div className="   relative px-3 grid  pt-[400px]">
        <div className=" -z-10  w-screen absolute  top-0 h-screen">
          <Image
            src={`https://image.tmdb.org/t/p/original${random.backdrop_path}`}
            fill
            alt=""
            priority
            className="    object-cover -z-10  "
          />

          <div className=" opacity-100 absolute top-0  bg-gradient-to-b  from-black/50 from-20% via-black via-80% to-neutral-900 to-100%  h-screen  w-screen"></div>
        </div>

        <div className=" px-4 md:px-10 py-2 absolute max-w-[330px] md:max-w-[800px] top-20 md:top-32  ">
          <h1 className=" text-[24px] mb-2  md:text-3xl font-bold">
            {random.title}
          </h1>
          <div className="  font-semibold text-sm flex ">
            <p className="  text-green-600 mr-3">
           
              {Math.round(random.vote_average * 10)}% votes
            </p>
            <p>{random.release_date}</p>
          </div>
          <p className=" my-4 line-clamp-4 text-sm text-gray-300 md:text-base">
            {random.overview}
          </p>
          <Link href={`movies/${random.id}`}>
            <button className="  bg-white flex items-center rounded px-2 py-1 font-bold text-black">
              <BsLink45Deg className="  " /> Open
            </button>
          </Link>
        </div>
        <h2 className=" text-base sm:text-xl py-4 px-2  font-semibold ">
          Popular
        </h2>

        <div className=" overflow-auto whitespace-nowrap ">
          {popular.results?.map((item) => (
            <InlineCard key={item.id} movie={item} />
          ))}
        </div>
      </div>
      <Trending />
      <Upcoming />
    </div>
  );
}
