"use client";
// import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { cn } from "../../lib/utils";
import { useStateContext } from "../../context/StateContext";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
// import { useStateContext } from "../../context/StateContext";
import Starbtn from "../(components)/Starbtn";
import ReactPlayer from "react-player/lazy";
import toast from "react-hot-toast";

const InlineCard = ({
  movie: { title, poster_path, backdrop_path, id, release_date },
  search
}) => {
  const [fade, setFade] = useState(false);

  function onClick() {
    setFade(true);
    setTimeout(function () {
      setFade(false);
    }, 150);
  }

  const [isOpen, setIsOpen] = useState(false);

  const [trailer, setTrailer] = useState("");
  const [movie, setMovie] = useState("");

  React.useEffect(() => {
    const getShow = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&append_to_response=videos`
      );
      const data = await response.json();
      if (data?.videos) {
        const trailerIndex = data.videos.results.findIndex(
          (item) => item.type === "Trailer"
        );
        setTrailer(data.videos?.results[trailerIndex]?.key ?? "");
      }
    };

    async function getMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API}`
      );
      // return res.json();
      const data = await res.json();
      // console.log(data)
      setMovie(data);
    }

    getMovie();

    getShow();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        onClick={openModal}
        className=" relative aspect-video inline-block h-36 md:h-40 overflow-hidden  mx-1"
      >
        {poster_path && (
          // <Link href={`/movies/${id}`}>
          <Image
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8sv5KPQAHjgLYUdlBYAAAAABJRU5ErkJggg=="
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt="img"
            fill
            // placeholder="blur"
            // blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
            onClick={onClick}
            className={cn(
              " md:hover:scale-125  transition duration-5 ease-in-out rounded-md hover:filter   object-fill",
              {
                " brightness-50 ": fade,
              }
            )}
          />

          // </Link>
        )}
      </div>

      {/* </button> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div
            className="fixed inset-0   backdrop-blur  bg-white/10  "
            aria-hidden="true"
          />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0   overflow-y-auto">
            <div className="flex min-h-full  items-end md:items-center justify-center md:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0  scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-full md:max-w-3xl relative transform overflow-hidden  rounded-lg bg-neutral-900 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className=" absolute right-2 top-2 z-30"
                    onClick={closeModal}
                  >
                    <AiOutlineClose className=" text-4xl rounded-full p-2 hover:bg-neutral-900 bg-neutral-900/50 " />
                  </button>
                  <div className="  w-full  relative    aspect-video  ">
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      muted={true}
                      controls={true}
                      url={`https://www.youtube.com/watch?v=${trailer}`}
                    />
                  </div>

                  <div className="  px-4 pb-3 md:px-6 md:pb-6 z-20 pt-4   ">
                    <Dialog.Title
                      as="h3"
                      className=" text-xl md:text-3xl  font-semibold   leading-6 text-white"
                    >
                      {movie.title}
                    </Dialog.Title>
                    <Dialog.Description>
                      <div className=" gap-3  my-3 items-end font-semibold text-sm flex ">
                        <p className="  text-green-600 ">
                          {Math.round(movie.vote_average * 10)}% votes
                        </p>
                        <p>{movie.release_date}</p>
                        <p className=" border-[1px] text-center  w-8 border-neutral-400   text-neutral-400  text-xs p-1 uppercase">
                          {movie.original_language}
                        </p>
                      </div>
                    </Dialog.Description>

                    <div className="mt-2">
                      <p className="line-clamp-3 font-light text-xs text-slate-700 dark:text-slate-50 sm:text-sm">
                        {movie.overview}
                      </p>
                    </div>

                    <div className=" flex   items-baseline mt-4">
                      <p className=" font-semibold text-base  text-neutral-400  ">
                        Genre:
                      </p>
                      {movie.genres?.map((item) => (
                        <p className=" ml-2 text-xs " key={item.id}>
                          {item.name}
                        </p>
                      ))}
                      <Starbtn movie={movie} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default InlineCard;
