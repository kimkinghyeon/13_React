import {NavLink} from 'react-router-dom';

function Navbar(){

    const activeStyle = {
        backgroundColor: 'blue',
        color: 'white',
    }

    return(
        <div>
            <ul>
                {/* <li><a href={"/"}>Home</a></li>
                <li><a href={"/login"}>Login</a></li>
                <li><a href={"/mypage"}>MyPage</a></li>
                <li>MyPage</li>
                <li>Login</li> */}

                <li><NavLink to="/" style={({isActive})=> isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to="/login" style={({isActive})=> isActive? activeStyle: undefined}>Login</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive})=> isActive? activeStyle: undefined}>MyPage</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;