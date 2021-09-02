import React from 'react'
import { SafeAreaView } from 'react-native'

import Comp, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'


export default () => (
    <SafeAreaView>

        <Comp />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        
    </SafeAreaView>
)