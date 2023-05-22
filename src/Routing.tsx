import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";

import { useAuth } from "./providers/AuthProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LobbyScreen } from "./screens/LobbyScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthedCombinedRoutes = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Lobby"
          options={{
            headerTransparent: false,
            headerShadowVisible:false,
            headerTitle: "Lobby Permainan",
            headerShown: true,
            headerTitleAlign: "center",
          }}
          component={LobbyScreen}
          getId={({ params }: any) => params?.lobbyId}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export const Routing = () => {
  const { currentUser } = useAuth();
  return currentUser ? <AuthedCombinedRoutes /> : <LoginScreen />;
};
export default Routing;
