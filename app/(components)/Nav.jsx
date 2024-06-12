"use client";
import React, { useState, useEffect, useRef } from "react";
import { useStateContext } from "../../context/StateContext";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMovie2Line } from "react-icons/ri";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { initialProfile } from "../../lib/newUser";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { User, UserIcon } from "lucide-react";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(false);
  const inputRef = useRef(null);

  const { isSignedIn, user, isLoaded } = useUser();

  const changeColor = () => {
    if (window.scrollY >= 30) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeColor);
      }
    };
  }, []);

  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  const { submitContact } = useStateContext();

  // if (!isLoaded) {
  //   return <p>loading</p>;
  // }

  return (
    <div
      className={
        color
          ? "py-2 px-4 bg-neutral-900 fixed z-10 w-full top-0 flex sm:flex-row items-center justify-between"
          : "py-2 px-4 fixed justify-between items-center z-10 w-full top-0 flex sm:flex-row"
      }
    >
      <div className="flex items-center gap-3">
        <RiMovie2Line className="text-2xl md:text-4xl fill-red-700" />
        {/* <List /> */}

        <Link href={"/mylist"}>
          <button className="rounded-md  bg-black bg-opacity-20 px-4 py-2 text-[13px] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            My List
          </button>
        </Link>

        {/* {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <button className="rounded-md  bg-red-600  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              sign in
            </button>

            <User className=" cursor-pointer" />
          </SignInButton>
        )} */}
      </div>
      <div className="relative flex items-center gap-3">
        <div className="relative">
          <AiOutlineSearch
            onClick={() => setShow(!show)}
            className="z-10 text-xl cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 transition-transform duration-500"
          />
          <form
            className={`transition-all duration-500 ease-in-out ${
              show ? "w-40 md:w-60" : "w-10"
            } overflow-hidden`}
            onChange={submitContact}
          >
            <input
              autoComplete="off"
              className="pl-10 py-2 pr-2 text-white text-sm outline-none rounded-sm bg-transparent/5 border-[3px] border-blue-300 backdrop-blur-md w-full transition-all duration-500 ease-in-out"
              id="name"
              placeholder="search movies"
              ref={inputRef}
              style={{ opacity: show ? 1 : 0 }}
            />
          </form>
        </div>

        {isSignedIn ? (
          <UserButton />
        ) : (
          <button>
            <FaRegUserCircle onClick={initialProfile} className=" text-xl cursor-pointer" />
          </button>
        )}
      </div>
    </div>
  );
}
