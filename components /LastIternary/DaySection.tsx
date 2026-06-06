import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ItineraryList } from "./ItineraryList";

interface DaySectionProps {
  dayNumber: number;
  activities: {
    morning: string[];
    afternoon: string[];
    evening: string[];
  };
  additionalItems?: string[];
}

export const DaySection: React.FC<DaySectionProps> = ({
  dayNumber,
  activities,
  additionalItems,
}) => {
  const sections = [
    { title: "Morning:", items: activities.morning },
    { title: "Afternoon:", items: activities.afternoon },
    { title: "Evening:", items: activities.evening },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dot} />
        <Text style={styles.dayText}>Day {dayNumber}</Text>
      </View>
      <View style={styles.content}>
        <ItineraryList sections={sections} additionalItems={additionalItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 32,
  },
  dot: {
    width: 23,
    height: 23,
    backgroundColor: "#f97316",
    borderRadius: 11.5,
    marginTop: 12,
    flexShrink: 0,
  },
  dayText: {
    fontSize: 24,
    fontWeight: "800",
  },
  content: {
    marginTop: 16,
    
  },
});
