import React,{ useState } from 'react';
import Post from './components/Post/Post';
import './style.css'
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

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
    width: 20%;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: orange;
  }

  button:hover {
    cursor: pointer;
    color: white;
  }
`

function App() {
 // estados
    const [inputUsuario, setInputUsuario] = useState("")
    const [inputFotoUsuario, setInputFotoUsuario] = useState("")
    const [inputFotoPost, setInputFotoPost] = useState("")
    const [inputArrayPost, setArrayPost] = useState([
 
    { nomeUsuario:"Cesar",
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150' },
    { nomeUsuario:"Ronaldo",
      fotoUsuario: 'https://picsum.photos/51/53',
      fotoPost:'https://picsum.photos/250/150' },
    { nomeUsuario:"Apolo",
      fotoUsuario: 'https://picsum.photos/55/56',
      fotoPost:'https://picsum.photos/230/150' },
    ])
 
    // eventos
    const handleInputUsuario = (e) => {
      setInputUsuario(e.target.value)
    }
  
    const handleInputFotoUsuario = (e) => {
      setInputFotoUsuario(e.target.value)
    }  
    
    const handleInputFotoPost = (e) => {
      setInputFotoPost(e.target.value)
    } 

    const addPost = (e) => {
      e.preventDefault();
      const novoPost = {nomeUsuario: inputUsuario, fotoUsuario: inputFotoUsuario, fotoPost: inputFotoPost }
      const novaListaPostagens = [...inputArrayPost, novoPost ]
      setArrayPost(novaListaPostagens)   
    }

  const listaPost = inputArrayPost.map((elemento, index) =>{
   return <Post
           nomeUsuario={elemento.nomeUsuario}
           fotoUsuario={elemento.fotoUsuario}
           fotoPost={elemento.fotoPost}
           
           key={index}
           />
  })
  return(
  <div className='MainContainer'>
           

       <Form>
              <label>Usuario: </label>
              <input
                    placeholder='Nome do Usuario'
                    value={inputUsuario}
                    onChange={handleInputUsuario}               
              />  
              <label>FotoUsusario: </label>
              <input
                    placeholder='Foto do Usuario'
                    value={inputFotoUsuario}
                    onChange={handleInputFotoUsuario}               
              /> 
              <label>Usuario: </label>
              <input
                    placeholder='Foto do Post'
                    value={inputFotoPost}
                    onChange={handleInputFotoPost}               
              /> 
              <button onClick={addPost} > Enviar Postagem  </button>
       </Form>
       { listaPost }

       {console.log(inputArrayPost)}
  </div>
)

}


export default App;
