import React, { useState } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Details from "./screens/Details"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
