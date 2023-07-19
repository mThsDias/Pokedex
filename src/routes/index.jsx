import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Stats from "../pages/Stats";

const index = () => {
    const [pokemonData, setPokemonData] = useState();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home setPokemonData={setPokemonData} />}
                />
                <Route
                    path="/stats"
                    element={<Stats pokemonData={pokemonData} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default index;
