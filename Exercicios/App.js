import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  SafeAreaView } from 'react-native';

import Comp, { Comp1, Comp2 } from './src/components/Multi'
import Primeiro from './src/components/Primeiro'

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Comp />
      <Comp1 />
      <Comp2 />
      <Primeiro />
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
