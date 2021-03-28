import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

const Header = () => {
  return (
    <>
      <View style={style.header}>
        <Text>헤더</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: '#00C3FF',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Header;
