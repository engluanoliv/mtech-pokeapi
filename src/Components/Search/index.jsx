import React from "react";
import api from '../../Services/api';
import { Card } from "../Card";
import { InputPokemon } from "./style";

const InputSearch = () => {



    const searchPokemon = (e) => {
        const res = `https://pokeapi.co/api/v2/pokemon/${e.target.value}`;
        console.log(res);
    };

    return (
        <>
            <InputPokemon placeholder="Busque aqui o seu Pokemón" onChange={searchPokemon} />
        </>
    );
}

export default InputSearch;