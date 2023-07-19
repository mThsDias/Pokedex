import React from "react";
import pokemon from "../img/pokemon.png";
import Search from "./Search";

const NavBar = ({ pokemonFilter }) => {
    return (
        <nav className="mb-10 py-10 px-10 flex items-center justify-between bg-slate-800 shadow-md">
            <img className="w-80 max-md:hidden" src={pokemon} alt="pokemon" />
            <Search pokemonFilter={pokemonFilter} />
        </nav>
    );
};

export default NavBar;
