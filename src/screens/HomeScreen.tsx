import Navbar from "@/common/components/elements/Navbar";
import React from "react";
import { Text, Button, StatusBar, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const options = {
    topBar: {
      animate: true,
      title: {},
      subtitle: {},
      backButton: {},
      background: {},
    },
  };
  console.log("home");
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
      }}
    >
      <Navbar />
      <Text>Light Screen</Text>
      <Button title="Next screen" color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
