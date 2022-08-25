import { Header } from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { HomePageContainer } from "./style";
import { results } from "../../data/data";
import { useState } from "react";

export function Homepage(props){
         const { character }=props
         const {name, species , image, query ,orderParam }= props.states
         const { handleInputImage, handleInputName, handleInputSpecies, handleInputQuery, handleInputOrderParam } = props.handles
         const {addCharacter} =props
         const {removeCharacter} = props

         const renderList = character
         .filter( char => query === "" || char.name.toLowerCase().includes(query) )
         .sort((a,b)=>orderParam === "" || orderParam === "asc" && a.name > b.name ? 1 : -1)
         .sort((a,b)=>orderParam === "" || orderParam === "desc" && a.name > b.name ? -1 : 1)
         .map( char =>{
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
       <>
       <Header/> 
       <HomePageContainer>
         
         <aside>
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
             
                  <h2>Buscar</h2>
                  <input
                  type="text"
                  value={query}
                  onChange={handleInputQuery}
            
                  ></input>

                  <h2>Ordenar</h2>
                    <select value={orderParam} onChange={handleInputOrderParam} >
                         <option 
                         value="asc" 
                         
                         >crescente </option>
                         
                         <option 
                         value="desc" 
                         
                         >descrecente</option>
                    </select>

           </form>
         </aside>
         <main>
        {renderList}
        
        </main> 
        </HomePageContainer>
   </>
    )
}