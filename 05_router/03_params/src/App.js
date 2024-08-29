import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './page/Main';
import Menu from './page/Menu';
import About from './page/About';
import MenuDetails from './page/MenuDetail';
import MenuSearchResult from './page/MenuSearchResult';
import './App.css';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="main" element={<Main/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="menu">
          <Route index element={<Menu/>}/>
          {/* :menuCode => pathVariable를 사용해 값 전달 */}
          <Route path=":menuCode" element={<MenuDetails/>}/>
          <Route path="search" element={<MenuSearchResult/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
      </div>
  );
}

export default App;
