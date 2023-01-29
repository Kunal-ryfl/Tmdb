import React from 'react'
import Image from 'next/image';
import InlineCard from '@/app/(components)/InlineCard';

// static params for static pages
// no network overhead

export async function generateStaticParams(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f743585fbb67230207bebc2b36df5b02`);
    const data = await res.json();
    // console.log('data = ',data)

    return data.results.map((movie)=>(
    {movie:toString(movie.id),
    }))
}

export default async function page({params}) {
  const {movie} = params;
 const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API}`)
 const data1 = await fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${process.env.NEXT_PUBLIC_API}`)
 const data2 = await fetch(`https://api.themoviedb.org/3/movie/${movie}/recommendations?api_key=${process.env.NEXT_PUBLIC_API}`)
const res =await data.json();
const credits =await data1.json();
const rec =await data2.json();

  // console.log('res = ',res)
  return (
    <div className='detail' 
    >
      <div 
        style={{
          backgroundPosition:'center', backgroundSize:'cover',
           
        // background:`url(https://image.tmdb.org/t/p/original${res.backdrop_path})`,
        
        backgroundImage:`url(https://image.tmdb.org/t/p/original${res.backdrop_path})`
        }}
      className="bg-img">
        
<img className='al-img' src={`https://image.tmdb.org/t/p/original${res.poster_path}`}/>

      </div>

<h1 className='detail-h'>{res.title}</h1> 
<h2 className='detail-h2'>{res.tagline}</h2>
<h2 className='detail-h2' style={{color:'rgb(143, 180, 253'}}>Rating :- {(res.vote_average)}</h2>

<div className='genre'>
  {
    res.genres?.map((item)=>(
      <p>{item.name}</p>
    ))
  }
  </div>
<div className='detail-dsc' >
  <h2>Overview:</h2>
<p>{res.overview}</p>



  <h2 style={{marginTop:'10px'}}>Cast:-</h2>
<div className='cast'>
  {
    credits.cast?.map((item)=>(
   <div className="cast-card">
      <img loading='lazy' src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt=""/>
      <p> {item.name}</p>
   </div>
    ))
  }
  </div>

<div className='companies'>
  {
    res.production_companies?.map((item)=>(
      <img loading='lazy' src={`https://image.tmdb.org/t/p/original${item.logo_path}`} alt=""/>
    ))
  }
  </div>
  
{
  (rec.results?.length > 0) ? <> 
  <h2 style={{marginTop:'10px'}}>Recommended:-</h2>
 </>:<></> 
 } 

  <div className='cast'>
  {
    rec.results?.map((item)=>(
      <InlineCard key={item.id} movie={item}/>
    ))
  }
  </div>
 


</div>

    </div>
  )
}

