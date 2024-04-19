import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { app } from "./firebase";
import { userStore } from "@store";
import { getUserData } from "./cloud-firestore";

const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const data = await getUserData(user.uid);

    userStore.set(data);
  } else {
    userStore.set(null);
  }
})

export async function signUpNewUser(email: string, password: string) {
  const response = await createUserWithEmailAndPassword(auth, email, password)
    .then((res) => res)
    .catch((err) => err)

  return response;
}

export async function userSignIn(email: string, password: string) {
  const response = await signInWithEmailAndPassword(auth, email, password)
    .then((res) => res)
    .catch((err) => err)

  return response;
}

export async function userSignOut() {
  const response = await signOut(auth)
    .then((res) => res)
    .catch((err) => err)

  return response;
}