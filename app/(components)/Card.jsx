// 'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ movie: { title, poster_path, id, release_date } }) => {
  const [loading, setLoading] = useState(true);
  // console.log('loading B = ',loading)

  return (
    <>
      {/* {loading && <Skeleton/>} */}
        <div className="grid grid-rows-10 overflow-hidden ">
          <div className="  aspect-[4/6]   relative row-span-9 overflow-hidden">
            {poster_path && (
              <Link href={`/movies/${id}`}>
              <Image
                priority
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt="img"
                fill="true"
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
                className="transition duration-5 ease-in-out rounded hover:scale-105"
              />
            </Link>
            )}
          </div>
          <div className=" row-span-1">
            <h1 className="  text-sm md:text-base font-semibold  ">{title}</h1>
            <p className=" text-xs ">{release_date} </p>
          </div>
        </div>
    </>
  );
};

export default Card;
