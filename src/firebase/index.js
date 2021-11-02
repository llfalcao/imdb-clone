import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Adds a new user to the database
async function storeUser(uid) {
  setDoc(doc(db, 'users', uid), {
    watchlist: [],
  });
}

// Signs-in as guest
function signInAsGuest() {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(() =>
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        if (user) {
          const uid = user.uid;
          storeUser(uid);
        }
      }),
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

// Signs-out of Firebase
function signOutUser() {
  signOut(getAuth());
}

// Saves the user watchlist
async function storeWatchlist(uid, watchlist) {
  setDoc(doc(db, 'users', uid), {
    watchlist,
  });
}

export { signInAsGuest, signOutUser, storeWatchlist };
