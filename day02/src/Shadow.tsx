import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Shadow = () => <View style={style.shadow} ><Text>안녕 세계!</Text></View>

//그림자를 설정하기 위해서는 backGroundColor 와, shadowColor 를 동시에 설정하지 않으면 그림자가 안나온다..
//shadow 설정으로만 하니 안드쪽에서는 그림자가 안나온다.. ㅋㅋ 쉽지않네
//안드로이드에서는 elevation 이라는 속성으로 사용한다고 함
const style = StyleSheet.create({
  shadow: {
    flex: 1,
    backgroundColor: '#fff',
    height: 150,
    margin: 5,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 20
  }
})

export default Shadow;
