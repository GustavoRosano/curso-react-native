import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  SafeAreaView } from 'react-native';

import Comp, { Comp1, Comp2 } from './src/components/Multi'
import Primeiro from './src/components/Primeiro'

export default () => {
  return (
    <SafeAreaView style={styles.App}>
      <Comp />
      <Comp1 />
      <Comp2 />
      <Primeiro />
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});