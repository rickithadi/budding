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
  measurementId: "G-HC896VDHGM",
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
  console.log("getting lob by id", id);
  const lobbyRef = doc(db, "lobbies", id);
  const lobbyDoc = await getDoc(lobbyRef);
  console.log(lobbyDoc.data());

  return lobbyDoc.data();
};
export const getAllLobbies = async () => {
  console.log("getting lobs");
  let lobbies: any = [];
  const lobbiesRef = await getDocs(collection(db, "lobbies"));
  lobbiesRef.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    lobbies.push({ data: doc.data(), id: doc.id });
  });
  return lobbies;
};
export const noToLobbyFirebase = async (
  lobbyId: string,
  userId: string
): Promise<User[] | undefined> => {
  const lobbyRef = doc(db, "lobbies", lobbyId);
  const lobbyDoc = await getDoc(lobbyRef);

  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);
  console.log("removing player", userDoc.data());
  console.log("manipulating lobby", lobbyDoc.data());

  if (!lobbyDoc.exists()) {
    console.log("no such lobby");
    return undefined;
  }

  const { players } = lobbyDoc.data() as Lobby;
  // TODO types
  const { joinedLobbies } = userDoc.data() as any;
  if (!joinedLobbies) {
    console.log(joinedLobbies);
    console.log("user does not have joined lobbies");
    return undefined;
  }

  const alreadyJoined = players.find((p: Player) => p.userId === userId);
  const joinedLobbyIndex = joinedLobbies.find(
    (userLobbyId: string) => userLobbyId === lobbyId
  );

  if (!alreadyJoined || !joinedLobbyIndex) {
    console.log("not yet joined");
    return undefined;
  }
  players.splice(players.indexOf(alreadyJoined), 1);
  joinedLobbies.splice(joinedLobbies.indexOf(joinedLobbyIndex), 1);
  try {
    await updateDoc(lobbyRef, {
      players,
    });
    await updateDoc(userRef, {
      joinedLobbies,
    });
  } catch (e: any) {
    console.log("error leaving lobby", e.message);
  }

  console.log("player removed succesfully", players);
  return players;
};
export const yesToLobbyFirebase = async (
  lobbyId: string,
  userId: string
): Promise<User[] | undefined> => {
  const lobbyRef = doc(db, "lobbies", lobbyId);
  const lobbyDoc = await getDoc(lobbyRef);

  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);
  const { email, photoURL, displayName }: any = userDoc.data();
  console.log("adding player", userDoc.data());
  console.log("manipulating lobby", lobbyDoc.data());

  if (!lobbyDoc.exists()) {
    console.log("no such lobby");
    return undefined;
  }
  const { players } = lobbyDoc.data() as Lobby;
  const alreadyJoined = players.find((p: Player) => p.userId === userId);

  if (alreadyJoined) {
    console.log("already joined");
    return undefined;
  }

  // TODO reenable paid to false before pushing
  const playerInsertion: Player = {
    paid: true,
    userId,
    email,
    photoURL,
    displayName,
  };
  players.push(playerInsertion);
  const joinedLobbies = [...userDoc?.data()?.joinedLobbies, lobbyId];

  console.log("new user joinedLobbies", joinedLobbies);
  console.log("new lobby players", players);
  try {
    await updateDoc(lobbyRef, {
      players,
    });
    await updateDoc(userRef, {
      joinedLobbies,
    });

    //update user with joined lobby id
  } catch (e: any) {
    console.log("error joining lobby", e.message);
  }
  console.log("player added succesfully", players);
  // update document

  return players;
};
