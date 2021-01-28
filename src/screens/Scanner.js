import React, {useState, useEffect} from 'react'
import {BarCodeScanner} from 'expo-barcode-scanner';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { closeTicket } from '../store/actions/scanAction'; 
import AsyncStorage from '@react-native-async-storage/async-storage'
import { resetAuthen } from '../store/actions/loginAction'

function Scanner({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const EventId = useSelector(state => state.homeReducer.EventId);
  const dispatch = useDispatch();
  

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = (response) => {
    setScanned(true);
    const dataCustomer = JSON.parse(response.data)
    const CustomerId = dataCustomer.id;
    dispatch(closeTicket({ CustomerId, EventId }));
    alert(`Bar code with type ${response.type} and data ${response.data} has been scanned!`);
  };

  const handleLogout = async () =>{
    try {
      await AsyncStorage.removeItem('access_token')
      dispatch(resetAuthen())
      navigation.replace("Login")
    } catch(e) {
      // remove error
      console.log(e)
    }
    console.log('Done.')
  }

  const goVisitors = () =>{
    navigation.replace("Visitors")
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{flex:1}}>
      <View style={{justifyContent: "center", alignItems:"center", marginTop:40}}>
        <Text style={{fontSize:30, fontWeight:"bold", fontStyle:"italic"}}>Creativent Scanner</Text>
      </View>
      <View style={{flex:2, marginVertical:20}}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
      </View>
      <View style={{justifyContent: "center", alignItems:"center", marginBottom:20}}>
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
      
      <TouchableOpacity
          style={{alignItems:"center", backgroundColor: "#DDDDDD", padding: 10, backgroundColor:"#613DC1"}}
          onPress={()=>{
            goVisitors();
          }}
        >
          <Text style={{color:"white", fontWeight:"bold"}}>Visitors List</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={{alignItems:"center", backgroundColor: "#DDDDDD", padding: 10, backgroundColor:"#613DC1"}}
          onPress={()=>{
            handleLogout();
          }}
        >
          <Text style={{color:"white", fontWeight:"bold"}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Scanner;