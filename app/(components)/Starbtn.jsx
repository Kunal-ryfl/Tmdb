import React from "react";
import { useAuth } from "@clerk/nextjs";
import { add, remove } from "../actions";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { check } from "../actions";

import toast from "react-hot-toast";
const Starbtn = ({ movie }) => {
  const { userId } = useAuth();
  const add1 = add.bind(null, userId, movie?.id);

  if (!userId) {
    return <></>;
  }

  return (
    <div>
      <form
        className="   bottom-28 absolute sm:bottom-5 right-5 "
        action={async() => {
          const res = await add1();
          if(res?.error){
            toast.error(res?.error);
          }
          else toast.success("added to list");

        }}
      >
        <button className="rounded-md  bg-black bg-opacity-20 px-4 py-2 text-[13px] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ">
          Add
        </button>
      </form>
    </div>
  );
};

export default Starbtn;
