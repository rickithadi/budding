import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import LoginScreen from "@/screens/LoginScreen";

import utilities from "./tailwind.json";
import React from "react";
import Navbar from "@/common/components/elements/NavBar";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <Navbar/>
        <LoginScreen />
      </SafeAreaView>
    </TailwindProvider>
  );
}
