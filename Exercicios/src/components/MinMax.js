import React from "react";
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    
    return (
        <Text style={Estilo.fontG}>O Valor {props.max} é maior que o Valor {param.min} !</Text>
    )
}