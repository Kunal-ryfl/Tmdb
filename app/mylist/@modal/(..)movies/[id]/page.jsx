import React from 'react'
import Modal from "../../../../(components)/Modal"

export async function generateStaticParams(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}`);
  const res1 = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API}`
  );
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API}`);

  const data = await res.json();
  const data1 = await res1.json();
  const data2 = await res2.json();

  const main = [...data.results,...data1.results,...data2.results]

  return main.map((movie)=>({movie:toString(movie.id),
  }))
}


const Page =async ({params}) => {
  
  const {id:movie} = params; 
  
  async function getMovie(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API}`);
    return res.json();
  }

  
  // console.log("a = ",a);
//  const data = (await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API}`)).json()
const data = await getMovie();
//  const data1 = await fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${process.env.NEXT_PUBLIC_API}`)

const res = data;
  return (
    
      <Modal movie={res} />
      
  )
}

export default Page