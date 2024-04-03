import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
export default function Register({navigation}){
return(
    <View style={styles.container}>
        <Text style={styles.titles}>Sign Up</Text>
        <Text style={styles.subtitles}>Create an account</Text>
        <Text style={styles.subtitles}>Name</Text>
        <TextInput style={styles.textbox} placeholder="your name"></TextInput>
        <Text style={styles.subtitles}>Email</Text>
        <TextInput style={styles.textbox} placeholder="your email"></TextInput>
        <Text style={styles.subtitles}>Password</Text>
        <TextInput style={styles.textbox} placeholder="password"></TextInput>
        <Text style={styles.subtitles}>Repeat Password</Text>
        <TextInput style={styles.textbox} placeholder="repeat password"></TextInput>
        <TouchableOpacity style={styles.btn1}>
            <Text style={styles.buttonText1} >Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText2}>OR</Text>
        <TouchableOpacity style={styles.btn2}>
            <Text style={styles.buttonText3}>Sign in with Google</Text>
        </TouchableOpacity>
   
            <Text style={styles.subtitle}>Already have an account?
        <Text  onPress={()=>navigation.navigate("Log")}style={styles.link}>Log in</Text> </Text>
  </View>    
    )
    
 }
 const styles=StyleSheet.create({
    container:{
     flex:1,
    backgroundColor:"#111827",
    justifyContent:"center",
    },
   titles:{
    color:"#F9FAFB",
    fontSize:18,
    marginLeft:30,
    fontWeight:"bold",
   },
   textbox:{
    width:320,
    height:31,
    marginLeft:30,
    marginTop:19,
    backgroundColor:"#F9FAFB",
    borderRadius:5,
    paddingLeft:15,
   },
   subtitles:{
    color:"#F9FAFB",
    marginLeft:30,
    marginTop:19,
    fontSize:14,
   },
   subtitle:{
    color:"#F9FAFB",
    marginLeft:30,
    marginTop:19,
    marginRight:50,
    fontSize:14,
   },
btn1:{
    backgroundColor:"#1D4ED8",
    textAlign:"center",
    color:"#F9FAFB",
    borderRadius:15,
    marginLeft:30,
    marginTop:19,
    width:320,
    height:36,
},
btn2:{
    color:"black",
    backgroundColor:"#93C5FD",
    textAlign:"center",
    borderRadius:15,
    marginLeft:30,
    marginTop:19,
    width:320,
    height:36,
},
buttonText3:{
    textAlign:"center",
    marginTop:5,
    fontSize:14,
},
buttonText2:{
    fontSize:14,
    color:"#F9FAFB",
    textAlign:"center",
    marginTop:19,
},
buttonText1:{
   textAlign:"center",
   color:"#F9FAFB",
   marginTop:5,
   fontSize:14,
},
link:{
    color:"#1D4ED8",
   fontWeight:"bold",
   marginHorizontal:40,
   fontSize:18,
},
 })