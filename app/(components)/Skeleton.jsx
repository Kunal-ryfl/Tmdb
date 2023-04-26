import React from 'react'

const Skeleton = () => {
  return (
    <div className="flex  mt-6  w-screen flex-1  px-20">
    <div className="mt-12 w-full md:w-1/2  animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border border-neutral-700 p-6 ">
      <div className="flex flex-col space-y-2">
        <div className="h-6 w-11/12 rounded-md bg-neutral-700 "></div>
        <div className="h-6 w-10/12 rounded-md bg-neutral-700 "></div>
        <div className="h-6 w-9/12 rounded-md bg-neutral-700 "></div>
        <div className="h-6 w-9/12 rounded-md bg-neutral-700 "></div>
      </div>
    </div>
  </div>

  )
}

export default Skeleton