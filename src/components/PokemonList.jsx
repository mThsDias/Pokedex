import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import NavBar from './NavBar'


const PokemonList = () => {

    const [pokemonList, setPokemon] = useState([])

    useEffect(() => {
        renderPokemon()
    }, [])

    const renderPokemon = () => {
        let endpoints = []
        for (let i = 1; i < 100; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        
        axios.all(endpoints.map((endpoint) => axios
        .get(endpoint)))
        .then((res) => {
            setPokemon(res)
            console.log(res)
        });
    }

    const pokemonFilter = (name) => {
        let filterPokemon = []
        if(name === '') {
            renderPokemon()
        }
        for(let i in pokemonList) {
            if (pokemonList[i].data.name.includes(name)) {
                filterPokemon.push(pokemonList[i])
            }
        }
        setPokemon(filterPokemon)
    }
    
  return (    
    <div>
        <NavBar  pokemonFilter={pokemonFilter}/>
        <div className=' flex flex-wrap justify-center items-center  w-full max-w-full gap-10'>
            {pokemonList.map((pokemon , id) => (
                <PokemonCard 
                    key={id}
                    id={pokemon.data.id}
                    image={pokemon.data.sprites.other.dream_world.front_default}
                    name={pokemon.data.name}
                    types={pokemon.data.types}
                />
            ))}
        </div>
    </div>
  )
}

export default PokemonList