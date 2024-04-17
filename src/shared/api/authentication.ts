import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { app } from "./firebase";

const auth = getAuth(app);

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