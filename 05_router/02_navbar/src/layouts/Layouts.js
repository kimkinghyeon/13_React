import Header from "../component/Header"
import Navbar from "../component/Navbar"
import {Outlet} from 'react-router-dom'

// Outlet : react-router-dom  에서 지원하는 기능으로
//          부모인 Layout 컴포넌트가 렌더링 되는 순간
//          자식 경로의 컴포넌트를 바꿔치기 해서 렌더링 할 수 있다.

function Layouts(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
            {/* <Outlet/> 바뀔부분 */}
        </div>
    )
}

export default Layouts;