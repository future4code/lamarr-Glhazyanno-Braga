import { CardContainer } from "./style";

function Card(){
    return(
        <CardContainer>
         <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
         <h2>Card</h2>
         <p>Descrição</p>
        </CardContainer>

    )
}

export default Card;