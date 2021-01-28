import React from 'react';
import { View, Text, Dimensions } from 'react-native';

function Table(props) {
  const windowWidth = Dimensions.get('window').width;
  
  return (
    <>
      <View style={{ borderWidth: 1, marginTop: 10}}>
        <View style={{ borderBottomWidth: 1 }}>
          <View
            style={{flexDirection: "row", width: (windowWidth - 60) }}
          >
            <View
              style={{ width: (windowWidth - 60) / 6, alignItems: "center", borderRightWidth: 1 }}
            >
              <Text style={{ fontWeight: "bold" }}>No</Text>
            </View>
            <View style={{ width: (windowWidth - 60) * (5 / 6), alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>Name</Text>
            </View>
          </View>
        </View>
        {props.tickets.map((ticket, index) => (
          <View key={index} style={{ flexDirection: "row", width: windowWidth - 60 }}>
            <View
              style={{ width: (windowWidth - 60) / 6, alignItems: "center", borderRightWidth: 1 }}
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

export default Table;
