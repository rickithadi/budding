import { signInWithRedirect, User } from "firebase/auth";
import { Text } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, createOrUpdateFirebaseUser, provider } from "../firebase";

export const AuthContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(false);

  const getUser = () => auth.currentUser;

  const login = async () => {
    await signInWithRedirect(auth, provider);
  };
  const logout = async () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (!user) return setCurrentUser(null);
      await createOrUpdateFirebaseUser(user);
      await setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    getUser,
    login,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>
        {!loading && children}
        {loading && <Text> wait g</Text>}
      </AuthContext.Provider>
    </>
  );
};
