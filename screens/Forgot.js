import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
export default function Forgot(){
    return(
        <View style={styles.container}>
    <Text style={styles.subtitles}>Forgot password
    </Text>
    <Text style={styles.subtitles}>Please enter your email to reset your password</Text>
        <TextInput style={styles.textbox} placeholder="enter email"></TextInput>
        <TouchableOpacity style={styles.btn1}>
            <Text style={styles.buttonText1} >Send Link</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
     flex:1,
    backgroundColor:"#111827",
    justifyContent:"center",},

    textbox:{
        width:320,
        height:31,
        marginLeft:30,
        marginTop:19,
        backgroundColor:"#F9FAFB",
        borderRadius:5,
        paddingLeft:15,
       },
       btn1:{
        backgroundColor:"#1D4ED8",
        textAlign:"center",
        color:"#F9FAFB",
        borderRadius:15,
        marginLeft:30,
        marginTop:19,
        width:129,
        height:30,
    },
    buttonText1:{
    textAlign:"center",
    color:"#F9FAFB",
    marginTop:5,
    fontSize:14,
 },
    })