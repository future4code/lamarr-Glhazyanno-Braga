import {ItemPlayList, PlayList} from "../Style"
import React, {useEffect,useState} from "react";
import axios from 'axios';
import { computeHeadingLevel } from "@testing-library/react";

 const MostrarLista = () => {
    const [myList,setMyList]=useState([]);
 // Lista em componentes

 const componentesLista = myList.map((item, index,list)=> {  
   return(
             <ItemPlayList>
                {item.name}

             </ItemPlayList>
   )
 })

useEffect(()=>{
   getList()},[]
)
 //Axios
const urlMostraLista = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const myHeaders ={
      headers:{
        Authorization: "Glhazyanno-Linhares-Lamarr"
      }
     
}
//Get

const getList = () => {
    axios.get(urlMostraLista, myHeaders)
    .then((response)=>{
        setMyList(response.data)
        
    })
} 


return(
        <>
        <h1>LISTA DE NOMES</h1>
        <PlayList>
            {componentesLista}
            
        </PlayList>
        <button>Voltar</button>
        
        </>
    )
}

export default MostrarLista;