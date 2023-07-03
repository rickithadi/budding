import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";



type CardProps = {
  headerDesc: string;
  headerText: string;
  description?: string;
  paddingTop?: string;
  showPenis?: boolean;

};

export const Card = ({ headerDesc, headerText, description, paddingTop, showPenis }: CardProps) => {
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
