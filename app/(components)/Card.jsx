import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const myLoader = ({src}) => {
  return `https://image.tmdb.org/t/p/original${src}`;
}

const Card = ({movie:{title,poster_path,id,release_date}}) => {
  return (
    <Link href={`/movies/${id}`} >
    <div className='card'> 
        {/* <img  onLoad={<p>loading img...</p>} loading='lazy' src={` https://image.tmdb.org/t/p/original${poster_path}`} /> */}
        {
             poster_path &&
        <Image
 loader={myLoader}
 src={poster_path}
 alt="img"
 height={100}
 width={100}
 placeholder="blur"
 blurDataURL="/place1.jpg"
/>
}
        <h1 className='h-small'>{title}</h1>
        <p>{release_date} </p>
    </div>
    </Link>
  )
}

export default Card