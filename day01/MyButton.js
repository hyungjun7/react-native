import React from 'react';
import {TouchableOpacity, Text} from 'react-native'

const MyButton = ({props, onPress, onLongPress}) => {
  console.log('asdasdas', props)
  return (
    <>
      {/*onLongPress 는 특정 시간동안 누르고 있을 시 발생함, 3000이라면 3초, delayLongPress 로 시간 설정 가능*/}
      <TouchableOpacity onPress={onPress} delayLongPress={3000} onLongPress={onLongPress}>
        <Text>{props ? '안녕 세계!' : 'hello world!'}</Text>
      </TouchableOpacity>
    </>
  );
};

export default MyButton;
