import React from "react";
import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Image } from "expo-image";




type CardProps = {
  headerDesc: string;
  headerText: string;
  description?: string;
  paddingTop?: string;
  showPenis?: boolean;
  vertical?: boolean;
  eventDateLoc?: string;

};

export const Card = ({ headerDesc, headerText, description, paddingTop, eventDateLoc, showPenis, vertical }: CardProps) => {

  const clock = require("../../assets/images/clock.svg") as string;
  const people = require("../../assets/images/people.svg") as string;

  const tailwind = useTailwind();
  return (
    <View
      style={[vertical ?
        styles.vertical :
        styles.horizontal,
      { paddingTop: paddingTop ? paddingTop : "0px" }

      ]}
    // style={{ ...styles.apart, paddingTop,flex} }
    >


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
            {eventDateLoc}
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
    </View >
  );
};

const styles = StyleSheet.create({
  penisContainer: {
    // flex: 1,
    flexDirection: "row",
    gap: 4,
  },

  apart: {
    marginLeft: 16,
    marginRight: 16,
  },

  vertical: {
    marginLeft: 16,
    marginRight: 16,
  },

  horizontal: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
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
    height: "fit-content",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 24,
  },
});
