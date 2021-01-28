import React, { Fragment, useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../store/actions/homeAction';
import EventCard from '../components/EventCard';
import { setEventId } from '../store/actions/homeAction';

function Home({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const dispatch = useDispatch();
  const events = useSelector(state => state.homeReducer.events);
  const eventsIsLoading = useSelector(state => state.homeReducer.eventsIsLoading);
  const eventsError = useSelector(state => state.homeReducer.eventsError);

  useEffect(() =>   {
    dispatch(fetchEvents());
  },[]);

  function goScanner(EventId) {
    dispatch(setEventId(EventId));
    // console.log('props >>>', props)
    navigation.replace('Scanner');
  }

  if (eventsIsLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0275d8" />
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
        <View style={styles.container}>
          <Text style={{ fontSize: 27, marginTop: 50, marginBottom: 10, fontWeight: "bold", color:"#613DC1", fontStyle:'italic' }}>Event List</Text>
          {/* <Text>{JSON.stringify(events[0].Events[0])}</Text> */}
          {events[0].Events.map(event => {
            return (
            <>
              <EventCard event={event} key={event.id} />
              <TouchableHighlight
                key={event.id}
                style={{ ...styles.button }}
                onPress={() => goScanner(event.id)}>
              <Text style={styles.textStyle}>Scan for {event.title}</Text>
              </TouchableHighlight>
            </>
          )})}
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
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    elevation: 2,
    backgroundColor: '#613DC1'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Home;
