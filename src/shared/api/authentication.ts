import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { app } from "./firebase";

export const auth = getAuth(app);

export async function signUpNewUser(email: string, password: string) {
  const response = await createUserWithEmailAndPassword(auth, email, password);

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