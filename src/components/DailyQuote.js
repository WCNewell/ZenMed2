import React, { Component } from 'react'  
import { View, Text } from 'react-native'
import axios from 'axios'
// import customData from '../quotes.json'
// import QuoteDetail from './QuoteDetail'

class DailyQuote extends Component {
    
    state = { quotes: [] }

    componentWillMount() {
        axios.get('https://quotes.rest/qod.json?api_key=WYIvXbe1f6_RzkfkFPNy6AeF')
        .then(response => {console.log('quote of the day', response.data.contents.quotes)})
        .then(response => this.setState({ quote: response.data.contents.quotes }))
        .catch(error => {console.dir('hello', error)})
    }

    renderQuotes() {
        return this.state.quotes(quote => <Text>{quotes.quote}</Text>)
    }
    
    render() {
        console.log(this.state)

        return (
            <View>
                <Text>Daily Quote Here!</Text>
            </View>
        )
    }
}

export default DailyQuote

    // lifecycle method:
//     componentWillMount() {
//         getQuotes()
//     }

//     constructor(props) {
//         super(props)
//         this.state = {
//             quotes: []
//         }
//     }

//     getQuotes = () => {
//         axios.get('https://quotes.rest/quote/random.json?api_key=WYIvXbe1f6_RzkfkFPNy6AeF')
//             .then(response => this.setState({ quotes: response.data })
//     )}

//     // a helper method:
//     renderQuotes() {
//         return this.state.quotes.map(quote => <Text>{contents.categories.quote}</Text>)
//     }
    
//     // class requires the render method

//     render() {
//         console.log(this.state)

//         return (
//             <View>
//                 {this.renderQuotes()}
//             </View>
//         )
//     }
// }


// this is a functional component
// used for presenting static data:
// const Header = () => {
//     return
//             <Text>Daily Quote Bitches!</Text>
// }