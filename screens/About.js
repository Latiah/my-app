import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABOUT PAGE</Text>
      <Image source={require("../assets/movie2.png")} />
      
        <AntDesign name="rightcircle" size={24} color="white" onPress={()=>navigation.navigate('Details')} />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#1f2937",
  },
  title: {
    color: "#f87171",
    fontSize: 40,
  },
});
