'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import InSkel from './InSkel'

const myLoader = ({src}) => {
  return `https://image.tmdb.org/t/p/original${src}`;
}

const InlineCard = ({movie:{title,poster_path,id,release_date}}) => {
const [loading,setLoading] = useState(true)
  return (
<>
        {/* {loading && <InSkel/>} */}
    <Link href={`/movies/${id}`}>
    <div className=' inline-block mx-3'> 
        {  
           poster_path &&
          <Image
          loader={myLoader}
          src={poster_path}
          alt="img"
          height={160}
          width={150}
          onLoad={()=>setLoading(false)}    
          className=' rounded-xl hover:filter hover:brightness-50'
/>
        }
    </div>
    </Link>
        </>
  )
}

export default InlineCard