import React from 'react'
import Card from './Card';
import InlineCard from './InlineCard';
import { useStateContext } from "../../context/StateContext";

const Upcoming = () => {
    const {upcoming} = useStateContext();
    return (
      <>
      <h2 style={{margin:'20px 0px 10px 10px'}}> Upcomming</h2>
      <div className='cast'>
          {/* Trending */}
          {upcoming?.map((item)=>(
              <InlineCard key={item.id} movie={item}/>
              ))
          }
      </div>
          </>
    )
  }

export default Upcoming