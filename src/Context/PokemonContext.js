import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {

    const [allData, setAllData] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);

    const states = {
        allData,
        setAllData,
        pokemonData, 
        setPokemonData, 
        nextUrl, 
        setNextUrl, 
        prevUrl, 
        setPrevUrl, 
        loading, 
        setLoading
    };

    return (
        <PokemonContext.Provider value={states} displayName='Data' >
            {props.children}
        </PokemonContext.Provider>
    );
}