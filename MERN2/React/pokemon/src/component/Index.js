import React, { useState } from "react";
import axios from 'axios';



const Index = (e) => {
    const [pokemon, setPokemon] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokemon(response.data.results))
    }


    return (
        <>
        <h1>POKEMON</h1>
            <div>
                <input type="submit" value="fetch pokemon" onClick={handleClick} />
            </div>
            {pokemon.map((m, i) => {
                return (
                    <li>{m.name}</li>
                )
            })}
        </>

    )
}
export default Index