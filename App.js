import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login  from './src/screens/Login';
import { Provider } from 'react-redux'
import store from './src/store/index'
import Home from "./src/screens/Home"
import Scanner from "./src/screens/Scanner";
import Visitors from './src/screens/Visitors'

const  Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="Visitors" component={Visitors} />
          </Stack.Navigator>
          <StatusBar style="auto"/>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth
  }
});
