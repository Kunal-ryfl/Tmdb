"use server";
import { db } from "../lib/db";
import { revalidatePath } from 'next/cache'
export async function add(userId, movieId) {
  const mid = "" + movieId;

  const check = db.movie.findMany({
    where: {
      id: mid,
      userId,
    },
  });

  // console.log((await check).length)
  // console.log(userId)

  if ((await check).length > 0) {
    return;
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

  const check = db.movie.findMany({
    where: {
      id: mid,
      userId,
    },
  });

  // console.log((await check).length)
  // console.log(userId)

  if ((await check).length == 0) {
    return;
  }

  const remove = await db.movie.delete({
    where: {
      id: mid,
      userId,
    },
  });

revalidatePath('/mylist')
}

export async function getList(userId) {
  
  // console.log(userId)

  const list = db.movie.findMany({
    where: {
      userId
    },
  });

  return list;
}
