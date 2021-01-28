import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

function Table(props) {
  const windowWidth = Dimensions.get('window').width;
  
  return (
    <>
      <View style={{ borderLeftWidth: 3, borderRightWidth: 3, borderBottomWidth:3, marginTop: 10, borderRadius:13, borderColor:"#613DC1"}}>
        <View style={{borderColor:"#613DC1", backgroundColor: "#613DC1", borderRadius:20, borderRadius:20}}>
          <View
            style={{flexDirection: "row", width: (windowWidth - 60) }}
          >
            <View
              style={{ width: (windowWidth - 60) / 6, alignItems: "center", borderRightWidth: 1, borderColor:"#613DC1" }}
            >
              <Text style={{ fontWeight: "bold", color:"white" }}>No</Text>
            </View>
            <View style={{ width: (windowWidth - 60) * (5 / 6), alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", color: "white" }}>Name</Text>
            </View>
          </View>
        </View>
        {props.tickets.map((ticket, index) => (
          <View key={index} style={{ flexDirection: "row", width: windowWidth - 60 }}>
            <View
              style={{ width: (windowWidth - 60) / 6, alignItems: "center", borderRightWidth: 1, borderColor:"#613DC1" }}
            >
              <Text style={{ fontSize: 16 }}>{index+1}</Text>
            </View>
            <View style={{ width: (windowWidth - 60) * (5 / 6), alignItems: "center" }}>
              <Text style={{ fontSize: 16 }}>{`${ticket.Customer.first_name} ${ticket.Customer.last_name}`}</Text>
            </View>
          </View>
        ))}
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  noListItem: {
    borderColor:"#613DC1",
    backgroundColor: "#613DC1",
    borderRadius:10, 
    borderRadius:10
  },
  containListItem: {

  }
});

export default Table;
