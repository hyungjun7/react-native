import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Footer = () => {
  return (
    <>
      <View style={style.footer}>
        <Text>나는 푸터</Text>
      </View>
    </>
  );
};

//이렇게 설정하니 다른 폰에서는 안맞음
const style = StyleSheet.create({
  footer: {
    backgroundColor: '#B4C3FF',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Footer;
