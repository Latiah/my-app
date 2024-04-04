import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
export default function Loging({navigation}){
return(
    <View style={styles.container}>
        <Text style={styles.titles}>Welcome Back</Text>
        <Text style={styles.subtitles}>Log in to your account</Text>
        <Text style={styles.subtitles}>Email</Text>
        <TextInput style={styles.textbox} placeholder="enter email"></TextInput>
        <Text style={styles.subtitles}>Password</Text>
        <TextInput style={styles.textbox} placeholder="enter password"></TextInput>
        <Text onPress={()=>navigation.navigate("Reset")} style={styles.resetLink}>Forgot your password?</Text>
        <TouchableOpacity style={styles.btn1}>
            <Text style={styles.buttonText1} >Log in</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText2}>OR</Text>
        <TouchableOpacity style={styles.btn2}>
            <Text style={styles.buttonText3}>Log in with Google</Text>
        </TouchableOpacity>
        <View style={styles.messageLink}>
    <Text style={styles.subtitle}>Don't have an account?</Text>
     <Text onPress={()=>navigation.navigate("Register")} style={styles.link}>Sign in</Text> 
     </View>
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
   fontSize:18,
   marginTop:19,
   marginRight:40,
},
messageLink:{
    flexDirection:"row",
    justifyContent:"space-between",
},
resetLink:{
    color:"#1D4ED8",
    fontWeight:"bold",
    fontSize:18,
    marginTop:19,
marginLeft:170,
},
 })