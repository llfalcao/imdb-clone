import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Adds a new user to the database
async function storeUser(uid) {
  setDoc(doc(db, 'users', uid), {
    watchlist: [],
  });
}

// Retrieve current watchlist and add the new one
async function storeMovie(movieId) {
  const user = getAuth().currentUser;
  if (user === null) return;
  const usersRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(usersRef);
  if (docSnap.exists()) {
    const watchlist = docSnap.data().watchlist;
    setDoc(usersRef, { watchlist: watchlist.concat(movieId) });
  }
}

// Signs-in as guest
function signInAsGuest() {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(() =>
      onAuthStateChanged(auth, (user) => {
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

export { signInAsGuest, signOutUser, storeWatchlist, storeMovie };
