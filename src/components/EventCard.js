import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';

function EventCard(props) {
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  console.log(props.event);
  return (
    <>
      <View style={{ borderWidth: 3, borderColor:"#613DC1", borderRadius: 20, justifyContent:'center', alignItems:'center', padding:10, marginTop:10,  width: (windowWidth - 60)}}>
        <View>
          <Text style={{ fontSize: 16 }}>{props.event.title}</Text>
          <Text style={{ fontSize: 10 }}>{props.event.date}</Text>
          <Text style={{ fontSize: 10 }}>{props.event.time}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcc66",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
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
  }
});

export default EventCard;
