import React from "react";
import { useAuth } from "@clerk/nextjs";
import {add,remove} from "../actions"
import { Star } from "lucide-react";




const Starbtn = ({ movie }) => {
  
  const {  userId } = useAuth();
   const add1 = add.bind(null,userId,movie?.id)
   const rem1 = remove.bind(null,userId,movie?.id)


  return (
    <div>
      <form className="   bottom-28 absolute sm:bottom-5 right-5 " action={add1}>
        <button className="rounded-md  bg-black bg-opacity-20 px-4 py-2 text-[13px] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ">
          Add
           </button>
      </form>
    </div>
  );
};

export default Starbtn;
