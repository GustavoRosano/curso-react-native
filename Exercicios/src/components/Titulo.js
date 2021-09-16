import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'


export default props => {

    return (
        <SafeAreaView>
            <Text style={Estilo.fontG}>{props.principal}</Text>
            <Text>{props.secudario}</Text>
        </SafeAreaView>
    )
}