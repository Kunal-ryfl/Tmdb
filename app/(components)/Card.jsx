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
      <Link href={`/movies/${id}`}>
        <div className=" grid grid-rows-10 overflow-hidden ">
          <div className="  aspect-[4/6]   relative row-span-9 overflow-hidden">
            {poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt="img"
                fill="true"
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAPoCAYAAAAoeFtqAAAFY0lEQVR42u3RMQ0AAAjAMPD/cGEXbEDSSVizqyZ0pgQCRECACAgQAQEiIECAABEQIAICRECACAgQAREQIAICRECACAgQAREQIAICRECACAgQAREQIAICRECACAgQAREQIAICRECACAgQAREQIAICRECACAgQAREQIAICRECACAgQAREQIAICRECACAgQAREQIAICRECACAgQAQECBIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACIiAABEQIAICRECACAgQIEAEBIiAABEQIAICxAYgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgAgJEQIAICBABASIgQIAAERAgAgJEQIAICBAgQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQIAAASIgQAQEiIAAERAgAiIgQAQEiIAAERAgAiIgQAQEiIAAERAgAiIgQAQEiIAAERAgAiIgQAQEiIAAERAgAiIgQAQEiIAAERAgAiIgQAQEiIAAERAgAiIgQAQEiIAAERAgAiIgQAQEiIAAERAgAgIECBABASIgQAQEiIAAsQGIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAiIgAARECACAkRAgAgIECBABASIgAARECACAgQIEAEBIiBABASIgAAREAEBIiBABASIgAAREAEBIiBABASIgAAREAEBIiBABASIgAAREAEBIiBABASIgAAREAEBIiBABASIgAAREAEBIiBABASIgAAREAEBIiBABASIgAAREAEBIiBABASIgAARECBAgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAgIEAEBIiBABASIgAABAkRAgAgIEAEBIiBAbAAiIEAEBIiAABEQIAIiIEAEBIiAABEQIAIiIEAEBIiAABEQIAIiIEAEBIiAABEQIAIiIEAEBIiAABEQIAIiIEAEBIiAABEQIAIiIEAEBIiAABEQIAIiIEAEBIiAABEQIAICBAgQAQEiIEAEBIiAAAECRECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAEBAgQIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIAICRECACAgQAQEiIECAABEQIAICRECACAgQG4AICBABASIgQAQEiIAICBABASIgQAQEiIAICBABASIgQAQEiIAICBABASIgQAQEiIAICBAB+dkCxfeXh1cuO7YAAAAASUVORK5CYII="
                className="transition duration-5 ease-in-out rounded hover:scale-105"
              />
            )}
          </div>
          <div className=" row-span-1">
            <h1 className="  text-sm md:text-base font-semibold  ">{title}</h1>
            <p className=" text-xs ">{release_date} </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
