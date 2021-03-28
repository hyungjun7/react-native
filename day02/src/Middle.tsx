import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Shadow from "./Shadow";

const Middle = () => {
  return (
    <>
     <View style={style.contents}>
       {/*<View style={style.items}>*/}
       {/*  */}
       {/*</View>*/}
       {/*/!*<View style={style.items}>*!/*/}
       {/*/!*  <Text>나는 2번 세계</Text>*!/*/}
       {/*/!*</View>*!/*/}
       <View style={style.items}>
         <Shadow />
         <Shadow />
         <Shadow />
         <Shadow />
       </View>
       
     </View>
    </>
  );
};

const style = StyleSheet.create({
  contents: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    height: 650,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  items: {
    width: '100%'
  }
})

export default Middle;
