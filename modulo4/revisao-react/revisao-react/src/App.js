
import Card from './components/Card/Card'
import {Header} from './components/Header/Header'
import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/Detailspage/DetailsPage';
import { Homepage } from './pages/Homepage/Homepage';
import {results} from './data/data';
import { useState } from 'react';
 
function App() {

  const [character,setCharacter] = useState(results)


  const addCharacter =() =>{
       const newCharacter ={
        "id": 20,
        "name": "teste",
        "species": "Human",
        "origin": {
            "name": "Earth"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
       }

      const characterList =[...character, newCharacter]
      setCharacter(characterList)
}
  

  return (
    <div className="App">
      <Homepage character={character}  />
      <GlobalStyle/>
      <button onClick={addCharacter}>Adicionar</button>
    </div>
  );
}

export default App;
