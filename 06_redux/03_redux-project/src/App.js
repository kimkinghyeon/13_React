import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Pokemons from './pages/Pokemons';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layouts/> }>
          <Route index element={ <Main/>}/>
          <Route path='pokemons' element={ <Pokemons/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
