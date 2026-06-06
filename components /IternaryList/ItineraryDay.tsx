import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function ItineraryDay({
  items,
  deletedItems,
  onToggleDelete,
}: {
  items: string[];
  deletedItems: string[];
  onToggleDelete: (item: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.dayTitle}>Day 1</Text>
      <View style={styles.content}>
        {items.map((item, index) => (
          <View key={index} style={styles.row}>
            <TouchableOpacity onPress={() => onToggleDelete(item)}>
              <Text style={styles.deleteIcon}>
                {deletedItems.includes(item) ? "❌" : "⬜"}
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.sectionText,
                deletedItems.includes(item) && { textDecorationLine: "line-through", opacity: 0.5 },
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  dayTitle: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
  },
  content: {
    marginTop: 14,
  },
  sectionText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginVertical: 2,
    paddingLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteIcon: {
    fontSize: 18,
    color: "#EF4444", // red
  },
});
