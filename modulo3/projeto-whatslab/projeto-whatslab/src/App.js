import React,{ useState } from 'react';
import Post from './components/Post/Post';

import styled from 'styled-components';

const Main = styled.main`
display: flex;
justify-content: center;
 flex-direction: column;
 align-items: center;
   



`


const Header = styled.header`
  
  display: flex;
  flex-direction: column-reverse;
  width: 800px;
  height: 550px;
  background-color: gray;
   border: 1px solid black ;
`

const Form = styled.form`
  display: flex;
  border: 1px solid black ;
  width: 800px;
  justify-content: center;
  align-items: center;
  background-color: gray;
  
  
  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    padding: 10px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 15%;
     
    
  }
  .classMensagem{
    padding: 10px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 50%;
  }
  
  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color:rgb(57, 216, 85);
  }

  button:hover {
    cursor: pointer;
    color: white;
  }
  
  `
const classMensagem = styled.input`
 padding: 10px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 30%;
`


function App() {
   // estados
   const [inputUsuario, setInputUsuario] = useState("")
   const [inputMensagem, setInputMensagem] = useState("")
   const [inputArrayPost, setArrayPost] = useState([

   { nomeUsuario:"",
     mensagem: ''
    }
  
   ])
  
   // eventos
   const handleInputUsuario = (e) => {
    setInputUsuario(e.target.value)
  }

  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  } 

  // enviar mensagem
  const addPost = (e) => {
    e.preventDefault();
    const novoPost = {nomeUsuario: inputUsuario, mensagem: inputMensagem }
    const novaListaPostagens = [...inputArrayPost, novoPost ]
    setArrayPost(novaListaPostagens)   
  }

  const listaPost = inputArrayPost.map((elemento, index) =>{
    return <Post
            nomeUsuario={elemento.nomeUsuario}
            mensagem={elemento.mensagem}
            
            
            key={index}
            />
   })

  return (
    <Main>
      <Header>
         {listaPost}
      </Header>
      
      <Form>
      <label>Usuario: </label>
              <input
                    placeholder='Nome do Usuario'
                    value={inputUsuario}
                    onChange={handleInputUsuario}               
              />  
              <label>Mensagem: </label>
              <input className='classMensagem'
                    placeholder='Mensagem'
                    value={inputMensagem}
                    onChange={handleInputMensagem}
          
                    /> 
              <button onClick={addPost} > Enviar Mensagem </button>
      </Form>
    </Main>
  );
}

export default App;
