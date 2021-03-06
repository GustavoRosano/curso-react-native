import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from '../estilo'

import Membro from './Membro'

export default props => {
    return (
        <SafeAreaView>
            <Text>Membros da Família:</Text>
            {props.children}
        </SafeAreaView>
    )
}