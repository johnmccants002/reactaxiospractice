import React, {useState} from 'react';
import axios from 'axios';


const baseURL = "https://api.quotable.io/random"

export default function RandomQuotePage() {
    const [quote, setQuote] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [items, setItems] = useState([])

    React.useEffect(() => {
        getQuote()
        
    }, []) 

    function getQuote() {
        axios.get(baseURL).then((response) => {
            setQuote(response.data)
            
        }).catch((err) => {
            setError(err)
        })

    }


    return (
        <div>
        
            
            <h1>{quote ? "Author: " + quote.author : ""}</h1>
            <p>{quote ? "Quote: " + quote.content : "Loading..."}</p>
            <button onClick={getQuote}>Generate New Quote</button>
        </div>
    )
}