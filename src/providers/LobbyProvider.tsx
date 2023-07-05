import { Text } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  getLobbyById,
  getAllLobbies,
} from "../firebase";
import { Lobby } from "types";

export const LobbyContext = createContext<any>(null);

export const useLobby = () => {
  return useContext(LobbyContext);
};

export const LobbyProvider = ({ children }: any) => {
  const [lobbyList, setLobbyList] = useState<Lobby[] | []>();

  const [lobbyLoading, setLobbyLoading] = useState(false);
  const getLobby = (id: string) => getLobbyById(id);

  const getLobbies = () => getAllLobbies();
  
  const joinLobby = (id: string) => auth.currentUser;
  const leaveLobby = (id: string) => auth.currentUser;

  useEffect(() => {
    const getLobbiesOnRender = async () => {
      const lobbies = await getAllLobbies();
      await setLobbyList(lobbies);
      setLobbyLoading(false)
    };
    getLobbiesOnRender();
  }, []);
  const value = {
    getLobby,
    getLobbies,
    joinLobby,
    leaveLobby,
    lobbyList,
    setLobbyList,
    lobbyLoading,
    setLobbyLoading,
  };
  return (
    <>
      <LobbyContext.Provider value={value}>
        {!lobbyLoading && children}
        {lobbyLoading && <Text> wait g</Text>}
      </LobbyContext.Provider>
    </>
  );
};
