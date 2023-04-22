// 'use client'
import React from 'react'
import InlineCard from '../../(components)/InlineCard';
import Image from 'next/image';

// static params for static pages
// no network overhead

export async function generateStaticParams(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}`);
    const data = await res.json();
    // console.log('data = ',data)

    return data.results.map((movie)=>(
    {movie:toString(movie.id),
    }))
}


export default async function Page({params}) {

  const {movie} = params;
  async function getMovie(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API}`);
    return res.json();
  }
  async function getCredits(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${process.env.NEXT_PUBLIC_API}`)
    return res.json();
  }
  async function getRec(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}/recommendations?api_key=${process.env.NEXT_PUBLIC_API}`);
    return res.json();
  }
  
  // console.log("a = ",a);
//  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API}`)
const data = await getMovie();
//  const data1 = await fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${process.env.NEXT_PUBLIC_API}`)
const data1 =  await getCredits()
// const data2 = await fetch(`https://api.themoviedb.org/3/movie/${movie}/recommendations?api_key=${process.env.NEXT_PUBLIC_API}`)
const data2 = await getRec();
const res = data;
const credits = data1;
const rec = data2;

  // console.log('res = ',res)
  return (
    <div className='detail' 
    >
      <div className=" relative min-h-screen grid grid-cols-1 md:grid-cols-3" 
      >

<Image  src={`https://image.tmdb.org/t/p/original${res.backdrop_path}`}  fill='true' style={{objectFit:'cover'}}  alt="" className='  filter brightness-50 h-48 blur-md '/>        

<div className=' flex justify-center items-center z-10 p-8'>
<Image src={`https://image.tmdb.org/t/p/original${res.poster_path}`}  height={1000} width={300} alt="" className=' rounded-xl '/>

</div>

<div className='p-2 sm:col-span-2 flex flex-col justify-center z-10'>

<h1 className=' text-2xl font-bold sm:text-4xl '>{res.title}</h1> 
<h2 className='text-sm sm:text-xl'>{res.tagline} <span className=' ml-2 text-gray-300 text-xs'>{res.runtime} mins</span><span className=' text-green-400 ml-2  text-xs'>{res.status}</span></h2>
<h2 className='text-sm sm:text-xl text-cyan-400 font-medium' >Rating :- {(res.vote_average)}</h2>  

<div className=' my-4 flex flex-wrap'>
  {
    res.genres?.map((item)=>(
      <p className=' mx-1 my-1 border-[thin]  border-white px-2 py-1 rounded-full text-xs' key={item.id}>{item.name}</p>
    ))
  }

  
  </div>

  <h2 className=' text-sm sm:text-xl font-semibold'>Overview:</h2>
<p className=' text-sm '>{res.overview}</p>

</div>
    

{/* <img className='al-img' src={`https://image.tmdb.org/t/p/original${res.poster_path}`}/> */}

      </div>

<div className='detail-dsc' >


  <h2 className=' text-sm sm:text-xl font-semibold pl-2'>Cast:-</h2>
<div className=' overflow-auto  whitespace-nowrap'>
  {
    credits.cast?.map((item)=>(
   <div className=" inline-flex  flex-col justify-center items-center py-2   mx-1" key={item.id}>
      <img className=' w-20   rounded' loading='lazy' src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt=""/>
      <p className=' text-[8px] sm:text-xs'> {item.name}</p>
   </div>
    ))
  }
  </div>

{
  (rec.results?.length > 0) ? <> 
  <h2 className=' text-sm sm:text-xl font-semibold pl-2 my-2' >Recommended:-</h2>
 </>:<></> 
 } 

  <div className=' overflow-auto  whitespace-nowrap'>
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