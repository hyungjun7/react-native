/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   StyleSheet,
   View,
 } from 'react-native';
import Middle from "./src/Middle";
import Footer from "./src/Footer";
import Header from "./src/Header";

 const App = () => {
   return (
     <>
       <View style={styles.container}>
         <Header />
         <Middle />
         <Footer />
       </View>
     </>
   );
 };

//flex 를 이용하면 폰마다 반응형으로 사용가능??
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     width: '100%',
     justifyContent: 'center',
     alignItems: 'center'
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
