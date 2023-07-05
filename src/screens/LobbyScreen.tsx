import Navbar from "@/common/components/elements/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "expo-image";
import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTailwind } from "tailwind-rn";
import { Card } from "@/common/components/Card";
import { useLobby } from "@/providers/LobbyProvider";
import { Lobby } from "types";
import { DateTime } from "luxon";

const yes = require("../assets/images/yes.svg") as string;
const no = require("../assets/images/no.svg") as string;

export const LobbyScreen = ({ route, navigation }: any) => {
  const insets = useSafeAreaInsets();
  const tailwind = useTailwind();
  const { lobbyId } = route.params;
  const [localLobby, setLocalLobby] = useState<Lobby | null>(null);
  const { getLobby, lobbyList } = useLobby();
  const scrollRef = useRef();

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

// @ts-ignore
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });

  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} ref={scrollRef as any}>  
        <Navbar navigation={navigation} />
        <Image
          source={localLobby?.photoUrl}
          style={tailwind("h-48 mx-4 my-6 rounded-2xl")}
          contentFit="cover"
        ></Image>

        {localLobby &&
          <View style={tailwind("w-[100vw]")}>
            <Card headerDesc="Event details" headerText={localLobby?.title || ''} description={localLobby?.description || ''} eventDateLoc={`${DateTime.fromISO(
              new Date(localLobby.eventDate.toDate()).toISOString()
            ).toFormat("dd LLL (EEE), t")} at ${localLobby.eventLocation}`} showPenis vertical />
            <Card headerDesc={localLobby?.questionOne || ''} headerText={localLobby?.answerOne || ''} paddingTop="8px" vertical />
            <Card headerDesc={localLobby?.questionTwo || ''} headerText={localLobby?.answerTwo || ''} paddingTop="8px" vertical />
            <Card headerDesc={localLobby?.questionThree || ''} headerText={localLobby?.answerThree || ''} paddingTop="8px" vertical />
          </View>}
      </ScrollView>

<View style={styles.floatingButton}>
      <Pressable onPress={() => nextLobby()}>
        <Image
          source={no}
          style={tailwind("h-20 w-20")}
        ></Image>
      </Pressable>

      <Pressable onPress={() => nextLobby()}>
      <Image
        source={yes}
        style={tailwind("h-20 w-20")}
      ></Image>
    </Pressable>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100vh",
    height: "100vh",
    minWidth: "100vw",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fafafa",
    paddingBottom: 60, // Adjust this value to provide space for the floating button
  },

  floatingButton: {
    position: 'absolute',
    bottom: 20, // Adjust this value to set the vertical position of the button
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    gap: 48,
    elevation: 5, // Add elevation for shadow on Android
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

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
});
