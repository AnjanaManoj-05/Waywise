"use client";
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ProfilePicture: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7edc536dd6b338f5f04beacb225494b35582b091",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 36,
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 71.5,
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },
});

export default ProfilePicture;
