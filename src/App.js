import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      // axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon'
      const res = await axios('https://pokeapi.co/api/v2/pokemon')
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      setLoading(false); 
    }
    fetchData();
  }, [])

  return (
    <div>
      { loading ? <h1>Loading...</h1> : (
        <h1>Data is alredy done.</h1>
      )}
    </div>
  );
}

export default App;
