import Navbar from "@/common/components/elements/Navbar";
import React from "react";
import { Image } from "expo-image";
import {
  Text,
  Button,
  StatusBar,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTailwind } from "tailwind-rn";

const banner = require("../assets/images/banner.png") as string;

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const tailwind = useTailwind();

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        backgroundColor: "#FAFAFA",
      }}
    >
      <View>
        <Text>fuck</Text>
      </View>
      <View>
        <Text>fuck</Text>
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <Text>fuck</Text>
      </View>
    </View>
    // <View
    //   style={{
    //     ...styles.container,
    //     paddingTop: insets.top,
    //     paddingLeft: insets.left,
    //     paddingBottom: insets.bottom,
    //     paddingRight: insets.right,
    //     backgroundColor: "#FAFAFA",
    //   }}
    // >
    //   <Navbar />
    //   <View>
    //     <Image
    //       source={banner}
    //       style={tailwind(" h-48 p-4")}
    //       contentFit="contain"
    //     ></Image>

    //     <View style={styles.apart}>
    //       <View style={styles.card}>
    //         <Text
    //           style={tailwind("font-Khmer text-[16px] text-[#5A716A]  p-2 ")}
    //         >
    //           Event Details
    //         </Text>
    //         <Text style={tailwind("font-Khmer text-[24px] pl-2 ")}>
    //           Alcohol X tech
    //         </Text>
    //         <Text style={tailwind("font-Khmer text-[16px] pl-2 ")}>
    //           this is a short description of asjhdasjh
    //         </Text>
    //       </View>
    //     </View>
    //   </View>
    //   <View style={styles.bottomContainer}>
    //     <Pressable>
    //       <Text>nah</Text>
    //     </Pressable>

    //     <Pressable>
    //       <Text>yeah</Text>
    //     </Pressable>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center",
  },
  apart: {
    justifyContent: "center",

    flex: 4,
    alignItems: "center",
    alignContent: "space-around",
  },
  card: {
    backgroundColor: "#FFFFFF",
    height: "20vh",
    width: "90%",
    alignContent: "space-around",
    padding: 10,
    justifyContent: "center",
  },
  bottomContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
    height: "20vh",
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
});
