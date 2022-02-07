import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import api from './Services/api';
import axios from 'axios';
import { PokemonContext } from './Context/PokemonContext';
import Particles from 'react-tsparticles';
import CardList from './Components/Card/CardList';
import PageButton from './Components/Button';


function App() {

  //Particles.js 
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  //contextApi
  const { loading, setLoading, nextUrl, setNextUrl, prevUrl, setPrevUrl } = useContext(PokemonContext);

  //useState to save all Data and pass by props to components
  const [allData, setAllData] = useState([]);

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
  }, [])

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
    <div className='App'>

      {/* Particles  */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#000",
          //   },
          // },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

      {/* loading pokemon */}
      <div>
        <div>
          {loading ? <h1 class='loadingPokemons'>Carregando Pokemóns...</h1> : (
            <>
              {/* <h1 class='loadingPokemons'>Pokemóns Carregados</h1> */}
            </>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div class='buttons'>
        <PageButton page={prev} name={'Anterior'} />
        <PageButton page={next} name={'Proxima'} />
      </div>

      {/* Cards */}
      <div className='mainContent'>
        <CardList pokemon={allData} />
      </div>

      {/* Buttons */}
      <div class='buttons'>
        <PageButton page={prev} name={'Anterior'} />
        <PageButton page={next} name={'Próxima'} />
      </div>

    </div>
  );
}

export default App;
