import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import ItineraryFooter from "../FoodIternary/ItineraryFooter";
import { CartIcon } from "../TripPrep/CartIcon";


const TripPrepScreen = () => {
  const router = useRouter();

  const buttons = [
    { label: "Weather", route: "/weathermain" },
    { label: "Clothing and Toileteries", route: "/clothingessentials" },
    { label: "Essentials", route: "/essentials" },
    { label: "Travel Hacks and Tips", route: "/langhacks" },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/db4ayioxs/image/upload/v1747239650/uploads/1747239650521-image.png.png",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Content wrapper */}
        <View style={styles.contentWrapper}>
          
          <View style={styles.topBar}>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => router.push("/lastiternary")}>
              <CartIcon />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.heading}>Trip Prep</Text>
            <Text style={styles.subheading}>
              Prepare for your trip with ease! Ensuring you’re all set for your
              adventure.
            </Text>

            <View style={styles.buttonContainer}>
              {buttons.map((btn, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => router.push(btn.route as any)}
                >
                  <Text style={styles.buttonText}>{btn.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* ✅ Fixed Footer */}
        <View style={styles.footerWrapper}>
          <ItineraryFooter />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    flex: 1,
    paddingBottom: 80, // space for footer to not overlap
  },
  topBar: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  scrollContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40, // extra bottom space for comfort
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  subheading: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 24,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#FEF2F2",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  footerWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TripPrepScreen;
