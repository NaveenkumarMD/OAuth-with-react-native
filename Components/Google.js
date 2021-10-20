import React from 'react'
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native'
import { AntDesign,Entypo } from '@expo/vector-icons'; 
import * as GoogleAuth from 'expo-google-app-auth'
function Google({setgoogleuserdata}) {
    const Login=async ()=>{

      GoogleAuth.logInAsync({
        clientId:'637586375318-007dv1brbkgj34jkass3u9oe2ll65mhj.apps.googleusercontent.com',
        scopes:['profile','email']
      })
        .then(res=>{
          const {type,user}=res
          if(type=="success"){
            setgoogleuserdata(user)
          }
          else{
            alert("failed")
          }
        }).catch(err=>{
          alert(err.message)
        })
      
    }
    return (
        <TouchableOpacity style={style.googlebutton} onPress={Login}>
        <AntDesign name="google" size={24} color="white" />
          <Text style={style.googletext}>Log in with Google</Text>
        </TouchableOpacity>
    )
}

export default Google
const style=StyleSheet.create({
    googlebutton:{
        backgroundColor:"rgb(50,163,80)",
        paddingVertical:10,
        paddingHorizontal:50,
        borderRadius:5,
        marginBottom:30,
        flexDirection:"row"
      },
      googletext:{
        color:"white",
        fontSize:16,
        marginLeft:10
      }    
})