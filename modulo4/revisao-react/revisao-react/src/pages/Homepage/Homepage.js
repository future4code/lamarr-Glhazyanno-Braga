import { Header } from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { HomePageContainer } from "./style";

export function Homepage(){
    return(
        <HomePageContainer>
         <Header/>
         
         <main>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </main> 
        </HomePageContainer>

    )
}