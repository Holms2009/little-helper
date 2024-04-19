import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

import { app } from "./firebase";

export const db = getFirestore(app);

export async function getUserData(uid: string) {
  const usersRef = collection(db, 'users-data');
  const q = query(usersRef, where('uid', '==', uid));
  const user = (await getDocs(q)).docs.at(0)?.data() as TUserData;

  return user; 
}