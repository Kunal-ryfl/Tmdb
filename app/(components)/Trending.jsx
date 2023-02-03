import React from 'react'
import InlineCard from './InlineCard';
// import { useStateContext } from "../../context/StateContext";
import { use } from 'react';

async function getTrending(){
     const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API}`,{ next:{revalidate:180}});
     return res.json();
}

let a = getTrending();

export default function Trending() {
  
  const data =use(a); 
    // const {trending} = useStateContext();
  return (
    <div>

    <h2 style={{margin:'20px 0px 10px 10px'}}> Trending</h2>
    
    <div className='cast'>
        {data.results?.map((item)=>(
          <InlineCard key={item.id} movie={item}/>
            ))
        }
    </div>
          
        </div>
  )
}
