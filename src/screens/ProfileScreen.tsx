import React from "react";
import { Image } from "expo-image";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "@/providers/AuthProvider";
import Navbar from "@/common/components/elements/Navbar";
import { Card } from "@/common/components/Card";

const logo = require("../assets/images/logo.svg") as string;
const connection = require("../assets/images/connection.svg") as string;

export const ProfileScreen = () => {
  const tailwind = useTailwind();
  const { currentUser } = useAuth();
  console.log(currentUser)
  return (
    <View style={tailwind(" items-center bg-[#FAFAFA] h-screen")}>

      <Navbar />

      <View style={styles.userInfo}>
        <Image
          source={currentUser.photoURL}
          style={tailwind("h-24 w-24 rounded-full mb-4")}
          contentFit="fill"
        ></Image>

        <Image
          source={connection}
          style={tailwind("h-6 w-6 mb-2")}
          contentFit="fill"
        ></Image>

        <Text style={tailwind("font-NunitoSans text-[#5A716A] text-[24px] font-bold capitalize pb-2")}>
          {currentUser.displayName}
        </Text>
      </View>

      <Text style={tailwind("font-NunitoSans text-[#5A716A] text-[14px] font-light")}>
          14km away from you
        </Text>

        <Card headerDesc="Question One" headerText="This is my answer to question 1. Yes, it’s a longer answer." paddingTop="8px" />
      </View>

  );
};



const styles = StyleSheet.create({
  userInfo: {
    paddingTop: 32,
    alignItems: 'center',
  },

});
export default ProfileScreen;

