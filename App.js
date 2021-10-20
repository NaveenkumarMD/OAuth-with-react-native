import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Facebook from './Components/Facebook';
import Google from './Components/Google';
export default function App() {
  const [facebookloggedin, setfacebooklogged] = useState(false)
  const [facebookuserdata, setfacebookuserdata] = useState(null)
  const [googleloggedin, setgooglelogged] = useState(false)
  const [googleuserdata, setgoogleuserdata] = useState(null)
  const logout = () => {
    setfacebooklogged(false)
    setfacebookuserdata(null)
    setgooglelogged(false)
    setgoogleuserdata(null)
    console.log(facebookuserdata)
  }
  useEffect(() => {
    if (facebookuserdata != null) {
      setfacebooklogged(true)
      console.log(facebookuserdata)
      console.log(facebookuserdata.picture.data.url)
    }
    else {
      setfacebooklogged(false)
    }
  }, [facebookuserdata])
  useEffect(() => {
    if (googleuserdata != null) {
      setgooglelogged(true)
      console.log(googleuserdata)
    }
    else {
      setgooglelogged(false)
    }
  }, [googleuserdata])
  if (googleloggedin) {
    return (
      <View style={style.container}>
        <Text style={style.googletext}>Google</Text>
        <Image style={style.fbprofile}
          source={{
            uri: googleuserdata.photoUrl
          }}
        />
        <View style={style.facebookdata}>

          <Text style={style.name}>{googleuserdata.givenName}</Text>
          <Text style={style.mail}>{googleuserdata.email}</Text>
          <Text style={style.id}>{googleuserdata.id}</Text>
        </View>
        <TouchableOpacity style={style.logout}>
          <Text onPress={logout} style={style.logouttext}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
  if (facebookloggedin) {
    return (
      <View style={style.container}>
        <Text style={style.facebooktext}>Facebook</Text>
        <Image style={style.fbprofile}
          source={{
            uri: facebookuserdata.picture.data.url
          }}
        />
        <View style={style.facebookdata}>

          <Text style={style.name}>{facebookuserdata.name}</Text>
          <Text style={style.mail}>{facebookuserdata.email}</Text>
          <Text style={style.id}>{facebookuserdata.id}</Text>
        </View>
        <TouchableOpacity style={style.logout}>
          <Text onPress={logout} style={style.logouttext}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (

    <View style={style.container}>
      <StatusBar style="auto" />
      <View style={style.logo}>
        <Entypo name="network" size={150} color="rgb(243,182,5)" />
        <Text style={style.logotext}>Auth demo</Text>
      </View>
      <Facebook setfacebookuserdata={setfacebookuserdata} />
      <Google setgoogleuserdata={setgoogleuserdata}/>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "rgba(23,34,23,0.8)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25%"
  },
  logotext: {
    color: "white",
    fontSize: 25
  },
  id: {
    fontSize: 20,
    color: "white",
    padding: 5
  },
  name: {
    fontSize: 30,
    color: "dodgerblue",
    padding: 5
  },
  mail: {
    fontSize: 20,
    color: "white",
    padding: 5
  },
  facebookdata: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  fbprofile: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginBottom: 40
  },
  logout: {
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 60
  },

  logouttext: {
    color: "white",
    fontSize: 16
  }
  ,
  googletext:{
    fontSize:50,
    color:"rgb(50,203,80)",
    marginBottom:40
  }
  ,
  facebooktext:{
    fontSize:50,
    color:"dodgerblue",
    marginBottom:40
  }


})

