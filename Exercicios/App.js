import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Mega from './src/components/mega/Mega';
/*
import FlexboxV4 from './src/components/layout/FlexboxV4';
import FlexboxV3 from './src/components/layout/FlexboxV3';
import FlexboxV2 from './src/components/layout/FlexboxV2';
import FlexboxV1 from './src/components/layout/FlexboxV1';
import DigiteSeuNome from './src/components/DigiteSeuNome';
import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2';
import ListaProdutos from './src/components/produtos/ListaProdutos';
import UsuarioLogado from './src/components/UsuarioLogado'
import Familia from './src/components/relacao/Familia'
import Membro from './src/components/relacao/Membro';
import ParImpar from './src/components/ParImpar';
import Diferenciar from './src/components/Diferenciar';
import ContadorV2 from './src/components/contador/ContadorV2'
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
      <Mega qtdeNumeros={12} />
      {/* 
      <FlexboxV4 />
      <FlexboxV3 />
      <FlexboxV2 />
      <FlexboxV1 />
      <DigiteSeuNome />
      <ListaProdutosV2 />
      <ListaProdutos />
      <UsuarioLogado usuario={{ nome='Gui', email='gui@gmail.com' }} />
      <Familia>
        <Membro nome="Bia" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Arruda" />
        <Membro nome="Guilherme" sobrenome="Arruda" />
        <Membro nome="Rebeca" sobrenome="Arruda" />
      </Familia>
      <ParImpar num={3} />
      <Diferenciar />
      <ContadorV2 />
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