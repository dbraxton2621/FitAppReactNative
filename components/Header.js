import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { firebase } from "../firebase";

const Header = ({ navigation }) => {
  const logOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      Alert.alert("My Lord", e.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logOut}>
        <Image
          style={styles.logo}
          source={require("../assets/Spotme.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Ionicons name="add-circle" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>7</Text>
          </View>
          <Fontisto name="messenger" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
		backgroundColor: 'black',
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 0,
		width: "100%",
		paddingHorizontal: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: "contain",
  },
  icon: {
    width: 30,
    color: "white",
    resizeMode: "contain",
    marginHorizontal: 5,
  },
  unreadBadge: {
    backgroundColor: "#ff3250",
    position: "absolute",
    left: 12,
    bottom: 17,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
