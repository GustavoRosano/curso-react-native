import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import ContadorV2 from './src/components/contador/ContadorV2'
/*
import PaiI from './src/components/indireta/Pai'
import Pai from './src/components/direta/Pai'
import Contador from './src/components/Contador'
import Botao from './src/components/Botao'
import Titulo from './src/components/Titulo'
import Aleatorio from './src/components/Aleatorio'
import MinMax from './src/components/MinMax'
import Comp, { Comp1, Comp2 } from './src/components/Multi'
import Primeiro from './src/components/Primeiro'
 */
export default () => {
  return (
    <SafeAreaView style={styles.App}>
      <ContadorV2 />
      {/* 
      <PaiI />
      <Pai />
      <Contador inicial={100} passo={13} />
      <Contador />
      <Botao />
      <Titulo principal="Cadastro de Produto" />
      <Titulo secundario="Tela de Cadastro do Produto" />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <MinMax min={3} max={20} /> 
      <Comp />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
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
    padding: 20
  },
});