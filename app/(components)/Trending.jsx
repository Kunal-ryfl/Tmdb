import React from "react";
import InlineCard from "./InlineCard";
import {use} from 'react'
async function getTrending() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API}`,
    { next: { revalidate: 180 } }
  );
  return res.json();
}

let a = getTrending()
export default function Trending() {
  const data = use(a);
  // const {trending} = useStateContext();
  return (
    <div className=" relative  overflow-hidden px-2">
      <h2 className=" text-base sm:text-xl py-4 px-2 font-semibold ">Trending</h2>
      <div className=" overflow-auto whitespace-nowrap ">
        {data.results?.map((item) => (
          <InlineCard key={item.id} movie={item}  search={true}/>
        ))}
      </div>
    </div>
  );
}