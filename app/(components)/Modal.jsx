"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useRouter } from 'next/navigation'
import {AiOutlineClose} from "react-icons/ai"

export default function MyModal({ movie }) {
  const router = useRouter()

  let [isOpen, setIsOpen] = useState(true);

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
        <div className="fixed inset-0   backdrop-blur  bg-white/10  " aria-hidden="true" />
  
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
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <Dialog.Panel className=" w-full md:max-w-3xl relative transform overflow-hidden  rounded-lg bg-neutral-900 text-left align-middle shadow-xl transition-all">
                  
                <button type="button" className=" absolute right-2 top-2 z-30"  onClick={() => router.back()}>
      <AiOutlineClose className=" text-5xl rounded-full p-2   bg-black/50 "/>
    </button>
                                    <div className="  w-full  relative    aspect-video  ">

<Image
  priority
  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
  fill
  alt=""
  className="  "
  />
  </div>

     <div className=" px-3 pb-3 md:px-6 md:pb-6 pt-3   " >
                  <Dialog.Title
                    as="h3"
                    className=" text-xl md:text-3xl  font-semibold   leading-6 text-white"
                  >
                    {movie.title}
                  </Dialog.Title>
                  <Dialog.Description>
                    <div className=" gap-3  my-3 items-end font-semibold text-sm flex ">
                      <p className="  text-green-600 ">
                        {movie.vote_average} average
                      </p>
                      <p>{movie.release_date}</p>
                      <p  className=" border-[1px] text-center  w-8 border-neutral-400   text-neutral-400  text-xs p-1 uppercase">{movie.original_language}</p>
                    </div>
                  </Dialog.Description>


                  <div className="mt-2">
                    <p className="line-clamp-3 text-xs text-slate-700 dark:text-slate-50 sm:text-sm">{movie.overview}</p>
                  </div>


                  <div className=" flex   items-baseline mt-4">

   <p className=" font-semibold text-base  text-neutral-400  ">Genre:</p>
              {
    movie.genres?.map((item)=>(
      <p className=' ml-2 text-xs ' key={item.id}>{item.name}</p>
    ))
  }        

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
