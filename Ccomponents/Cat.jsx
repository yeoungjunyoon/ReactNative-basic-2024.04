import React from "react";
import { View, Text, ScrollView , Imgage, TextInput } from "react-native";

export default function Cat(props) {
  return (
    <View>
      <Text>Hello, I am {props.name} </Text>
    </View>
  )
}
