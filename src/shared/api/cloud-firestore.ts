import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";

import { app } from "./firebase";

export const db = getFirestore(app);

export async function getUserData(uid: string) {
  const usersRef = collection(db, 'users-data');
  const q = query(usersRef, where('uid', '==', uid));
  const user = (await getDocs(q)).docs.at(0)?.data() as TUserData;

  return user;
}

export async function setUserData(uid: string, data: TUserData) {
  await setDoc(doc(db, 'users-data', uid), { ...data });
}

export async function getUserCalendar(uid: string) {
  const docRef = doc(db, 'calendars', uid);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  return data ? data as TUserCalendar : null;
}