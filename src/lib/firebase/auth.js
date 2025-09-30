import { auth } from "./firebase.js";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
updatePassword, sendEmailVerification } from "firebase/auth"

export async  function doCreateUserWithEmailAndPassword(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}

export async function doSignInWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function doSignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider)
}

export function doSignOut() {
    return auth.signOut();
}

export function doPasswordChange(password) {
    return updatePassword(auth.currentUser, password);
}

export function doSendEmailVerification() {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`
    });
}