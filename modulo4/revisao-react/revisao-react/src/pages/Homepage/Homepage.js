import { Header } from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { HomePageContainer } from "./style";

export function Homepage(){
    return(
        <HomePageContainer>
         <Header/>
         
         <main>
         <Card
         img = {"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
         name = {"Alfredo"}
         species={"Humano"}
         
         />
         <Card
         img = {"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
         name = {"Alfredo"}
         species={"Humano"}
         />
         <Card/>
         <Card/>
         <Card/>
        </main> 
        </HomePageContainer>

    )
}