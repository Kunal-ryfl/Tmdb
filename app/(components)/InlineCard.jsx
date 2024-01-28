import React from "react";
import Link from "next/link";
import Image from "next/image";

const InlineCard = ({ movie: { title, poster_path, backdrop_path, id, release_date } }) => {
  return (
    <>
        <div className=" relative aspect-video inline-block h-36 md:h-40 overflow-hidden  mx-1">
          {poster_path && (
            <Link href={`/movies/${id}`}>
            <Image
              placeholder='blur'
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8sv5KPQAHjgLYUdlBYAAAAABJRU5ErkJggg=="
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              alt="img"
              fill
              // placeholder="blur"
              // blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
              className=" hover:scale-125  transition duration-5 ease-in-out rounded-md hover:filter   object-fill"
              />
              </Link>
          )}
        </div>
    </>
  );
};

export default InlineCard;
