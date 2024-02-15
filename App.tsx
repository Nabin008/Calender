import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginPage from './android/app/src/Components/Pages/LoginPage';
import Home from './android/app/src/Components/Pages/Home';

export default function App() {
  return (
    <View>
      {/* <LoginPage /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({});
