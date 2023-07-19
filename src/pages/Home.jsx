import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Home = ({ setPokemonData }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();
    console.log(pokemonList);
    useEffect(() => {
        if (searchTerm === "") {
            renderPokemon();
        } else {
            searchPokemon();
        }
    }, [currentPage, searchTerm]);

    const renderPokemon = () => {
        const limit = 20;
        const offset = (currentPage - 1) * limit;
        const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

        axios
            .get(endpoint)
            .then((response) => {
                const pokemons = response.data.results;
                const promises = pokemons.map((pokemon) =>
                    axios.get(pokemon.url)
                );
                return axios.all(promises);
            })
            .then((res) => {
                const newPokemons = res.map((pokemon) => pokemon.data);
                setPokemonList(newPokemons);
            })
            .catch((error) => {
                console.error("Erro ao carregar pokémons", error);
            });
    };

    const searchPokemon = () => {
        const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=1000`;

        axios
            .get(endpoint)
            .then((response) => {
                const pokemons = response.data.results;
                const filteredPokemons = pokemons.filter((pokemon) =>
                    pokemon.name.startsWith(searchTerm.toLowerCase())
                );
                const promises = filteredPokemons.map((pokemon) =>
                    axios.get(pokemon.url)
                );
                return axios.all(promises);
            })
            .then((res) => {
                const newPokemons = res.map((pokemon) => pokemon.data);
                setPokemonList(newPokemons);
            })
            .catch((error) => {
                console.error("Erro ao pesquisar pokémons", error);
            });
    };

    const handleClickLoading = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleSearch = (name) => {
        setSearchTerm(name);
        setCurrentPage(1);
        setPokemonList([]);
    };

    const pokemonPickHandle = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/stats");
        localStorage.setItem("pokemonData", JSON.stringify(pokemonData));
    };

    return (
        <div className="bg-slate-600">
            <NavBar pokemonFilter={handleSearch} />
            <div className="flex justify-center flex-wrap">
                {pokemonList.map((pokemon, id) => (
                    <div key={id} onClick={() => pokemonPickHandle(pokemon)}>
                        <PokemonCard
                            key={id}
                            id={pokemon.id}
                            image={
                                pokemon.sprites.other.dream_world.front_default
                            }
                            name={pokemon.name}
                            types={pokemon.types}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center bg-slate-800">
                {searchTerm === "" && (
                    <div className="inline-flex gap-2 py-5">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded-l"
                            onClick={handleClickLoading}
                        >
                            Prev
                        </button>
                        <button
                            onClick={handleNextClick}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded-r"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
