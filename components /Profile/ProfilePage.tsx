"use client";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import ProfileHeader from "./ProfileHeader";
import ProfilePicture from "./ProfilePicture";
import ProfileInfoItem from "./ProfileInfoItem";
import LogoutButton from "./LogoutButton";
import LocationIcon from "./LocationIcon";

interface ProfilePageProps {
  onRequestLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onRequestLogout }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/53a7b4bd-6277-4c0d-b57a-99916a40c92c",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileHeader />
        <ProfilePicture />

        <View style={styles.infoBox}>
          <ProfileInfoItem
            icon={
              <Image
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b88cf7a9c05a4440b6838e0f57a2f9d392ba710",
                }}
                style={styles.icon}
              />
            }
            title="Name"
            value="Amy Young"
          />

          <ProfileInfoItem
            icon={
              <Image
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0986476b81d45e081d1481c35d56ab8435696a15",
                }}
                style={styles.icon}
              />
            }
            title="E-Mail"
            value="amy@123.com"
          />

          <ProfileInfoItem
            icon={<LocationIcon />}
            title="Previous Trips"
            value={
              <>
                <Text style={styles.valueText}>
                  <Text>• </Text>
                  <Text style={styles.underlineText}>Bangalore</Text>
                </Text>
                <Text style={styles.valueText}>
                  <Text>• </Text>
                  <Text style={styles.underlineText}>Chennai</Text>
                </Text>
              </>
            }
          />
        </View>

        <View style={styles.logoutContainer}>
          <LogoutButton onLogoutPress={onRequestLogout} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 120,
    paddingTop: 40,
  },
  infoBox: {
    marginTop: 40,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    borderRadius: 16,
    borderColor: "#000",
    borderWidth: 1,
    width: "85%",
    alignItems: "center",
    gap: 24,
  },
  icon: {
    width: 37,
    height: 40,
    marginRight: 10,
  },
  valueText: {
    fontSize: 20,
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  logoutContainer: {
    marginTop: 32,
  },
});

export default ProfilePage;
