import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRouter } from "expo-router"; // 👈 import router
import { RestaurantHeader } from "./RestaurantHeader";
import { RestaurantInfo } from "./RestaurantInfo";
import { DishGrid } from "./DishGrid";
import ItineraryFooter from "../FoodIternary/ItineraryFooter";

const MainDishesMenu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const router = useRouter(); // 👈 initialize router

  const handleAddDish = (dishName: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishName) ? prev : [...prev, dishName]
    );
  };

  const handleNavigate = () => {
    if (selectedDishes.length > 0) {
      //router.push("/iternarylist"); // 👈 replace with actual route
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.inner}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <RestaurantHeader
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <RestaurantInfo />
            <DishGrid filter={searchQuery} onAddDish={handleAddDish} />
          </ScrollView>

          {/* Fixed Add to List Button */}
          <View style={styles.addToListWrapper}>
            <TouchableOpacity
              style={[
                styles.addToListButton,
                {
                  backgroundColor: selectedDishes.length
                    ? "#0891B2"
                    : "#7ABFC7",
                },
              ]}
              disabled={selectedDishes.length === 0}
              onPress={handleNavigate}
            >
              <Text style={styles.addToListText}>Added to List</Text>
            </TouchableOpacity>
          </View>

          {/* Footer below the Add to List button */}
          <View style={styles.footer}>
            <ItineraryFooter />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MainDishesMenu;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 180,
    paddingHorizontal: 16,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  addToListWrapper: {
    position: "absolute",
    bottom: 80,
    left: 16,
    right: 16,
    alignItems: "center",
  },
  addToListButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    elevation: 3,
  },
  addToListText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
