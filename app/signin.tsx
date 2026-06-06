// app/signin.tsx
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { EmailField } from "../components /Signin/EmailField";
import { PasswordField } from "../components /Signin/PasswordField";
import { SignInButton } from "../components /Signin/SignInButton";
import { UserAvatar } from "../components /Signin/UserAvatar";

function SignIn() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back!</Text>
          </View>
          <View style={styles.formContainer}>
            <UserAvatar />
            <EmailField />
            <PasswordField />
            <SignInButton /> {/* ✅ Uses internal navigation */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 1,
  },
  container: {
    padding: 24,
    paddingTop: 64,
    paddingBottom: 128,
    backgroundColor: "#FBE6DC",
    borderRadius: 24,
    borderWidth: 3,
    borderColor: "#1c1917",
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
  },
  header: {
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 32,
    paddingTop: 48,
    paddingBottom: 112,
    marginTop: 16,
    width: "100%",
    alignItems: "center",
  },
});

export default SignIn;
