import Head from "../components/Head"
import Nav from "../components/Nav"
import {Outlet} from 'react-router-dom'

function Layout(){
    return(
        <div>
            <Head/>
            <Nav/>
            <Outlet/>
        </div>
    )
}

export default Layout;