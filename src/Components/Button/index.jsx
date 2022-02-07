import React, { useContext } from "react";
import { PokemonContext } from "../../Context/PokemonContext";
import { Button } from "./style";
import axios from "axios";

const PageButton = ({ name, page }) => {

    const { setLoading, setAllData, nextUrl, setNextUrl, prevUrl, setPrevUrl } = useContext(PokemonContext);

    //Function Next Button
    const next = async () => {
        setLoading(true);
        let res = await axios(nextUrl);
        setAllData(res.data.results);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous)
        setLoading(false);
    }

    //Function Previous Button
    const prev = async () => {
        if (!prevUrl) return;
        setLoading(true);
        let res = await axios(prevUrl);
        setAllData(res.data.results);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous)
        setLoading(false);
    }

    return (
        <>
            <Button onClick={page === 'prev' ? {prev} : {next}}>{name}</Button>
        </>
    );
}

export default PageButton;