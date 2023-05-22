import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image } from "expo-image";

// import { HomeScreen } from "./screens/HomeScreen";
// import { ProfileScreen } from "./screens/ProfileScreen";
// import { SearchScreen } from "./screens/SearchScreen";
import { useAuth } from "./providers/AuthProvider";
import LoginScreen from "./screens/LoginScreen";
import Navbar from "./common/components/elements/Navbar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SidebarMenu from "./common/components/elements/SidebarMenu";

const Drawer = createDrawerNavigator();

const AuthedRoutes = () => (
  <NavigationContainer>
    {/* <Navbar /> */}
    <Drawer.Navigator drawerContent={(props) => <SidebarMenu {...props} />}>
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);
export const Routing = () => {
  const { currentUser } = useAuth();
  return currentUser ? <AuthedRoutes /> : <LoginScreen />;
};
export default Routing;
