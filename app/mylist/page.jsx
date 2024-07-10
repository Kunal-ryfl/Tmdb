import React from "react";
import Nav from "../(components)/Nav";
import Link from "next/link";
import { getList } from "../actions";
import MyListMovie from "../(components)/MyListMovie";
import { initialProfile } from "../actions";

const page = async () => {
  const user = initialProfile();
  // const user1 = await currentUser()

  // const list1 = getList.bind(null,user?.id);
  const list = await getList();
  // console.log(list)

  return (
    <div className="  flex flex-col gap-3  items-center  min-h-screen  p-3">
      <Link href={"/"}>
        <button className="rounded-md  bg-black bg-opacity-20 px-4 py-2 text-[13px] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Back home
        </button>
      </Link>

      {list.map((x) => (
        <MyListMovie key={x?.id} movieId={x?.id} userId={user?.id} />
      ))}
    </div>
  );
};

export default page;
