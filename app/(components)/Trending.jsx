import React from 'react'
import Card from './Card';
import InlineCard from './InlineCard';
import { useStateContext } from "../../context/StateContext";


const Trending = () => {
    const {trending} = useStateContext();
  return (
    <>
    <h2 style={{margin:'20px 0px 10px 10px'}}> Trending</h2>
    <div className='cast'>
        {trending?.map((item)=>(
            <InlineCard key={item.id} movie={item}/>
            ))
        }
    </div>
        </>
  )
}

export default Trending
