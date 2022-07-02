import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './imagens/perfil.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './imagens/email.png'
import endereco from './imagens/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {perfil}
          nome="Glhazyanno" 
          descricao="Oi, eu sou Glhazynno Linhares Braga. Sou estudante da Engenharia da Computação e estudante da Labenu. Atualmente trabalho na empresa Gateway Computadores como tecnico de TI."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
        <CardPequeno
          imagem={email}
          titulo='Email: '
          informacao='glbraga9@gmail.com'

        />
        <CardPequeno
          imagem={endereco}
          titulo='Endereço: '
          informacao='Sobral-Ce'

        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Atualmento tenho conhecimento adquerido na Labenu de HTML, CSS, Github, Javascript e estou começando React." 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Como estou fazendo muitas atividades ao mesmo tempo, meu tempo é limitado." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
