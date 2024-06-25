"use server";
import { db } from "../lib/db";
import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function add(userId, movieId) {
  const mid = "" + movieId;

  const check = db.movie.findMany({
    where: {
      id: mid,
      userId,
    },
  });

  if ((await check).length > 0) {
    return { error: "already in list" };
  }

  const create = await db.movie.create({
    data: {
      id: mid,
      userId,
    },
  });
}

export async function remove(userId, movieId) {
  const mid = "" + movieId;
  
  const user = await currentUser();

  const check = db.movie.findMany({
    where: {
      id: mid,
      userId,
    },
  });

  if ((await check).length == 0) {
    return { error: "error" };
  }

  // console.log(user?.id)

  const remove = await db.movie.delete({
   where:{
    id_userId:{
      id:mid,
      userId:user?.id, 
    },
    userId:user?.id
   }
  });

  revalidatePath("/mylist");
}

export async function getList() {
  // console.log("id ",userId)

  const user = await currentUser();

  const list = db.movie.findMany({
    where: {
      userId: user?.id,
    },
  });

  return list;
}

export async function initialProfile() {
  // export const initialProfile = async () => {
  // const { isLoaded, isSignedIn, user } = useUser();
  // const { userId } = auth();

  //  console.log("id = ",userId)
  // const { isLoaded, isSignedIn, user } = useUser();

  const user = await currentUser();

  // const { isLoaded, isSignedIn, user } = useUser();

  if (!user) {
    return auth().redirectToSignIn();
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
}

export async function check(userId, id) {
  console.log(userId, id);

  const id1 = "" + id;

  const res = await db.movie.findMany({
    where: {
      id: id1,
      userId,
    },
  });

  console.log(res);

  if (res.length === 0) return false;

  return true;
}
