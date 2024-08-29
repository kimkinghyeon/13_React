import Head from "../components/Head"
import Nav from "../components/Nav"
import {Outlet} from 'react-router-dom'

import './layout.css';  
function Layout() {
    return (
    <div className="layout-container">
        <div className="header">
        <Head/>
        </div>
        <div className="nav">
        <Nav/>
        </div>
        <div className="outlet">
        <Outlet/>
        </div>
    </div>
    );
}

export default Layout;