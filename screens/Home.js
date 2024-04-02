import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
export default function Home({navigation}) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Tifah");
  const [age, setAge] = useState(23);
  const [people, setPeople] = useState([
    {
      name: "Winny",
      key: "1",
    },
    { name: "Odile", key: "4" },
  ]);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
      <MaterialCommunityIcons name="home-circle" size={30} color="white" />
      <TouchableOpacity onPress={()=> navigation.navigate("Detail")}style={styles.btn}>  
      <Text style={styles.colors}>GO TO DETAILS PAGE</Text>
   </TouchableOpacity> 
   
        <Text style={styles.colors}>Enter your name</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="e.g Latifah"
          onChangeText={(value) => setName(value)}
        ></TextInput>
        <Text style={styles.colors}>Enter your age</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="e.g 23"
          onChangeText={(value) => setAge(value)}
        ></TextInput>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={styles.btn}
        >
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.card1}>Hi {name}</Text>
          <Text style={styles.card2}>You are {age} </Text>
          <Text style={styles.card3}>cliked: {count}counts</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 40,
    backgroundColor: "#1f2937",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
  colors:{
    color:"white",
  },
  input: {
    backgroundColor: "white",
    margin: 10,
    width: 200,
    borderRadius: 10,
    padding: 2,
    paddingLeft: 10,
  },
  card1: {
    paddingTop: 40,
    width: 200,
    height: 100,
    margin: 10,
    textAlign: "center",
    backgroundColor: "#f87171",
  },
  card2: {
    paddingTop: 40,
    width: 200,
    height: 100,
    margin: 10,
    textAlign: "center",
    backgroundColor: "#f87171",
  },
  card3: {
    paddingTop: 40,
    width: 200,
    height: 100,
    margin: 10,
    textAlign: "center",
    backgroundColor: "#f87171",
  },
});
