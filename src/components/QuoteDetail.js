import React from 'react'
import { View, Text } from 'react-native'

const QuoteDetail = (props) => {
    return (
        <View>
            <Text>{props.quote.quote}</Text>
        </View>
    )

}

export default QuoteDetail