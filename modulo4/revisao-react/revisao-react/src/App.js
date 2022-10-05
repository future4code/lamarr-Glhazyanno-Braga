
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
  const [query, setQuery] = useState("")
  const [orderParam, setOrderParam] = useState("")
  const [page , setPage] = useState("homepage")
  const [id , setId] = useState(0)

  const handleInputImage = (event) =>setImage( event.target.value)
  const handleInputName = (event) => setName (event.target.value)
  const handleInputSpecies = (event) => setSpecies (event.target.value)
  const handleInputQuery = (event)=> setQuery(event.target.value)
  const handleInputOrderParam = (event) =>setOrderParam(event.target.value)

  const changePage = (page , id) => {
    setPage(page)
    setId(id)
  }
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
  
  const renderPage = () => {
     switch(page){
      case 'homepage':
      return <Homepage 
      character={character}
      states={{name,species,image, query, orderParam}}
      handles={{handleInputImage,handleInputName,handleInputSpecies,handleInputQuery,handleInputOrderParam}}
      addCharacter={addCharacter}
      removeCharacter={removeCharacter}
      changePage={changePage}

      />
      case 'detailspage':
        return <DetailsPage
        character={character}
        id={id}
        />
     }

  }    

  return (
    <div className="App">
      <GlobalStyle/>
      {renderPage()}
      

    </div>
  );
}

export default App;
