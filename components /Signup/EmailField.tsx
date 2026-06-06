import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

function EmailField() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          defaultValue="amy@123"
          keyboardType="email-address"
        />
        
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#71717a", // zinc-600
  },
  inputContainer: {
    flexDirection: "row",
    gap: 40, // gap-10
    marginTop: 8, // mt-2
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16, // text-base
    color: "#1c1917", // stone-900
    padding: 0,
  },
  icon: {
    width: 20, // w-5
    aspectRatio: 1,
  },
  divider: {
    alignSelf: "stretch",
    marginTop: 10, // mt-2.5
    height: 1,
    borderWidth: 1,
    borderColor: "#0891b2", // cyan-600
  },
});

export default EmailField;
