import React from 'react';
import Post from './components/Post/Post';
import ronaldo from './img/ronaldo.jpg';
import imagemRonaldo from './img/imagemRonaldo.jpg';
import goku from './img/goku.jfif';
import imagemGoku from './img/imagemGoku.jfif';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'ronaldo'}
            fotoUsuario={ronaldo}
            fotoPost={imagemRonaldo}
          />
          <Post
            nomeUsuario={'goku'}
            fotoUsuario={goku}
            fotoPost={imagemGoku}
          />
  </div>
)

}


export default App;
