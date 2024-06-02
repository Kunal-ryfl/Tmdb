import React from "react";
import Nav from "../(components)/Nav";
import Link from "next/link";
const page = () => {
  return (
    <div className=" flex flex-col  min-h-screen items-center justify-center  p-3">
      <p>under development </p>
      <Link href={"/"}>
        <button className="rounded-md  bg-black bg-opacity-20 px-4 py-2 text-[13px] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Back home
        </button>
      </Link>
    </div>
  );
};

export default page;
