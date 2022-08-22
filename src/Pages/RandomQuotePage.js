import React from 'react';
import axios from 'axios';


const baseURL = "https://api.quotable.io/random"

export default function RandomQuotePage() {
    const [quote, setQuote] = React.useState('')
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setQuote(response.data)
        }).catch((err) => {
            setError(err)
        })
    }, []) 


    return (
        <div>
            <h1>Author: {quote.author}</h1>
            <p>Quote: {quote.content}</p>
        </div>
    )
}