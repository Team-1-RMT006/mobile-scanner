import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, TouchableHighlight, Dimensions } from 'react-native';
import { login } from '../store/actions/loginAction';
import { useDispatch, useSelector } from 'react-redux';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function Login ({navigation}) {
  const dispatch = useDispatch();
  const [alertModal, setAlertModal] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });
  const loginError = useSelector(state => state.loginReducer.loginError);
  const authenticated = useSelector(state => state.loginReducer.authenticated);

  function handleLogin () {
    dispatch(login(inputData))
  }

  function closeAlertModal () {
    setAlertModal(false);
    console.log(loginError);
  }

  useEffect (() => {
    if(authenticated) {
      navigation.replace('Home');
    }
  },[authenticated])

  if (loginError) {
    setAlertModal(true);
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

      <Modal
        animationType="fade"
        transparent={alertModal}
        visible={alertModal}
       >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ ...styles.modalText, marginTop: 10, fontSize: 25}}>{JSON.stringify(loginError)}</Text>
            <View style={{ flexDirection: "row", marginTop: 40}}>
              <TouchableHighlight
                style={{ ...styles.modalButton, backgroundColor: '#00e600' }}
                onPress={closeAlertModal}>
                <Text style={styles.textStyle}>OK</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
} 

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#ffcc66",
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 220
  },
  modalButton: {
    width: 100,
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }
});
export default Login;