import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([]);
    

    const states = {
        nextUrl,
        setNextUrl,
        prevUrl,
        setPrevUrl,
        loading,
        setLoading,
        allData,
        setAllData
    }

    return (
        <PokemonContext.Provider value={ states } displayName='Data' >
            {props.children}
        </PokemonContext.Provider>
    );
}