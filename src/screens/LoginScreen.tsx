import React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const logo = require("../assets/images/logo.svg") as string;

const LoginScreen = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind(" items-center bg-[#FAFAFA] h-screen")}>
      <Image
        source={logo}
        style={tailwind("w-24 h-full  m-auto")}
        contentFit="contain"
      ></Image>
      <Text style={tailwind("text-[#5A716A] font-semibold p-12")}>Continue</Text>
    </View>
  );
};

export default LoginScreen;
