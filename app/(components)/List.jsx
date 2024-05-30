"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

const List = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
    
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >mylist</button>
    

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
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
                  <div className="  w-full  relative    aspect-video  "></div>

                  <div className="  px-4 pb-3 md:px-6 md:pb-6 z-20 pt-4   ">
                    <Dialog.Title
                      as="h3"
                      className=" text-xl md:text-3xl  font-semibold   leading-6 text-white"
                    >
                      hep{" "}
                    </Dialog.Title>
                    <Dialog.Description>
                      <div className=" gap-3  my-3 items-end font-semibold text-sm flex ">
                        fdfs
                      </div>
                    </Dialog.Description>
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

export default List;
