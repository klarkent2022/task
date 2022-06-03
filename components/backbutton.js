import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function BackButton() {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.roundButton}>
        <FontAwesome name='angle-left' size={25} style={{ marginRight: 10}} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute', 
    flexDirection:"row",
    left: 25,
    top: 50,
  },
  roundButton: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
});