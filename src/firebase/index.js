import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Loads watchlist
async function getWatchlist(user) {
  let docSnap = await getDoc(doc(db, 'users', user.uid));
  if (docSnap.data() === undefined) return [];
  return docSnap.data().watchlist;
}

// Retrieves current watchlist and add the new one
async function storeMovie(user, id) {
  const watchlist = await getWatchlist(user);
  const found = watchlist.some((movie) => movie === id);
  if (!found) {
    setDoc(doc(db, 'users', user.uid), {
      watchlist: watchlist.concat(id),
    });
  } else {
    console.error('Movie already added to the watchlist.');
  }
}

// Removes movie from the watchlist
async function removeMovie(user, id) {
  let watchlist = await getWatchlist(user);
  const prev = watchlist.length;
  watchlist = watchlist.filter((item) => item !== id);

  if (watchlist.length < prev) {
    setDoc(doc(db, 'users', user.uid), {
      watchlist,
    });
  } else {
    console.error('Movie not found.');
  }
}

// Signs-out of Firebase
function signOutUser() {
  signOut(getAuth()).then(() => localStorage.removeItem('auth'));
}

// Saves the user watchlist
async function storeWatchlist(uid, watchlist) {
  setDoc(doc(db, 'users', uid), {
    watchlist,
  });
}

export { signOutUser, storeWatchlist, getWatchlist, storeMovie, removeMovie };
