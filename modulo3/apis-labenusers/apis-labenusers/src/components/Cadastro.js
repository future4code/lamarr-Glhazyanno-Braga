import React, {useEffect,useState} from "react";
import axios from 'axios';
import MostrarLista from "./MostraLista";


 const Cadastro = () => {
    const [myInputName,setMyInputName]=useState("");
    const [myInputEmail,setMyInputEmail]=useState("");
//Recbe input
const atualizaInputName = (event)=>{
    setMyInputName(event.target.value)
}
const atualizaInputEmail = (event)=>{
    setMyInputEmail(event.target.value)
}


//axios
const urlCriarUsuario = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const myHeadersU ={
    headers:{
      Authorization: "Glhazyanno-Linhares-Lamarr"
    }

}
//post


const body ={
        "name": myInputName,
        "email": myInputEmail
    }
    
    
const postLista =()=>{
    
    axios.post(urlCriarUsuario,body,myHeadersU )
    .then(()=>{
      
        alert("Cadastrado com Sucesso")
    })
    .catch((erro)=>{
        alert("Erro")
    })
    setMyInputName("")
    setMyInputEmail("")
}

    return(
        <>
        <h1>Cadastro</h1>
        <h4>Digite seu Nome:</h4>
        <input type='text' value={myInputName} onChange={atualizaInputName}></input>
        <h4>Digite seu E-mail:</h4> 
        <input type='email' value={myInputEmail} onChange={atualizaInputEmail}></input>
        <br></br>
        <button onClick={postLista} >Cadastrar</button>
        

        <button>Lista dos alunos</button>
        </>
    )
}

export default Cadastro;