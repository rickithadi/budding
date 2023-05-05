import React from "react";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
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

      <Pressable>
        <Text
          style={tailwind(
            "font-Khmer underline text-[16px] text-[#5A716A]  p-12 "
          )}
        >
          Continue
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
