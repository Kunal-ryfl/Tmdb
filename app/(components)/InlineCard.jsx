import React from "react";
import Link from "next/link";
import Image from "next/image";

const InlineCard = ({ movie: { title, poster_path, id, release_date } }) => {
  return (
    <>
        <div className=" relative aspect-square  inline-block h-48 md:h-52 overflow-hidden  mx-1">
          {poster_path && (
            <Link href={`/movies/${id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt="img"
              fill="true"
              style={{ objectFit: 'fill' }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
              className=" rounded-md hover:filter hover:brightness-50"
              />
              </Link>
          )}
        </div>
    </>
  );
};

export default InlineCard;
