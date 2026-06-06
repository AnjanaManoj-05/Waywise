// components/Signin/SignInButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export const SignInButton: React.FC = () => {
  const handlePress = () => {
    router.push("/createtrip"); // 👈 Matches app/createtrip.tsx
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 64,
    paddingVertical: 14,
    marginTop: 64,
    backgroundColor: "#0891b2",
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
