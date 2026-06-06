import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ItineraryDay } from "./ItineraryDay";
import { ActionButtons } from "./ActionButtons";

export function TimelineContent() {
  const [items, setItems] = useState([
    "Scrumptious breakfast at Rameshwaram cafe",
    "Visit Ulsoor lake",
    "Walk through the historical Bangalore Palace",
    "Lalit Ashok",
    "- Margarita Pizza",
    "Grilled Fish",
    "Visit Garuda Mall for shopping",
    "Peaceful visit to Sankey Tank",
    "Coffee break at JustBe Cafe",
  ]);

  const [deleted, setDeleted] = useState<string[]>([]);

  const toggleDelete = (item: string) => {
    setDeleted(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleAddToList = () => {
    setItems(prev => prev.filter(item => !deleted.includes(item)));
    setDeleted([]); // clear delete markers
  };

  return (
    <View style={styles.container}>
      <ItineraryDay
        items={items}
        deletedItems={deleted}
        onToggleDelete={toggleDelete}
      />
      <ActionButtons onAddToList={handleAddToList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
});
