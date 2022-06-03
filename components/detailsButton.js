import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const DetailsButton = ({style, onpress}) => {
  return (
      <TouchableOpacity
        style={style}
        onPress = {onpress}>
        <Text>자세히 보기</Text>
      </TouchableOpacity>
  );
}

export default DetailsButton;