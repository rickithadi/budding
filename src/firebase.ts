import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, User } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCUjod7TryOgaMwimsFhhf3RDhQkCXmgqY",
  // NOTE replace with vercel domain
  authDomain: "budding-app.firebaseapp.com",
  projectId: "budding-app",
  storageBucket: "budding-app.appspot.com",
  messagingSenderId: "851094054670",
  appId: "1:851094054670:web:b977b03def3cbb37ef195f",
  measurementId: "G-HC896VDHGM"
};


export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

auth.languageCode = "id";

export const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const createOrUpdateFirebaseUser = async (authUser: User) => {
  if (!authUser) return;
  const userRef = doc(db, "users", authUser.uid);
  const snapshot = await getDoc(userRef);
  const { email, displayName, photoURL, uid } = authUser;
  if (!snapshot.exists()) {
    const createdAt = serverTimestamp();
    try {
      await setDoc(userRef, {
        email,
        uid,
        displayName,
        photoURL,
        createdAt,
      });
    } catch (e: any) {
      console.log("error creating user", e.message);
    }
  } else {
    const updatedAt = serverTimestamp();
    try {
      await updateDoc(userRef, {
        email,
        uid,
        displayName,
        photoURL,
        updatedAt,
      });
    } catch (e: any) {
      console.log("error updating user", e.message);
    }
  }
};
export const getLobbyById = async (id: string) => {
  const lobbyRef = doc(db, "lobbies", id);
  const lobbyDoc = await getDoc(lobbyRef);

  return lobbyDoc.data();
};
export const getAllLobbies = async () => {
  let lobbies: any = [];
  const lobbiesRef = await getDocs(collection(db, "lobbies"));
  lobbiesRef.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    lobbies.push({ data: doc.data(), id: doc.id });
  });
  return lobbies;
};
