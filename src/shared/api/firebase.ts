import { initializeApp, type FirebaseOptions } from "firebase/app";

const initConfig: FirebaseOptions = {
  apiKey: "AIzaSyB6t9lC8xeTjFN8jl6-j_Wab2S6LIZ0LeE",
  authDomain: "little-helper-89a32.firebaseapp.com",
  projectId: "little-helper-89a32",
  storageBucket: "little-helper-89a32.appspot.com",
  messagingSenderId: "755908623331",
  appId: "1:755908623331:web:b0e9b62c41df5206bcbed6",
  measurementId: "G-1XWXH1HELP"
}

export const app = initializeApp(initConfig);
