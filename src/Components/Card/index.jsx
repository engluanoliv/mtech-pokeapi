import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    ContainerCard,
    ContentCard,
    Content,
    Avatar,
    Texth3,
    Textp
} from "./style";


export const Card = ({ thisPokemon }) => {

    //Almost the interface
    const [pokemonData, setPokemonData] = useState({
        name: "",
        sprites: {
            other: {
                dream_world: {
                    front_default: "",
                },
                official_artwork: {
                    front_default: "",
                }
            }
        },
        height: "",
        weight: "",
    });

    //consume the second API, each pokemon information
    useEffect(() => {
        const fetchPokemonData = async (url) => {
            const res = await axios.get(url);
            setPokemonData(res.data);
        }
        (thisPokemon.url) ? fetchPokemonData(thisPokemon.url) : fetchPokemonData(thisPokemon);

    }, [thisPokemon])

    //Captalize the first letter
    let string = pokemonData.name;
    let cap = string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <>
            <ContainerCard>
                <Content>
                    <Avatar src={pokemonData.sprites.other.official_artwork.front_default} />
                </Content>
                <ContentCard>
                    {/* <Texth3>{cap}</Texth3>
                    <Textp>Altura: {pokemonData.height}m</Textp>
                    <Textp>Peso: {pokemonData.weight}kg</Textp> */}
                </ContentCard>
            </ContainerCard>
        </>
    );
}
