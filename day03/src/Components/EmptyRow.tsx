import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import IconButton from "./IconButton";

const EmptyRow = (props: {width: number}) => {
  return (
    <>
     <View style={styles(props.width).row}>
       <IconButton type='playlist-plus' size={100} onPressOut={null}/>
       <Text style={styles(props.width).text}>해야 할 일이 없어요</Text>
     </View>
    </>
  );
};

const styles = (width: number) => StyleSheet.create({
  row: {
    width: width - 20,
    borderRadius: 10,
    marginTop: 30,
    padding: 1,
    alignSelf: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    marginTop: 10,
    fontSize: 23,
  }
})

export default EmptyRow;
