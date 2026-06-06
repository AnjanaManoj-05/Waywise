import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import EmailField from "./EmailField";
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import { useRouter } from "expo-router";

function PageLogin() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.topSpacer} />

          <Image
            source={{
              uri: "https://media-hosting.imagekit.io/602ef139d55643c6/ierg8egh.png?Expires=1841667880&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MsE1ZkJFcN1qfondGpVnZH1fRxezhV5UFUsSDJcO2B37G11ywzRX~gdIdtkCKpR7cIPT1QYj2bhTX3ITXW02YrUnxr5k-6-8Y5kUlsCbmnATiH4m695AYy6VztedBQTu8YSQD7yslPs65lpFQcgYJI3TMmqbBILDYmdcUiuHp3xeO3yvWsq21khw1O7PcoHsI6dIzWWUo5F~i1F2969FtJDtpu8BdLEGL2y-9Zx0dFf7xzlcK5L3hJxqmJpJ~zvcaw9m4nC2Po-86XvK~mXYM~IqU~DKevpKoUgjbzv-KJgosLIEKR6btl7t~2Az8I-6nIXzRIzKqyAJcWD9wBmqYg__",
            }}
            style={styles.headerImage}
            resizeMode="contain"
          />

          <View style={styles.formContainer}>
            <EmailField />
            <UsernameField />
            <PasswordField />
          </View>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => router.push("/createtrip")}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FBE6DC", // Makes the top of screen blend with spacer
  },
  container: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    maxWidth: 480,
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 3,
    borderColor: "#1c1917",
    overflow: "hidden",
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 32,
  },
  topSpacer: {
    height: 40,
    backgroundColor: "#FBE6DC",
    width: "100%",
  },
  headerImage: {
    width: "100%",
    aspectRatio: 1.12,
  },
  formContainer: {
    width: "100%",
    maxWidth: 480,
    paddingHorizontal: 36,
    marginTop: 32,
  },
  signUpButton: {
    backgroundColor: "#008FA0",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 40,
    alignSelf: "center",
    width: "90%",
    maxWidth: 480,
  },
  signUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default PageLogin;
