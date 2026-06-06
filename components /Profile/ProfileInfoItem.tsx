"use client";
import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProfileInfoItemProps {
  icon: ReactNode;
  title: string;
  value: ReactNode;
}

const ProfileInfoItem: React.FC<ProfileInfoItemProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        {typeof value === "string" ? (
          <Text style={styles.value}>{value}</Text>
        ) : (
          value
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  iconContainer: {
    flexShrink: 0,
  },
  contentContainer: {
    flexDirection: "column",
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  value: {
    fontSize: 20,
  },
});

export default ProfileInfoItem;
