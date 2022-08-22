import React, {useEffect, useState} from 'react';
import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2/pokemon"
export default function PokemonPage() {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [pokeText, setPokeText] = useState('')



    function handleChange(event) {
        setPokeText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        getPokemon(event.target.value)
    }

    function getPokemon() {
        axios
        .get(`${baseURL}/${pokeText}`)
        .then((response) => {
            setPokemon(response.data)
        }).catch((err) => {
            setError(err)
        })

    }
    return (
        <div> 
        <form onSubmit={handleSubmit}>
  <label>
    Search Pokemon by name:
    <input type="text" name="name" value={pokeText} onChange={handleChange} />
  </label>
  <input type="submit" value="Submit" />
</form>
        {pokemon ? <div>
            <img src={pokemon.sprites.front_shiny} alt=""></img>
            <h3>{pokemon.forms[0].name}</h3>

        </div> : ""}
        </div>
    )
}
