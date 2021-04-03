import React from 'react';
import {
  StyleSheet,
  TextInput,
  useWindowDimensions
} from "react-native";
import {onChangeText, onSubmit} from "../Types";

const Input = (props: {value: string, onChangeText: onChangeText, onSubmit: onSubmit}) => {
  const width = useWindowDimensions().width
  const {value, onSubmit, onChangeText} = props
  return (
    <>
      <TextInput
        style={styles(width).input}
        placeholder="할 일을 입력하세요!"
        placeholderTextColor="#8cbded"
        //자동으로 대문자 전환하는 속성 이거 있으면 화가 많이 나니까 off
        autoCapitalize="none"
        //자동 완성 기능을 off 함으로써 대참사를 예방하자
        autoCorrect={false}
        //리턴 키의 타입
        returnKeyType="done"
        value={value}
        onChangeText={onChangeText}
        //텍스트 입력창에서 submit 을 사용할 수 있다.. 이것이 네이티브 ..
        onSubmitEditing={onSubmit}
      />
    </>
  );
};

//width 90% 인 상태에서 메인에서 정렬 센터로 하니까 칸이 너무 작아진다.
// => useWindowDimensions hook 을 사용하면 된다고 한다.
//사용하는 기기에 따라서 자동으로 크기를 가져올 수 있다고 함
const styles = (width: number) => StyleSheet.create({
  input: {
    width: width - 20,
    height: 50,
    borderRadius: 10,
    margin: 1,
    padding: 10,
    fontSize: 25,
    backgroundColor: '#dcdcdc'
  }
})

export default Input;
