"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";

import ReactPlayer from "react-player/lazy";

export default function MyModal({ movie }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);
  const [trailer, setTrailer] = useState("");
 

  React.useEffect(() => {
    const getShow = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&append_to_response=videos`
      );
      const data = await response.json();
      if (data?.videos) {
        const trailerIndex = data.videos.results.findIndex(
          (item) => item.type === "Trailer"
        );
        setTrailer(data.videos?.results[trailerIndex]?.key ?? "");
      }
    };
    getShow();
  }, []);

  function closeModal() {
    setIsOpen(true);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        ></button>
      </div>

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
                    onClick={() => router.back()}
                  >
                    <AiOutlineClose className=" text-4xl rounded-full p-2 hover:bg-neutral-900 bg-neutral-900/50 " />
                  </button>
                  <div className="  w-full  relative    aspect-video  ">
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      muted={true}
                      controls={true}
                      // url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      url={`https://www.youtube.com/watch?v=${trailer}`}
                    />

                    {/* <Image
  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
  fill
  placeholder='blur'
  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8sv5KPQAHjgLYUdlBYAAAAABJRU5ErkJggg=="
  alt=""
  className="  "
  /> */}
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
}
