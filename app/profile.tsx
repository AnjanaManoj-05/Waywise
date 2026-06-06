"use client";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ItineraryFooter from "../components /FoodIternary/ItineraryFooter";
import ProfilePage from "../components /Profile/ProfilePage";

const ProfileScreen: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    router.replace("/onboarding");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://media-hosting.imagekit.io/443cd845399f41d8/bgg.PNG?Expires=1841940880&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ochiN0EJNJuKt8wDmDfwNMuRAie9hRnOjjlsQ9ekQpvN8uy4w1SkfzNf3rXPWxF4NveJWYTLwnE5TCSg79RstPAPaOOFArNxt-fIYqF3bgjjAw~Z7YqKRwpzrJhxjwA15YjKUuh-qSDMBUCyRlQN7zuos9QCgFiLzQAWhHOOPSShHBp9TyZKBZC7NFzSY3chdpL~2WFdTWkT7kxH3ExmlQ5-AsVQ2XnRJ-ZNwJbHHohpxlRLWP8TU8VG-fqM3V~fvxNWNr8Gz8RMmvY43-~F6f1iCictnLYnBDD6NhGTOsUnOg2KtG1I2XmUEJG5DQvBJPckQqVSNqPxd~yhtItBaA__",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ProfilePage onRequestLogout={() => setShowLogoutModal(true)} />

        <View style={styles.footer}>
          <ItineraryFooter />
        </View>

        <Modal transparent visible={showLogoutModal} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Confirm Log Out?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setShowLogoutModal(false)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.okButton]}
                  onPress={handleConfirmLogout}
                >
                  <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
     // Optional light overlay for contrast
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 24,
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 24,
    fontWeight: "600",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 16,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#e5e7eb",
  },
  okButton: {
    backgroundColor: "#f87171",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
