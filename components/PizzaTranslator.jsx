import React, {useState} from "react";
import { view, Text, ScrollView, image, TextInput, View } from "react-native";

export default function PizzaTranslator() {
  const [text, setTExt ] = useState('');
  return (
    <View>
      <TextInput
        style={{height : 40}}
        placeholder="문장을 입력하세요."
        onChange={newText => setTExt(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 40}}>
        {text.split(' ').map(word => word && '🍕').join(' ')}
      </Text>
    </View>
  )
}