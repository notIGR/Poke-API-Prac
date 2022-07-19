import {createContext, useEffect, useState} from 'react'
import Ability from './components/ability';
import ChangePoke from './components/changePoke';
import Fourms from './components/fourms'

const POKE_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
export const PokeDataContext = createContext({});

function App() {
  const [pokeData, setPokeData] = useState();
  const [pokeName, setPokeName] = useState('exploud');

  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch(`${POKE_ENDPOINT}${pokeName}`);
      const result = await response.json();
      setPokeData(result);
    }
    
    fetchData();
  }, [pokeName])

  return (
    <div>
      <h1>Poke API in use</h1>
      <PokeDataContext.Provider value={{ pokeData, pokeName, setPokeName}}>
        <Ability />
        <ChangePoke />
        <Fourms />
      </PokeDataContext.Provider>
    </div>
  )
}

export default App
