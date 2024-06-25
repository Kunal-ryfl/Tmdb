"use client"
import { X } from "lucide-react";
import React from "react";
import { remove } from "../actions";
import Link from "next/link";
import toast from "react-hot-toast";
async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API}`
  );
  return res.json();
}

const MyListMovie = async ({ movieId, userId }) => {
  const data = await getMovie(movieId);
  const rem1 = remove.bind(null, userId, movieId);
  //   console.log(data);
  return (
    <div className=" flex justify-between items-center   p-2 border w-full max-w-sm   ">
      <Link href={`/movies/${movieId}`}>{data?.original_title}</Link>

      <form className=" cursor-pointer" action={async()=>{
        
        const to = toast.loading(" removing... ",{})
        
        const res = await rem1()
        if(res?.error){
            toast.error("error",{
              id:to
            })
         }
         else {
          toast.success("removed",{
            id:to
          })
         }
        
        }}>
        <button>
          <X />
        </button>
      </form>
    </div>
  );
};

export default MyListMovie;
