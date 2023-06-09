import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";

import utilities from "./tailwind.json";
import React from "react";
import { useFonts } from "expo-font";
import { AuthProvider } from "@/providers/AuthProvider";
import Routing from "@/Routing";
import LoginScreen from "@/screens/LoginScreen";
import { LobbyProvider } from "@/providers/LobbyProvider";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Khmer: require("@/assets/fonts/Khmer\ MN.ttc"),
  // });
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <AuthProvider>
          <LobbyProvider>
            <Routing />
          </LobbyProvider>
        </AuthProvider>
      </SafeAreaView>
    </TailwindProvider>
  );
}
