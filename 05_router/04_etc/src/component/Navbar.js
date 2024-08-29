import {NavLink} from 'react-router-dom';

function Navbar(){

    const activeStyle = {
        backgroundColor: 'black',
        color: 'white',
    }

    return(
        <div>
            <ul>
                <li><NavLink to="/main" style={({isActive})=> isActive? activeStyle: {color:'black'}}>Home</NavLink></li>
                <li><NavLink to="/login" style={({isActive})=> isActive? activeStyle: {color:'black'}}>Login</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive})=> isActive? activeStyle: {color:'black'}}>MyPage</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;