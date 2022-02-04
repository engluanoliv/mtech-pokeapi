import React, { useContext, useEffect } from 'react';
import api from '../../Services/api';
import { PokemonContext } from '../../Context/PokemonContext';
import { Card } from './index';

export const CardList = () => {

    const { allData, setAllData, setLoading } = useContext(PokemonContext);

    useEffect(() => {
        const fetchData = async () => {
            const res = await api('pokemon');
            setAllData(res.data.results);
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <>
            {allData.map(data => (
                <Card name={data.name} />
            ))}
        </>
    );
}
