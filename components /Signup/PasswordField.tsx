import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function PasswordField() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Enter your password"
        defaultValue="********"
      />
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#71717a",
  },
  input: {
    fontSize: 16,
    color: "#1c1917",
    marginTop: 8,
    padding: 0,
  },
  divider: {
    alignSelf: "stretch",
    marginTop: 10,
    height: 1,
    borderWidth: 1,
    borderColor: "#0891b2",
  },
});

export default PasswordField;
