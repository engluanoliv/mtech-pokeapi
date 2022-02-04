import React, { useEffect, useContext } from "react";
import api from "../../Services/api";
import imageAvatar from '../../assets/pokemon.png';
import { PokemonContext } from "../../Context/PokemonContext";
import {
    ContainerCard,
    ContentCard,
    Content,
    Avatar,
    Texth3,
    Textp,
    Texta
} from "./style";

export const Card = ({ name }) => {

    const { pokemonData, setPokemonData } = useContext(PokemonContext);

    

    useEffect(() => {
        const fetchPokemonData = async () => {
            const res = await api(`pokemon/${name}`);
            setPokemonData(res.data);
        }
        fetchPokemonData();
    }, [])

    // console.log(pokemonData);

    return (
        <>
            <ContainerCard>
                <ContentCard>
                    <Content>
                        <Avatar src={imageAvatar} />
                        <Texth3>{name}</Texth3>
                        <Textp>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt.</Textp>
                        <Texta> See More </Texta>
                    </Content>
                </ContentCard>
            </ContainerCard>
        </>
    );
}
