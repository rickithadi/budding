import React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

import logo from '../../public/logo.svg'

const LoginScreen = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind(" items-center bg-[#FAFAFA] h-screen")}>
      <View style={tailwind(" m-auto")}>
        <Image
          source={logo}
          style={tailwind("w-16 h-16 p-12")}
          contentFit="cover"
        ></Image>
      </View>
      <Text style={tailwind("text-blue-800 font-semibold")}>
        Hello Tailwind
      </Text>
    </View>
  );
};

export default LoginScreen;
