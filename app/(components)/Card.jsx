// 'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useStateContext } from "../../context/StateContext";
import Skeleton from './Skeleton'



const Card = ({movie:{title,poster_path,id,release_date}}) => {
const [loading,setLoading] = useState(true)
// console.log('loading B = ',loading)
  
  return (

    <>
    {loading && <Skeleton/>}
    <Link href={`/movies/${id}`} >

    <div className='card overflow-hidden'> 
      
          {
            poster_path  && <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="img"
            height={100}
            width={1000}     
            onLoadingComplete={()=>setLoading(false)}    
            className='transition duration-5 ease-in-out rounded hover:scale-105'
/>
}
   
        <h1 className=' mt-3'>{title}</h1>
        <p className=' text-xs'>{release_date} </p>
    </div>
    </Link>

  </>
  )
}

export default Card