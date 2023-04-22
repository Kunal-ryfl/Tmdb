"use client";
import React from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { AiOutlineSearch } from "react-icons/ai";

export default function Nav() {
  const {
    clickTop,
    clickPop,
    active,
    search,
    submitContact,
    showSearch,
    clickSearch,
  } = useStateContext();
  return (
    <div className=" flex flex-col sm:flex-row   py-1 justify-between ">
      <ul className="px-2 w-screen sm:w-auto py-2 flex items-center ">
        {active && !search ? (
          <>
            <li className=" mr-2 md:mr-4 ">
              {" "}
              <button
                className=" border-b-2 border-red-600 py-1 text-sm"
                onClick={() => clickPop()}
              >
                Popular
              </button>{" "}
            </li>
          </>
        ) : (
          <>
            <li className="mr-2 md:mr-4">
              {" "}
              <button className="py-1 text-sm" onClick={() => clickPop()}>
                Popular
              </button>{" "}
            </li>
          </>
        )}
        {active || search ? (
          <>
            {" "}
            <li>
              {" "}
              <button
                className="mr-2 md:mr-4  py-1 text-sm"
                onClick={() => clickTop()}
              >
                Top-Rated
              </button>{" "}
            </li>
          </>
        ) : (
          <>
            {" "}
            <li>
              {" "}
              <button
                className="mr-2 border-b-2 md:mr-4 border-red-600 py-1 text-sm"
                onCl
                ick={() => clickTop()}
              >
                Top-Rated
              </button>{" "}
            </li>
          </>
        )}

        <li className={!showSearch ? "mx-2  flex items-center" : " hidden"}>
          <button onClick={() => clickSearch()} className="">
            <AiOutlineSearch />
          </button>
        </li>

        {showSearch ? (
          <>
            <form onSubmit={submitContact}>
              <input
                autoComplete="off"
                className=" ml-2 w-auto pl-1 py-2 bg-slate-700 my-2 rounded"
                id="name"
                placeholder="search movies"
              />
            </form>
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
