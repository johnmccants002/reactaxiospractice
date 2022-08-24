import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useLocalStorage} from '../localStorage'
import '../Styling/PokemonPage.css'


const baseURL = "https://pokeapi.co/api/v2/pokemon"


export default function PokemonPage() {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [pokeText, setPokeText] = useState('')
    const [poke, setPoke] = useLocalStorage('pokemons', [])
   
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    function handleChange(event) {
        setPokeText(event.target.value)
    }

    useEffect(() => {
    
   
        
    }, [])

    function alreadySaved() {
        if (poke.some(p => p.forms[0].name === pokemon.forms[0].name)) {
            return (<h4>Already Saved</h4>)
        } else {
            return (<button onClick={savePokemon}>Save Pokemon to favorites</button>)
        }
    }

    function displayPokemon() {
        let views = [];

        for (let i = 0; i < poke.length; i++) {
           views.push(<div className="savedPokemon">
            {capitalizeFirstLetter(poke[i].forms[0].name)}
            <img src={poke[i].sprites.front_shiny}></img>
            <button class="removePokemon" id={i} onClick={removePokemon}>Remove Pokemon</button>
        </div>)
        }
        console.log("These are the views", views)
        return (
            views
        )
    }



    function handleSubmit(event) {
        event.preventDefault()
        getPokemon(event.target.value)
    }

    function getPokemon() {
        
        axios
        .get(`${baseURL}/${pokeText.toLowerCase()}`)
        .then((response) => {
            setPokemon(response.data)
        }).catch((err) => {
            setError(err)
            setPokemon(null)
        })

        console.log("These are the saved pokemon", poke)

    }

    function removePokemon(e) {
        const reducedArr = [...poke]
        reducedArr.splice(e.target.id, 1)
        console.log(e.target.id, "this is event")
        setPoke(reducedArr)

    }

    function savePokemon() {
        setPoke(prev => [...prev, pokemon]);
        console.log(poke)
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
            {pokemon ? 
                <div>
                    <img src={pokemon.sprites.front_shiny} alt=""></img>
                    <h3>{capitalizeFirstLetter(pokemon.forms[0].name)}</h3>
                    <>{alreadySaved()}</>
                    
                </div> 
            : <div>Pokemon not found</div>}
            <br/><br/>
            <div>Your favorite Pokemon</div>
            <div className="savedPokemonContainer">
                {displayPokemon()}
            </div>
        </div>


    )
}
