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
const clock = require("../assets/images/clock.svg") as string;
const people = require("../assets/images/people.svg") as string;
const yes = require("../assets/images/yes.svg") as string;
const no = require("../assets/images/no.svg") as string;

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const tailwind = useTailwind();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        backgroundColor: "#fafafa"
      }}
    >
      <Navbar />

      <Image
          source={banner}
          style={tailwind("h-48 mx-4 my-6 rounded-2xl")}
          contentFit="fill"
        ></Image>

      <View style={tailwind("w-[100vw]")}>

        <Card headerDesc="Event details" headerText="Alcohol X Tech 🍻" description="This is a short description of the event. This goes up to 2 lines. You can omit this description." showPenis/>
        <Card headerDesc="Question One" headerText="This is my answer to question 1. Yes, it’s a longer answer." paddingTop="8px" />
        <Card headerDesc="Question Two" headerText="This is my answer to question 2." paddingTop="8px" />
        <Card headerDesc="Question Three" headerText="This is my answer to qn 3. Here is a longer answer. It can go up to 3 lines." paddingTop="8px" />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable>
          <Image
            source={yes}
            style={tailwind("h-20 w-20")}
          ></Image>
        </Pressable>

        <Pressable>
        <Image
            source={no}
            style={tailwind("h-20 w-20")}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
};

type CardProps = {
  headerDesc: string;
  headerText: string;
  description?: string;
  paddingTop?: string;
  showPenis?: boolean;

};

const Card = ({ headerDesc, headerText, description, paddingTop, showPenis }: CardProps) => {
  const tailwind = useTailwind();
  return (
    <View style={{ ...styles.apart, paddingTop }}>
      <View style={styles.card}>
        <Text style={tailwind("font-NunitoSans text-[#5A716A] text-[12px] font-normal uppercase")}>
          {headerDesc}
        </Text>
        <Text style={tailwind("font-PlayfairDisplay text-[#222222] text-[24px] font-normal")}>
          {headerText}

        </Text>
        {description &&
        <Text style={tailwind("font-NunitoSans text-[#222222] text-[14px] font-extralight")}>
          {description}
        </Text>}

        {showPenis && <>
        <View
          style={styles.penisContainer}>
          <Image
            source={clock}
            style={tailwind("h-4 w-4")}
            contentFit="fill"
          ></Image>
          <Text style={tailwind("font-NunitoSans text-[#222222] text-opacity-80 text-[14px] font-extralight h-4")}>
            23 Jun (Tue), 8.00pm at Tara’s Pub
          </Text>
        </View>
        <View
          style={styles.penisContainer}>
          <Image
            source={people}
            style={tailwind("h-4 w-4")}
            contentFit="fill"
          ></Image>
          <Text style={tailwind("font-NunitoSans text-[#222222] text-opacity-80 text-[14px] font-extralight h-4")}>
            ~5 going
          </Text>
        </View>
        </>}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  penisContainer: {
      flex: 1,
      flexDirection: "row",
    gap: 4,
  },

  apart: {
    marginLeft: 16,
    marginRight: 16,
  },

  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 16,
    gap: 8,
    borderRadius: 16,

  },
  bottomContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 48,
    height:"fit-content",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 24,
  },
});
