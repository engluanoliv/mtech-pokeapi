import React, { useContext } from 'react';
import './App.css';
import CardList from './Components/Card/CardList';
import PageButton from './Components/Button';
import InputSearch from './Components/Search';
import { PokemonContext } from './Context/PokemonContext';


function App() {

  const { loading } = useContext(PokemonContext);

  return (

    <div className='App'>

      {/* Buttons */}
      <div className='buttons'>
        <PageButton page={'prev'} name={'Anterior'} />
        <PageButton page={'next'} name={'Proxima'} />
      </div>

      {/* loading pokemon */}
      <div>
        <div>
          {loading ? <h1 className='loadingPokemons'>Carregando Pokemóns...</h1> : <></>}
        </div>
      </div>

      <div>
        <InputSearch />
      </div>

      {/* Cards */}
      <div className='mainContent'>
        <CardList />
      </div>

      {/* Buttons */}
      <div className='buttons'>
        <PageButton page={'prev'} name={'Anterior'} />
        <PageButton page={'next'} name={'Próxima'} />
      </div>

    </div>

  );
}

export default App;
