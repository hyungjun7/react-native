import React from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {Pressable, StyleSheet} from "react-native";
import {onPressOut} from "../Types";

const IconButton = (props: {type: string, size: number, onPressOut: onPressOut}) => {
  const {type, onPressOut, size} = props
  return (
    <>
      <Pressable
        hitSlop={10}
        style={styles(size).button}
        onPressOut={onPressOut}
      >
        <Icon
          name={type}
          size={size}
        />
      </Pressable>
    </>
  );
};

const styles = (size: number) => StyleSheet.create({
  button: {
    width: size,
    height: size,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  
    elevation: 3,
  }
})

export default IconButton;
