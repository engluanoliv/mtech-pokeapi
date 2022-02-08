import React, { useState, useEffect } from "react";
import api from '../../Services/api';
import { InputPokemon } from "./style";

const InputSearch = () => {

    // const [searchedPokemon, setSearchedPokemon] = useState([]);



    useEffect(() => {

        const searchPokemon = async (e) => {
            const res = await api(`/${e.target.value}`)
            // setSearchedPokemon(e.target.value)
            console.log(res)
        };
        searchPokemon();
    }, [])


    return (
        <>
            <InputPokemon placeholder="Busque aqui o seu Pokemón" onChange={this.searchPokemon} />
        </>
    );
}

export default InputSearch;