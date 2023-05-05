import React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const bud = require("../../../../public/bud.svg") as string;
const filters = require("../../../../public/filters.svg") as string;

const Navbar = () => {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind(
        "flex items-center justify-between flex-row bg-[#5A716A] p-6 h-12 p-2 "
      )}
    >
      <Image
        source={bud}
        style={tailwind("w-12 h-5")}
        contentFit="contain"
      ></Image>
      <Image
        source={filters}
        style={tailwind("w-12 h-5")}
        contentFit="contain"
      ></Image>
    </View>
  );
};

export default Navbar;
