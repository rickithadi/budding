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
  apiKey: "AIzaSyCK1qHvj7xTN2r_3YhjWdkSRD8Be2TjpbE",
  authDomain: "playard-indo.firebaseapp.com",
  projectId: "playard-indo",
  storageBucket: "playard-indo.appspot.com",
  messagingSenderId: "174201647108",
  appId: "1:174201647108:web:156a8dd86a0aa904890551",
  measurementId: "G-3N2WX03X2P",
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
