import React, { useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Animated,
} from "react-native";
import { ItineraryHeader } from "./ItineraryHeader";
import { DaySection } from "./DaySection";
import { useRouter } from "expo-router";

export const ItineraryCard: React.FC = () => {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const day1Activities = {
    morning: ["Scrumptious breakfast at Rameshwaram cafe", "Visit Ulsoor lake"],
    afternoon: [
      "Walk through the historical Bangalore Palace",
      "Lalit Ashok",
      "-Margarita Pizza", "Grilled Fish",
      "Visit Garuda Mall for shopping",
    ],
    evening: ["Peaceful visit to Sankey Tank", "Coffee break at JustBe Cafe"],
  };

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/73a93131dde859121269ba27e6b7212dd05af26a?placeholderIfAbsent=true&apiKey=7ceb83e8066846e7bc013a848d89dcd3",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <ItineraryHeader
          title="Amy's Itinerary"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/31fc0d493144ca6eb8c96c00c545b040001afe34?placeholderIfAbsent=true&apiKey=7ceb83e8066846e7bc013a848d89dcd3"
        />

        <View style={styles.content}>
          <DaySection
            dayNumber={1}
            activities={day1Activities}
          />
        </View>

        {/* Floating orange button */}
        <Animated.View style={[styles.floatingButtonContainer, { transform: [{ scale: scaleAnim }] }]}>
          <Pressable
            onPress={() => router.push("/tripprep")}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.8 },
            ]}
          >
            <Text style={styles.buttonText}>Next Steps: Trip Prep</Text>
          </Pressable>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    aspectRatio: 0.48,
    maxWidth: 480,
    alignSelf: "center",
    borderRadius: 24,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    paddingBottom: 112,
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 80,
    width: "100%",
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f97316",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default ItineraryCard;
