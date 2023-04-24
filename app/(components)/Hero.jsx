"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useStateContext } from "../../context/StateContext";
import Skeleton from './Skeleton'

const Main = () => {
  const { popular, search } = useStateContext();
  // const [mounted, setMounted] = useState(false)
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return <div className='px-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 py-4'>
  //   {[...Array(20).keys()].map(()=>(
  //     <Skeleton/>
  //   ))}

  //    </div>
  // }

  return (
    <div className=" px-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 py-4">
      {search && popular.length === 0 ? (
        <>
          <p className=" text-red-600 px-2">Not found!</p>
        </>
      ) : (
        <>
          {popular?.map((item) => (
            <Card key={item.id} movie={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default Main;