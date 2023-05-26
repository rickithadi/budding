import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import { Card } from "../common/components/Card";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

export const SwipeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          // Swiped right
          forceSwipe("right");
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          // Swiped left
          forceSwipe("left");
        } else {
          // Reset position
          resetPosition();
        }
      },
    })
  ).current;

  const forceSwipe = (direction: "left" | "right") => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction: "left" | "right") => {
    // Perform action based on swipe direction
    // For example, update data, add to favorites, etc.
    setCurrentIndex(currentIndex + 1);
    resetPosition();
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };
  const renderCards = () => {
    return data.map((item, index) => {
      if (index < currentIndex) {
        return null;
      } else if (index === currentIndex) {
        return (
          <Animated.View
            key={item.id}
            style={[styles.card, getCardStyle()]}
            {...panResponder.panHandlers}
          >
            <Card name={item.name} image={item.image} />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[styles.card, { top: 10 * (index - currentIndex) }]}
          >
            <Card name={item.name} image={item.image} />
          </Animated.View>
        );
      }
    });
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  return <View style={styles.container}>{renderCards()}</View>;
};

const data = [
  {
    id: "1",
    name: "John",
    image: "https://picsum.photos/200 ",
  },
  {
    id: "2",
    name: "Sarah",
    image: "https://picsum.photos/200 ",
  },
  // Add more data objects as needed
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    width: "90%",
    height: "80%",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 4,
  },
});
