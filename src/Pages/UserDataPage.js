import React from 'react';
import {items, setItems} from '../localStorage'

export default function UserDataPage() {

    const localItems = items;
    const userQuotes = items.userQuotes;
    const pokemons = items.pokemon;
    

    return (
        <div>
        {pokemons ? 
        <div>
            {pokemons.forEach(function(pokemon) {
                <div>
                <img src={pokemon.sprites.front_shiny} alt=""></img>
                <h1>{pokemon.forms[0].name}</h1>
                </div>
            })
            }
            </div> : <></>  }
         </div>  
    )
}