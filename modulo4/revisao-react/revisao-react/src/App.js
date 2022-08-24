
import Card from './components/Card/Card'
import {Header} from './components/Header/Header'
import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/Detailspage/DetailsPage';
import { Homepage } from './pages/Homepage/Homepage';
import {results} from './data/data';
import { useState } from 'react';
 
function App() {

  const [character,setCharacter] = useState(results)
  const [image , setImage] =useState("")
  const [name , setName] =useState("")
  const [species , setSpecies] =useState("")

  const handleInputImage = (event) =>setImage( event.target.value)
  const handleInputName = (event) => setName (event.target.value)
  const handleInputSpecies = (event) => setSpecies (event.target.value)

  const addCharacter =(event) =>{
    event.preventDefault()

       const newCharacter ={
        id: Date.now(),
        name: name,
        species: species,
        origin: {
            name: "Earth"
          },
         image: image
       }

      const newCharacterList =[...character, newCharacter]
      setCharacter(newCharacterList)

      setImage("")
      setName("")
      setSpecies("")

}
      const removeCharacter =(id) => {
        const filteredList = character.filter(char =>{
          return char.id !== id }
          )

          setCharacter(filteredList)
      }
  

  return (
    <div className="App">
      <Homepage 
      character={character}
      states={{name,species,image}}
      handles={{handleInputImage,handleInputName,handleInputSpecies}}
      addCharacter={addCharacter}
      removeCharacter={removeCharacter}
      />
      <GlobalStyle/>
    
    </div>
  );
}

export default App;
