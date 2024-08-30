import Navbar from "../components/commons/Navbar";
import Headler from "../components/commons/Headler";
import {Outlet} from "react-router-dom"

function Layouts(){
    return(
        <div>
            <Headler/>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Layouts;