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

      <p style={{color: 'white', marginBottom: '0px', fontSize: '13px'}}>Desenvolvido com ♥ por: <a style={{textDecoration: 'none', color: 'white'}} href='https://www.linkedin.com/in/francisco-luan-oliveira-458b7b14a'>Luan Oliveira</a></p>
      <p style={{color: 'white', marginBottom: '0px', marginTop: '0px', fontSize: '13px', paddingBottom: '30px'}}>Contato: engluanoliv@gmail.com</p>

    </div>

  );
}

export default App;
