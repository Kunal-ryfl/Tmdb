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
        
        {
          poster_path &&
          <Image
          loader={myLoader}
          src={poster_path}
          alt="img"
          height={100}
          width={1000}
          placeholder="blur"
          blurDataURL="/place1.jpg"
/>
}
        <h1 className=''>{title}</h1>
        <p className=' text-xs'>{release_date} </p>
    </div>
          
    </Link>
  )
}

export default Card