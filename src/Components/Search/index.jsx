import React, { useState } from "react";
import { InputPokemon } from "./style";

const InputSearch = () => {

    const [searchedPokemon, setSearchedPokemon] = useState([]);

    const searchPokemon = (e) => {

        setSearchedPokemon(e.target.value);

    };

    
    
    return (
        <>
            <InputPokemon placeholder="Busque aqui o seu Pokemón" onChange={searchPokemon} />
        </>
    );
}

export default InputSearch;