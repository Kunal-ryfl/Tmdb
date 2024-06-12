
// import { currentUser, auth } from "@clerk/nextjs/server";
// import { useAuth,useUser } from "@clerk/nextjs";
// import { getAuth } from "@clerk/nextjs/server";
import { auth, currentUser } from "@clerk/nextjs/server";

import { db } from "../lib/db";

export const initialProfile = async () => {
  // const { isLoaded, isSignedIn, user } = useUser();
  // const { userId } = auth();

  //  console.log("id = ",userId)

  const user = await currentUser();

  // const { isLoaded, isSignedIn, user } = useUser();

  if (!user) {
    return auth().redirectToSignIn();
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  });

  return newProfile;
};