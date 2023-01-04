import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebase = initializeApp({
    // add use firebase config here
});

export const auth = getAuth(firebase);
