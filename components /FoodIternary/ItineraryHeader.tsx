import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CategorySelector from "./CategorySelector";
import { useTripStore } from "../../store/tripStore"; // Adjust path

const ItineraryHeader = () => {
  const destination = useTripStore((state) => state.destination);

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text style={styles.greeting}>Hi Amy 👋</Text>
        <Text style={styles.destinationLabel}>Destination</Text>
        <View style={styles.locationRow}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/db4ayioxs/image/upload/v1747223573/uploads/1747223573099-loc.PNG.png",
            }}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText}>{destination || "Select destination"}</Text>
        </View>
        <Text style={styles.categoryTitle}>Categories:</Text>
        <CategorySelector />
      </View>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5ff930da24db279f413006c3316f223e5e35d3c",
        }}
        style={styles.profile}
      />
    </View>
  );
};

export default ItineraryHeader;


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingRight: 32,
    paddingBottom: 12,
    paddingLeft: 16,
    backgroundColor: "#FBE6DC",
  },
  left: {
    flex: 1,
    marginTop: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  destinationLabel: {
    marginTop: 20,
    color: "#52525b",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  locationIcon: {
    width: 12,
    height: 15,
    marginRight: 6,
  },
  locationText: {
    color: "#27272a",
    fontWeight: "600",
  },
  categoryTitle: {
    marginTop: 48,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  profile: {
    width: 55,
    height: 63,
    borderRadius: 72,
  },
});
