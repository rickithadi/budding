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
    <View>
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
