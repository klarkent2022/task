import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const CloseButton = ({style, onpress}) => {
  return (
      <TouchableOpacity
        style={style}
        onPress = {onpress}>
        <FontAwesome name='angle-down' size={25} style={{ marginRight: 10}} />
      </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
//   roundButton: {
    // width: 45,
    // height: 45,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 10,
    // borderRadius: 100,
    // backgroundColor: '#fff',
//   }, 
// });

export default CloseButton;