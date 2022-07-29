import logo from './logo.svg';
import './App.css';
import Cadastro from './components/Cadastro';
import MostrarLista from './components/MostraLista';
function App() {
  return (
    <div>
      {Cadastro()}
       
      
      {MostrarLista()}
      
    </div>
  );
}

export default App;
