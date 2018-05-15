import React, { Component } from 'react'  
import { View } from 'react-native'
import axios from 'axios'
import QuoteDetail from './QuoteDetail'

class DailyQuote extends Component {
    // initial empty or base state when app firsts boots up, setState already exists in class-based Components only
    // A JS object used to record and respond to user-triggered events
    
    state = { quotes: [] }

    componentWillMount() {
        axios.get('https://quotes.rest/quote/random.json?api_key=WYIvXbe1f6_RzkfkFPNy6AeF')
        .then(response => this.setState({ quotes: response.data }))
    }

    // a helper method:
    
    renderQuotes() {
        return this.state.quotes.map(quote =>
            <QuoteDetail key={quote.id} quote={quote} />
        )
    }

    // class requires the render method
    
    render() {
        console.log(this.state)

        return (
            <View>
                {this.renderQuotes()}
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