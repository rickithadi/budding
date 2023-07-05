import Navbar from "@/common/components/elements/Navbar";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import {
  Text,
  Button,
  StatusBar,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTailwind } from "tailwind-rn";
import { Card } from "@/common/components/Card";
import { useLobby } from "@/providers/LobbyProvider";
import { Lobby } from "types";

const banner = require("../assets/images/banner.png") as string;
const yes = require("../assets/images/yes.svg") as string;
const no = require("../assets/images/no.svg") as string;

export const LobbyScreen = ({ route, navigation }: any) => {
  const insets = useSafeAreaInsets();
  const tailwind = useTailwind();
  const { lobbyId } = route.params;
  const [localLobby, setLocalLobby] = useState<Lobby | null>(null);
  const { getLobby, lobbyList } = useLobby()
  console.log(route)

  useEffect(() => {
    console.log('new lobby set', route.params.lobbyId)
    getLobby(route.params.lobbyId).then((lobby: any) => setLocalLobby(lobby))
  }, [route.params.lobbyId]);

  const nextLobby = () => {
    console.log('next')
    if (lobbyList) {
      const nextLobby = lobbyList[Math.floor(Math.random() * lobbyList.length)]
      navigation.setParams({ lobbyId: nextLobby.id })
    }
    // navigation.setParams({ lobbyId: 'tr26acdmnibnAG8a3bnR' })

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        backgroundColor: "#fafafa"
      }}
    >
      <Navbar navigation={navigation} />
      <Image
        source={localLobby?.photoUrl}
        style={tailwind("h-48 mx-4 my-6 rounded-2xl")}
        contentFit="cover"
      ></Image>
      <View style={tailwind("w-[100vw]")}>

        <Card headerDesc="Event details" headerText={localLobby?.title || ''} description="This is a short description of the event. This goes up to 2 lines. You can omit this description." showPenis vertical />
        <Card headerDesc="Question One" headerText="This is my answer to question 1. Yes, it’s a longer answer." paddingTop="8px" vertical />
        <Card headerDesc="Question Two" headerText="This is my answer to question 2." paddingTop="8px" vertical />
        <Card headerDesc="Question Three" headerText="This is my answer to qn 3. Here is a longer answer. It can go up to 3 lines." paddingTop="8px" vertical />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable>
          <Image
            source={yes}
            style={tailwind("h-20 w-20")}
          ></Image>
        </Pressable>

        <Pressable onPress={() => nextLobby()}>
          <Image
            source={no}
            style={tailwind("h-20 w-20")}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  penisContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
  },

  apart: {
    marginLeft: 16,
    marginRight: 16,
  },

  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 16,
    gap: 8,
    borderRadius: 16,

  },
  bottomContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 48,
    height: "fit-content",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 24,
  },
});
