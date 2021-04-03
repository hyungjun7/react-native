import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {checkedIcon, deleteIcon, ITodo, unCheckedIcon, updateIcon} from "../Types";
import IconButton from "./IconButton";

const Row = (props: ITodo) => {
  const width = useWindowDimensions().width
  const {text, isComplete} = props
  const iconSize = 30
  return (
    <>
      <View style={styles(width).row}>
        <IconButton type={isComplete ? checkedIcon : unCheckedIcon} size={iconSize} onPressOut={null} />
        <Text style={styles(width).text}>{text}</Text>
        <IconButton type={updateIcon} size={iconSize} onPressOut={null} />
        <IconButton type={deleteIcon} size={iconSize} onPressOut={null} />
      </View>
    </>
  );
};

const styles = (width: number) => StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: width - 20,
    borderRadius: 10,
    marginTop: 5,
    padding: 1,
    alignItems: 'center',
    backgroundColor: '#dcdcdc'
  },
  text: {
    flex: 1,
    fontSize: 23,
  }
})

export default Row;
