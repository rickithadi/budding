import { Text } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  getLobbyById,
  getAllLobbies,
  noToLobbyFirebase,
  yesToLobbyFirebase,
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

  const yesToLobby = (
    lobbyId: string,
    userId: string
  ) => yesToLobbyFirebase(lobbyId, userId);

  const noToLobby = (
    lobbyId: string,
    userId: string
  ) => noToLobbyFirebase(lobbyId, userId);

  useEffect(() => {
    const getLobbiesOnRender = async () => {
      console.log('getting lobbies in provider')
      const lobbies = await getAllLobbies();
      await setLobbyList(lobbies);
      setLobbyLoading(false)
    };
    getLobbiesOnRender();
  }, []);
  const value = {
    getLobby,
    getLobbies,
    yesToLobby,
    noToLobby,
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
