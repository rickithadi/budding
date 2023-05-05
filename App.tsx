import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import LoginScreen from "@/screens/LoginScreen";

import utilities from "./tailwind.json";
import React from "react";
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Khmer': require('@/assets/fonts/Khmer MN.ttc'),
  });
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    </TailwindProvider>
  );
}
