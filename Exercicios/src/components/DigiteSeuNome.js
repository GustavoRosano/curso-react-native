import React, { useState } from 'react'
import { SafeAreaView, TextInput, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('')


    return (
        <SafeAreaView>
            <Text>Nome Completo:</Text>
            <TextInput
            style={Estilo.fontG}
                placeholder="Digite seu Nome:"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
            <Text>{nome}</Text>
        </SafeAreaView>
    )
}