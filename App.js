
import React from 'react';
import 'react-native-gesture-handler';
import {  SafeAreaView, StatusBar,StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation/index';




const App = () => {
 

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};


export default App;
