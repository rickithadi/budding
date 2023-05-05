import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";

import utilities from "./tailwind.json";
import LoginScreen from "@/screens/LoginScreen";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    </TailwindProvider>
  );
}
