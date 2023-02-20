'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Skeleton from './Skeleton'


const myLoader = ({src}) => {
  return `https://image.tmdb.org/t/p/original${src}`;
}

const Card = ({movie:{title,poster_path,id,release_date}}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  // const [skel, setSkel] = useState(true)
  
  const handle = ()=>{
       setIsLoaded(true)
      //  setSkel(false)  
  }
  
  
  return (
    
    <Link href={`/movies/${id}`} >

    <div className='card overflow-hidden'> 
    {!isLoaded  && <Skeleton />}

        {
          poster_path    &&
           <Image
          loader={myLoader}
          src={poster_path}
          alt="img"
          height={100}
          width={1000}         
          onLoadingComplete={() => handle() }
          // onLoad={()=>setSkel(false)}
          className='transition duration-5 ease-in-out rounded hover:scale-105'
/>
}
   

        <h1 className=' mt-3'>{title}</h1>
        <p className=' text-xs'>{release_date} </p>
    </div>
          
    </Link>
  )
}

export default Card