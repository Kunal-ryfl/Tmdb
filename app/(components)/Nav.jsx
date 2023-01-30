"use client"
import React from 'react'
import Link from 'next/link'
import { useStateContext } from "../../context/StateContext";
import {AiOutlineSearch} from 'react-icons/ai'


export default function Nav() {
  const {clickTop,clickPop,active,search,submitContact,showSearch,clickSearch} = useStateContext();
  return (
    <div className='nav'>
        <ul> 
           { 
            (active && !search )?<><li>  <button className='act-btn' onClick={()=>clickPop()}>Popular</button> </li></>:<><li> <button className='btn' onClick={()=>clickPop()}>Popular</button> </li></>
           
           }
           {
            
            (active || search )?<> <li> <button className='btn' onClick={()=>clickTop()}>Top-Rated</button> </li></>:<> <li> <button className='act-btn' onClick={()=>clickTop()}>Top-Rated</button> </li></>
           }
            
           <li><button onClick={()=>clickSearch()} className='search-btn'><AiOutlineSearch/></button></li> 

        </ul>

{ showSearch?<> 

           <form  onSubmit={submitContact}>
            <input autoComplete='off' className='search-bar' id='name'  placeholder="search movies"/>
            </form> 
</>:<></>  
}
        </div>
  )
}
