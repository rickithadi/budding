import React from "react";
import {  Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";


const Navbar = () => {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind(
        "flex items-center justify-between flex-wrap bg-[#5A716A] p-6 h-3 "
      )}>
      <Text>hi</Text>
    </View>
  );
};

export default Navbar;
