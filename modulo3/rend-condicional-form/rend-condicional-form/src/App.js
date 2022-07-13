import logo from './logo.svg';
import './App.css';
import {Etapa1} from './components/Etapa1';
import {Etapa2} from './components/Etapa2';
import {Etapa3} from './components/Etapa3';
import {Final} from './components/Final';
import { useState } from 'react';


function App() {
  const {mudancaEtapa} = 1 ;
 const state = {
    etapa: 1,
  }
  function RenderizacaoEtapa(){
    
    const[trocaEtapa, setTrocaEtapa] = useState(1);
      
    switch(trocaEtapa){
          case 1:
          return <Etapa1 mudancaEtapa={irParaProximaEtapa} />
          break
          case 2:
          return <Etapa2 mudancaEtapa={irParaProximaEtapa} />
          break
          case 3:
          return <Etapa3 mudancaEtapa={irParaProximaEtapa} />
          break
          case 4: 
          return <Final mudancaEtapa={irParaProximaEtapa} />
          default:
            break;
    }
  }

  
 function irParaProximaEtapa(){
  


 }
 
 return (
        

    <div className='App'>
      <RenderizacaoEtapa/>
      <button onClick={mudancaEtapa} >Proxima Etapa</button>

    </div>
  );
}

export default App;
