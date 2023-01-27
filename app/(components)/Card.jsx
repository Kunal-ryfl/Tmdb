import React from 'react'
import Link from 'next/link'


const Card = ({movie:{title,poster_path,id,release_date}}) => {
  return (
    <Link href={`/movies/${id}`}>
    <div className='card'> 
        <img src={` https://image.tmdb.org/t/p/original${poster_path}`} />
        <h1 className='h-small'>{title}</h1>
        <p>{release_date} </p>
    </div>
    </Link>
  )
}

export default Card