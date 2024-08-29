import {NavLink} from 'react-router-dom';

function Nav(){

    const activeStyle = {
        backgroundColor: 'black',
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
                <li><NavLink to="/about" style={({isActive})=> isActive? activeStyle: undefined}>About</NavLink></li>
                <li><NavLink to="/menu" style={({isActive})=> isActive? activeStyle: undefined}>Menu</NavLink></li>
            </ul>
        </div>
    )
}
export default Nav;