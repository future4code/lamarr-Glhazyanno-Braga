
import Card from './components/Card/Card'
import {Header} from './components/Header/Header'
import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/Detailspage/DetailsPage';
import { Homepage } from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <GlobalStyle/>
      
    </div>
  );
}

export default App;
