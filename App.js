import React, { useState } from "react";
import Welcome from "./screens/Welcome";
import Phone from "./screens/Phone";
import Ob3 from "./screens/Ob3";
import Forget from "./screens/Forget";
import Skip from "./screens/Skip";
import {View} from "react-native";

export default function App() {
  return(
    <View>
      <Skip/>
  <Welcome/>
  </View>
  )
}
