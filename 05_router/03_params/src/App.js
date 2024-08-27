import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './page/Main';
import Menu from './page/Menu';
import About from './page/About';
import './App.css';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
