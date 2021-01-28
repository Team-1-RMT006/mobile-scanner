
import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'

function Login ({navigation}) {
  const defaultLogin = {
    email: 'lala',
    password: "lili"
  }

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  function handleLogin () {
    // if((inputData.email === defaultLogin.email) &&
    //   (inputData.password === defaultLogin.password)){
    //     navigation.replace("Scanner");
    //     console.log('Sama');
    // } else {
    //   alert(`Incorrect Email / Password`);
    // }
    fetch('https://localhost:3000/admin/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:inputData.email,
        password:inputData.password
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
      }
  return (
    <View style={{flex:1}}>
      <View style={{flex: 1, marginVertical:"25%", marginHorizontal:"10%", borderRadius:20, justifyContent:"center"}}>
        <View style={{justifyContent:"center", alignItems:"center"}}>
          <View style={{flexDirection:"row", justifyContent:"center", alignItems: "center", borderRadius:25}}>
            <View style={{flex: 1, height:60, justifyContent:"center", alignItems:"center", marginBottom:5}}>
              <Text style={{fontSize:30, fontWeight:"bold", fontStyle:"italic"}}>Creativent</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", justifyContent:"center", alignItems: "center"}}>
            <View style={{flex: 1, backgroundColor:"#613DC1", height:60, borderTopLeftRadius:25, borderBottomLeftRadius:25, justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontWeight:"bold", color:"white"}}>Email</Text>
            </View>
            <View style={{flex:3, borderWidth:2, borderColor:"#613DC1", height:60, borderTopRightRadius:25, borderBottomRightRadius:25, justifyContent:"center"}}>
              <TextInput
                style={{marginLeft:10, height:60}}
                value={inputData.email}
                placeholder="Enter Your Email Address"
                onChangeText={text=>{
                  setInputData({...inputData, email: text})
                }}
              ></TextInput>
            </View>
          </View>
          <View style={{flexDirection:"row", justifyContent:"center", alignItems: "center", borderRadius:25, marginVertical:20}}>
            <View style={{flex: 1, backgroundColor:"#613DC1", height:60, borderTopLeftRadius:25, borderBottomLeftRadius:25, justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontWeight:"bold", color:"white"}}>Password</Text>
            </View>
            <View style={{flex:3, borderWidth:2, borderColor:"#613DC1", height:60, borderTopRightRadius:25, borderBottomRightRadius:25, justifyContent:"center"}}>
              <TextInput
                style={{marginLeft:10, height:60}}
                value={inputData.password}
                secureTextEntry={true}
                placeholder="Enter Your Password"
                onChangeText={text => {
                  setInputData({...inputData, password: text})
                }}
              ></TextInput>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{alignItems:"center", backgroundColor: "#DDDDDD", padding: 10, borderRadius:20, backgroundColor:"#613DC1"}}
          onPress={()=>{
            handleLogin();
          }}
        >
          <Text style={{color:"white", fontWeight:"bold"}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
export default Login;