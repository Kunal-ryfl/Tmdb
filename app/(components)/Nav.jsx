"use client"
import React from 'react'
import Link from 'next/link'
import { useStateContext } from "../../context/StateContext";
import {AiOutlineSearch} from 'react-icons/ai'


export default function Nav() {
  const {clickTop,clickPop,active,search,submitContact} = useStateContext();
  return (
    <div className='nav'>
        <ul> 
           { 
            (active && !search )?<><li>  <button className='act-btn' onClick={()=>clickPop()}>Popular</button> </li></>:<><li> <button className='btn' onClick={()=>clickPop()}>Popular</button> </li></>
           
           }
           {
            
            (active || search )?<> <li> <button className='btn' onClick={()=>clickTop()}>Top-Rated</button> </li></>:<> <li> <button className='act-btn' onClick={()=>clickTop()}>Top-Rated</button> </li></>
           }
            

        </ul>

           <form  onSubmit={submitContact}>
            <input className='search-bar' id='name'  placeholder="search movies"/>
            <button className='search-btn' type='submit' ><AiOutlineSearch/> </button>
            </form> 
        
        </div>
  )
}
