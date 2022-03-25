import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LoginForm from "../components/loginScreen/LoginForm";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/SpotmeLogin.png')} style={{width: 250, height: 100}} />
      </View>
      {/* LoginForm */}
      <LoginForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 16,
  },
});

export default LoginScreen;
