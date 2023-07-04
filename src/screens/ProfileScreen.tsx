import React from "react";
import { Image } from "expo-image";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "@/providers/AuthProvider";
import Navbar from "@/common/components/elements/Navbar";
import { Card } from "@/common/components/Card";

const logo = require("../assets/images/logo.svg") as string;
const connection = require("../assets/images/connection.svg") as string;

export const ProfileScreen = ({ navigation }: any) => {
  const tailwind = useTailwind();
  const { currentUser } = useAuth();
  console.log(currentUser)
  return (
    <View style={tailwind(" items-center bg-[#FAFAFA] h-screen")}>

      <Navbar navigation={navigation} />

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

        <Text style={tailwind("font-NunitoSans text-[#5A716A] text-[14px] font-light")}>
          14km away from you
        </Text>
      </View>

<View style={tailwind("mx-4")}>
      <View>
        <Card headerDesc="Bio" headerText="This is my bio. How long can it be? No idea." paddingTop="24px" />
      </View>

      <View style={styles.miniCards}>
        <Card headerDesc="Events attended" headerText="2"  />
        <Card headerDesc="Events hosted" headerText="12"  />
        <Card headerDesc="Mutual interests" headerText="9"  />
      </View></View>
      </View>
  );
};



const styles = StyleSheet.create({
  userInfo: {
    paddingTop: 32,
    alignItems: 'center',
  },

  miniCards: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 16,
    gap:16
  },

});
export default ProfileScreen;

