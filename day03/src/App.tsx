/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useState} from 'react';
 import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text, StatusBar, Alert, useWindowDimensions, View
 } from 'react-native';
import Input from "./Components/Input";
import {ITodo, onSubmit} from "./Types";
import IconButton from "./Components/IconButton";
import {checkedIcon} from "./Types";
import Row from "./Components/Row";
import EmptyRow from "./Components/EmptyRow";
import {getNextSeq} from "./Utils/getNextSeq";

const App = () => {
  const width = useWindowDimensions().width
   const [value, setValue] = useState('')
   const {main, title, list} = styles(width)
   const onChangeText = (text: string) => setValue(text)
   const [rows, setRows] = useState([
     {id: 1, text: '신나는 React-Native', isComplete: false, createdAt: new Date().toDateString()},
     {id: 2, text: 'GoLang', isComplete: false},
     {id: 3, text: 'Java', isComplete: true},
   ])
   const onSubmit: onSubmit = (e) => {
     //이벤트 객체에서 타임스탬프, 값, 스타일, 속성 등 다양한 값이 나온다
     const data = {id: getNextSeq(...rows), text: value, isComplete: false, createdAt: new Date().toDateString()}
     setRows([...rows, data])
     setValue('')
     Alert.alert('해야 할 일이 등록되었어요')
   }
   return (
     //아이폰 원형 탈모 영역 벗어나기 위해서 사용하면 될 것 같다.
    <SafeAreaView style={main}>
      {/* 아래 컴포넌트로 상태 바의 색을 변경하거나 설정할 수 있다고 한다 */}
      <StatusBar backgroundColor={main.backgroundColor} />
      <Text style={title}>To Do!</Text>
      <Input value={value} onChangeText={onChangeText} onSubmit={onSubmit} />
        <ScrollView style={list}>
          {
            rows.length < 10 ? rows.map(item => {
              return <Row
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        isComplete={item.isComplete}
                        createdAt={item.createdAt}
                    />
            }) : <EmptyRow width={width} />
          }
        </ScrollView>
    </SafeAreaView>
   );
 };

 const styles = (width: number) => StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  title: {
    fontSize: 35,
    color: '#8cbded',
    textAlign: 'center'
  },
  list: {
    flex: 1,
    width: width - 20,
  }
 });

 export default App;
