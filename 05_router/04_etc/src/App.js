import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layouts from './layouts/Layouts';
import Main from './pages/Main';
import Login from './pages/Login';
import Error from './pages/Error'
import MyPage from './pages/MyPage';
/**
 * 
 * ㅇ?
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts/>}>
            <Route path='main' element={<Main/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='mypage' element={<MyPage/>}/>
            {/* 404 와 관련된 페이지 추가 */}
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;