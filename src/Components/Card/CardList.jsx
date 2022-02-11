import React, { useEffect, useContext } from 'react';
import { PokemonContext } from '../../Context/PokemonContext';
import api from '../../Services/api';
import { Card } from './index';

const CardList = () => {

    //contextApi
    const { setLoading, setNextUrl, setPrevUrl, allData, setAllData } = useContext(PokemonContext);

    //First API
    useEffect(() => {
        const fetchData = async () => {
            const res = await api('pokemon');
            setAllData(res.data.results);
            setNextUrl(res.data.next);
            setPrevUrl(res.data.previous);
            setLoading(false);
        }
        fetchData();
    }, [setAllData, setLoading, setNextUrl, setPrevUrl])

    return (
        <>
            {allData.map((val, idx) => (
                <Card key={idx} thisPokemon={val} />
            ))}
        </>
    );
}

export default CardList;
