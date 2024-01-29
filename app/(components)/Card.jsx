"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../../lib/utils";
const Card = ({ movie: { title, poster_path, id, release_date } }) => {
  const [fade, setFade] = useState(false);

  function onClick() {
    setFade(true);
    setTimeout(function () {
      setFade(false);
    }, 150);
  }
  return (
    <>
      <div className="grid grid-rows-10 overflow-hidden ">
        <Link href={`/movies/${id}`}>
          <div className="  aspect-[4/6]   relative row-span-9 overflow-hidden">
            {poster_path && (
              <Image
                priority
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt="img"
                fill="true"
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8sv5KPQAHjgLYUdlBYAAAAABJRU5ErkJggg=="
                // placeholder="blur"
                // blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
                onClick={onClick}
                className={cn(
                  "transition duration-5 ease-in-out rounded md:hover:scale-105",
                  {
                    "brightness-50": fade,
                  }
                )}
              />
            )}
          </div>
        </Link>
        <div className=" row-span-1">
          <h1 className="  text-sm md:text-base font-semibold  ">{title}</h1>
          <p className=" text-xs ">{release_date} </p>
        </div>
      </div>
    </>
  );
};

export default Card;
