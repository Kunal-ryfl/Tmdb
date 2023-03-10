import React from 'react'
import InlineCard from './InlineCard';
// import { useStateContext } from "../../context/StateContext";

import { use } from 'react';

async function getUp(){
     const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API}`,{ next:{revalidate:180}});
     return res.json();
}

let a = getUp()
// const Upcoming = () => {
  export default function Upcoming(){
    // const {upcoming} = useStateContext();
    const res= use(a);
    return (
      <div>
      <h2 className='  text-2xl sm:text-3xl py-3 px-2 '> Upcomming</h2>
      <div className=' overflow-auto whitespace-nowrap'>
             {res.results?.map((item)=>(
              < InlineCard key={item.id} movie={item}/>
              ))
          }

      </div>
          </div>
    )
  }

