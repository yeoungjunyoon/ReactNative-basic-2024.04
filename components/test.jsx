import React from "react";
import { View, FlatList, Button, Image} from "react-native";

const styles = StyleSheet.create({
  container: {flex:1},
  item: {padding:5, fontSize:16, height:40}
})

export default function FlatListBasic() {
  return (
    <View>
      <Image
      soucre={require(`https://picsum.photos/200/200`,)}
    />
    <Button
        style={{height : 40}}
        placeholder="과일 이름을 입력하세요."
    />
    <FlatList
      data={[
        {key:'사과'},{key:'복숭아'},{key:'수박'}
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    />
  </View>
  );
}