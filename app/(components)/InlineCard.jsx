'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const myLoader = ({src}) => {
  return `https://image.tmdb.org/t/p/original${src}`;
}

const InlineCard = ({movie:{title,poster_path,id,release_date}}) => {
  return (
    <Link href={`/movies/${id}`}>
    <div className=' inline-block mx-3'> 
        {/* <img loading='lazy' src={` https://image.tmdb.org/t/p/original${poster_path}`} /> */}
        {
             poster_path &&
          <Image
          loader={myLoader}
          src={poster_path}
          alt="img"
          height={160}
          width={150}
          // placeholder="blur"
          // blurDataURL="/place1.jpg"
          className=' rounded-xl hover:filter hover:brightness-50'
/>
        }
    </div>
    </Link>
  )
}

export default InlineCard