"use client"
import React from 'react'
import Link from 'next/link'
import { useStateContext } from "../../context/StateContext";

export default function Nav() {
  const {clickTop,clickPop,active} = useStateContext();
  return (
    <div className='nav'>
        <ul> 
           {
            active?<><li>  <button className='act-btn' onClick={()=>clickPop()}>Popular</button> </li></>:<><li> <button className='btn' onClick={()=>clickPop()}>Popular</button> </li></>
           
           }
           {
            active?<> <li> <button className='btn' onClick={()=>clickTop()}>Top-Rated</button> </li></>:<> <li> <button className='act-btn' onClick={()=>clickTop()}>Top-Rated</button> </li></>
           }
            
           
        </ul>
        
        </div>
  )
}
