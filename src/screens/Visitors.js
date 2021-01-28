import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableHighlight, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Table from '../components/Table'
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvent } from '../store/actions/visitorAction'

function Visitors({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const dispatch = useDispatch();
  const EventId = useSelector(state => state.homeReducer.EventId);
  const tickets = useSelector(state => state.visitorReducer.tickets);
  const ticketsIsLoading = useSelector(state => state.visitorReducer.ticketsIsLoading);
  const ticketsError = useSelector(state => state.visitorReducer.ticketsError);
  
  function goScanner() {
    navigation.replace('Scanner');
  }

  useEffect(() => {
    dispatch(fetchEvent(EventId))
  },[]);

  if (ticketsIsLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0275d8" />
        {/* <Text>{JSON.stringify(ticketsIsLoading)}</Text> */}
      </View>
    );
  }

  return (
    
    <SafeAreaView>
      <ScrollView style={{height: windowHeight}}>
        <View style={{flex: 1,
          alignItems: "center",
          justifyContent: "center",
          }}
        >
          <View style={{ marginTop: 30, marginBottom: 30 }}>
            <TouchableHighlight
              style={{ ...styles.button }}
              onPress={() => goScanner()}>
            <Text style={styles.textStyle}>Scanner</Text>
            </TouchableHighlight>
          </View>
          
          <View style={styles.container}>
            <Text style={{ fontSize: 27, marginTop: 50, marginBottom: 10, fontWeight: "bold" }}>Visitors</Text>
            <Table tickets={tickets}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    backgroundColor: '#613DC1',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Visitors;
