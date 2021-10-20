import React,{useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';
import * as FacebookAuth from "expo-facebook";
function Facebook({setfacebookuserdata}) {
  const [userdata,setuserdata]=useState('')
  const Login=async ()=>{
    try {
      await FacebookAuth.initializeAsync({
        appId:"946637945953418"
      })
      const {type,token}=await FacebookAuth.logInWithReadPermissionsAsync({
        permissions:["public_profile","email"]
      })
      console.log(token)
      if(type=="success"){
        const response=await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
          )

        var data=await response.json()
        setfacebookuserdata(data)
      }
      else if(type=="cancel"){
        alert("Cancelled by the user")
      }
    } catch ({message}) {
      alert(`Login error ${message}`)
    }
  }
  return (
    <TouchableOpacity style={style.facebookbutton} onPress={Login}>
      <Entypo name="facebook" size={24} color="white" />
      <Text style={style.facebooktext}>Log in with Facebook</Text>
    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
  facebookbutton: {
    backgroundColor: "dodgerblue",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 35,
    flexDirection: "row"
  },
  facebooktext: {
    color: "white",
    fontSize: 16,
    marginLeft: 10
  },
  })
export default Facebook