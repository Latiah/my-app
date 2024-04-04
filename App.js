import React, { useState } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Details from "./screens/Details";
import Register from "./screens/Register";
import Loging from "./screens/Loging";
import Forgot from "./screens/Forgot";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Loging} />
    <Stack.Screen name="Reset" component={Forgot} />
    </Stack.Navigator>
  </NavigationContainer>
  
  )
}
