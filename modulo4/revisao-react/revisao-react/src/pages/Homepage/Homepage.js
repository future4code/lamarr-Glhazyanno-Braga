import { Header } from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { HomePageContainer } from "./style";
import { results } from "../../data/data";

export function Homepage(props){
         const { character }=props


         const renderList = character.map( char =>{
               return(
                <Card
                key = {char.id}
                img = {char.image}
                name = {char.name}
                species={char.species}
                
                />
               )

        } ) 

    return(
        <HomePageContainer>
         <Header/>
         
         <main>
        {renderList}
        
        </main> 
        </HomePageContainer>

    )
}