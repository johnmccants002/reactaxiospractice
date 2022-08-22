import React from 'react';
import axios from 'axios';

const baseURL = "https://robohash.org"
export default function RobosPage() {

    const [robo, setRobo] = React.useState(baseURL + "/newuser")
    const [error, setError] = React.useState(null)
    const [text, setText] = React.useState('')

    React.useEffect(() => {
        

    }, [])

    function handleChange(event) {
        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setRobo(`${baseURL}/${text}`)
    }
    return (
        <div> 
        <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" value={text} onChange={handleChange} />
  </label>
  <input type="submit" value="Submit" />
</form>
        <img src={robo} alt=""></img>
        <h3>{robo}</h3>
        </div>
    )
}