import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Produtos from './Produtos'

export default props => {
    function obterLista() {
        return Produtos.map(p => {
            return <Text key={p.id} style={Estilo.fontM}>{p.id} - {p.nome} R$ {p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={Estilo.fontG}>Lista de Produtos</Text>
            {obterLista()}
        </>
    )
}