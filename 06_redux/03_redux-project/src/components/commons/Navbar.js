import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <ul>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/pokemons'>Pokemons</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;