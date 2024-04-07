import React from "react"
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
export default function Forget(){
return(
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.bodyMessage}>
        Enter the email associated with your account and we’ll send an email with instructions to reset your password.
        </Text>
        <Text style={styles.emailLabel}>Email address</Text>
        <TextInput style={styles.textInput} placeholder="email"></TextInput>
        <View style={styles.buttonSend}>
        <TouchableOpacity style={styles.btnEmail}> 
            <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
)
}
const styles=StyleSheet.create({
    container:{
   flex:1,

    backgroundColor:"#F4F4FA",
    },
    content:{
        marginLeft:20,
    marginTop:60,
    },
  title:{
    color:"#2D2D2D",
    fontSize:20,
    marginBottom:10,
  },

        btnEmail:{
            marginTop:40,
            width:311,
            height:60,
            borderRadius:15,
            backgroundColor:"#130F26",
        },
        textInput:{
            marginTop:10,
            width:311,
            height:60,
            borderRadius:15,
            backgroundColor:"#FFFFFF",
            padding:15,
        },
        bodyMessage:{
            color:"#2D2D2D",
            opacity:0.7,
            fontSize:16, 
            marginBottom:20,
        },
        emailLabel:{
            color:"#2D2D2D",
            opacity:0.8,
            fontSize:16,   
        },
        sendText:{
textAlign:"center",
color:"#FFFFFF",
fontSize:20,
        },
        buttonSend:{
            flexDirection:"column",
            justifyContent:"flex-end",
        }
})