import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layouts from './layouts/Layouts';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/Mypage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts/>}>
            <Route index element={<Main/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='mypage' element={<MyPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
