import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export async  function doCreateUserWithEmailAndPassword(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}

export async function doSignInWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function doSignOut() {
    return auth.signOut();
}