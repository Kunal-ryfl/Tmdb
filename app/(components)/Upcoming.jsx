import React from 'react'
import InlineCard from './InlineCard';
// import { useStateContext } from "../../context/StateContext";

async function getUp(){
     const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API}`,{ next:{revalidate:180}});
     return res.json();
}

// const Upcoming = () => {
  export default async function Upcoming(){
    // const {upcoming} = useStateContext();
    const res=  await getUp();
    return (
      <div>
      <h2 className='  text-2xl sm:text-3xl py-4 px-2 font-bold '> Upcomming</h2>
      <div className=' overflow-auto whitespace-nowrap'>
             {res.results?.map((item)=>(
              < InlineCard key={item.id} movie={item}/>
              ))
          }

      </div>
          </div>
    )
  }

