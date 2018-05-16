import React from 'react'
import { AppRegistry, View, ScrollView} from 'react-native'
import Header from './src/components/Header'
import DailyQuote from './src/components/DailyQuote'
import SoundBoard from './src/components/SoundBoard'

const App = () => (
    <View style= {{ flex: 1 }}>
        <Header headerText={'ZenMed'}/>
        <DailyQuote />
        <SoundBoard />
    </View>
)

AppRegistry.registerComponent('ZenMed2', () => App);
