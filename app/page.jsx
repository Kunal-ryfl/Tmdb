"use client";
import React, { Suspense, useEffect, useState } from "react";
import Nav from "./(components)/Nav";
import Trending from "./(components)/Trending";
import Upcoming from "./(components)/Upcoming";
import Hero from "./(components)/Hero";
import { useStateContext } from "../context/StateContext";
import Card from "./(components)/Card";
import InSkel from '../app/(components)/InSkel'
import Skeleton from "./(components)/Skeleton";
import InlineCard from "./(components)/InlineCard";

export default function Home() {

  const { search, searchArray ,showSearch} = useStateContext();

  // const [mounted, setMounted] = useState(false)
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return <div className='px-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 py-4'>
  //  <Skeleton/>

  //    </div>
  // }


  const DataComponent = React.lazy(() => import('./(components)/Hero'));

  return (
    <>
      <Nav />
      {!search    ? (
        <>
          {/* <Hero /> */}
          <Suspense fallback={<InSkel/>}>
        <DataComponent />
      </Suspense>
      
        </>
      ) : (
        <div className="sticky min-h-[300px]  pt-10 ">
          <div className="   relative px-3 flex flex-wrap justify-center  gap-2 py-4 ">
            {searchArray?.results?.map((item) => (
              // <Card key={item.id} movie={item} />
              <InlineCard key={item.id} movie={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
