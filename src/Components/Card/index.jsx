import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import imageAvatar from '../../assets/pokemon.png';
import { PokemonContext } from "../../Context/PokemonContext";
import api from "../../Services/api";
import {
    ContainerCard,
    ContentCard,
    Content,
    Avatar,
    Texth3,
    Textp,
    Texta
} from "./style";


export const Card = () => {

    const states = useContext(PokemonContext);

    useEffect(() => {
        const fetchData = async () => {
            const res = await api('pokemon');
            states.setAllData(res.data.results);
            states.setLoading(false);
        }
        fetchData();
    }, [])


    const fetchPokemonData = async () => {
        const res = await axios.get(states.allData?.map(pokemon => {
            
        }))
        console.log(res);
    }
    fetchPokemonData();

    


    return (

        <ContainerCard>

            <ContentCard>

                <Content>

                    <Avatar src={imageAvatar} />
                    <Texth3>Card One</Texth3>
                    <Textp>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt.</Textp>
                    <Texta> See More </Texta>

                </Content>

            </ContentCard>

        </ContainerCard>

    );
}