import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  const arrayPost = [
    { nomeUsuario:"Cesar",
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150' },
    { nomeUsuario:"Ronaldo",
      fotoUsuario: 'https://picsum.photos/51/53',
      fotoPost:'https://picsum.photos/250/150' },
    { nomeUsuario:"Goku",
      fotoUsuario: 'https://picsum.photos/55/56',
      fotoPost:'https://picsum.photos/230/150' },
  ]

  const listaPost = arrayPost.map((elemento, index) =>{
   return <Post
           nomeUsuario={elemento.nomeUsuario}
           fotoUsuario={elemento.fotoUsuario}
           fotoPost={elemento.fotoPost}
           
           key={index}
           />
  })
  return(
  <div className='MainContainer'>
           { /*<Post
            nomeUsuario={'Cesar'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
            <Post
            nomeUsuario={'Ronaldo'}
            fotoUsuario={'https://picsum.photos/51/53'}
            fotoPost={'https://picsum.photos/250/180'}
          />
            <Post
            nomeUsuario={'Goku'}
            fotoUsuario={'https://picsum.photos/55/56'}
            fotoPost={'https://picsum.photos/230/160'}
          /> */
          
        listaPost }

       {console.log(arrayPost)}
          
  </div>
)

}


export default App;
