import React from "react";
import InlineCard from "./InlineCard";

async function getTrending() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API}`,
    { next: { revalidate: 180 } }
  );
  return res.json();
}

export default async function Trending() {
  const data = await getTrending();
  // const {trending} = useStateContext();
  return (
    <div>
      <h2 className=" text-2xl sm:text-3xl py-4 px-2 font-bold ">Trending</h2>
      <div className=" overflow-auto whitespace-nowrap ">
        {data.results?.map((item) => (
          <InlineCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
}
