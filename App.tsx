import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import LoginScreen from "@/screens/LoginScreen";

import utilities from "./tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    </TailwindProvider>
  );
}
