import React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Details({navigation}) {
  return (
    <ImageBackground
      source={require("../assets/movie2.png")}
      style={styles.container}
    >
      <Text style={styles.title}>DETAILS PAGE</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
     <MaterialCommunityIcons name="home-circle" size={30} color="white" style={styles.title}  /> 
    </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#1f2937",
  },
  title: {
    color: "white",
    fontSize: 40,
    marginTop:10,
    textAlign:"center",
  },
});
