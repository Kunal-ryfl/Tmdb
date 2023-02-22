import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const InlineCard = ({movie:{title,poster_path,id,release_date}}) => {
  return (
<>
        
    <Link href={`/movies/${id}`}>
    <div className=' inline-block  mx-3'> 
        {  
           poster_path &&
          <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="img"
          height={160}
          width={150}  
          className=' rounded-xl hover:filter hover:brightness-50'
/>
        }
    </div>
    </Link>
        </>
  )
}

export default InlineCard