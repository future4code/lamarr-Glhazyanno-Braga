import { Header } from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { HomePageContainer } from "./style";
import { results } from "../../data/data";
import { useState } from "react";

export function Homepage(props){
         const { character }=props
         const {name, species , image}= props.states
         const { handleInputImage, handleInputName, handleInputSpecies } = props.handles
         const {addCharacter} =props
         const {removeCharacter} = props

         const renderList = character.map( char =>{
               return(
                <Card key = {char.id}
                id={char.id}
                
                img = {char.image}
                name = {char.name}
                species={char.species}
                removeCharacter={removeCharacter}
                
                />
               )

        } ) 

    
      

    return(
        <HomePageContainer>
         <Header/>
         <form>
           <label  htmlFor="image"  >image:</label>
           <input 
           id="image"
           type="text"
           onChange={handleInputImage}
           value={image}
           ></input>

           <label  htmlFor="name"  >name:</label>
           <input 
           id="name"
           type="text"
           onChange={handleInputName}
           value={name}
           ></input>

           <label  htmlFor="species"  >species:</label>
           <input 
           id="species"
           type="text"
           onChange={handleInputSpecies}
           value={species}

           ></input>

           <button onClick={addCharacter} >criar</button>

         </form>
         <main>
        {renderList}
        
        </main> 
        </HomePageContainer>

    )
}