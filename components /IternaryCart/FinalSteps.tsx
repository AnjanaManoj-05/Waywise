import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FoodIcon, CompassIcon, ShoppingIcon } from "./Icons";
import { ActivityCard } from "./ActivityCard";
import { ActivitySection } from "./ActivitySection";
import { TripHeader } from "./TripHeader";

interface FinalStepsProps {
  onConfirm: () => void;
}

const FinalSteps: React.FC<FinalStepsProps> = ({ onConfirm }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <TripHeader userName="Amy" />
      </View>

      <View style={styles.contentSection}>
        <ActivitySection title="Food:">
          <ActivityCard
            icon={<FoodIcon />}
            title="Food"
            subtitle="Rameshwaram Cafe - Morning"
            
          />
          <ActivityCard
            icon={<FoodIcon />}
            title="Food"
            subtitle="JustBe Cafe - Evening"
            
          />
        </ActivitySection>

        <ActivitySection title="Activities:">
          <ActivityCard
            icon={<CompassIcon />}
            title="Boating"
            subtitle="Ulsoor"
            
            iconBgColor="#14532D"
          />
        </ActivitySection>

        <ActivitySection title="Shopping:">
          <ActivityCard
            icon={<ShoppingIcon />}
            title="Garuda Mall"
            subtitle="Magrath Road"
            
            iconBgColor="#4C1D95"
          />
        </ActivitySection>

        <View style={styles.footer}>
          <View style={styles.divider} />
          
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 24,
    width: 390,
  },
  headerSection: {
    width: "100%",
    height: 360,
    backgroundColor: "#FBE6DC",
  },
  contentSection: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
  footer: {
    marginTop: "auto",
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "#D4D4D4",
    marginBottom: 10,
  },
  
  confirmButton: {
    marginLeft: "auto",
    backgroundColor: "#14532D",
    borderRadius: 12,
    height: 50,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default FinalSteps;
