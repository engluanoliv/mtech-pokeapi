import React, { useState } from "react";
import { InputPokemon } from "./style";

const InputSearch = () => {


    const searchPokemon = () => {

    }

    const [searchedPokemon, setSearchedPokemon] = useState([]);

    
    return (
        <>
            <InputPokemon placeholder="Busque aqui o seu Pokemón" value={searchedPokemon} onChange={searchPokemon} />
        </>
    );
}

export default InputSearch;