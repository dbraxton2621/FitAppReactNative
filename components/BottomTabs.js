import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet} from "react-native";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Profile",
    active:
    "https://img.icons8.com/material-outlined/344/user-male-circle.png",
    inactive:
    "https://img.icons8.com/material/344/ffffff/user-male-circle--v1.png",
  },
];

const BottomTabs = ({ icons, navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity
      onPress={() => {
        setActiveTab(icon.name);
        navigation.push("ProfileScreen");
      }}
    >
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon}></Icon>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#a9a9a9",
  },
  icon: {
    width: 30,
    height: 30,
    padding: 5,
    backgroundColor: "#2c3e50",
    borderRadius: 15,
  },
});

export default BottomTabs;
