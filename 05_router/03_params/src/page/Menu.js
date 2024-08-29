import {useState,useEffect} from 'react';
import { getMenuList } from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';
import { useNavigate } from 'react-router-dom';

function Menu(){

    const [menuList,setMenuList] = useState([]);
    const [searchValue,setSearchValue] = useState();
    const navigate = useNavigate();

    // 메뉴 컴포넌트가 마운트 되기 전에 데이터를 가져와서 state 에 담김
    useEffect(
        () => {
            // 데이터를 가져오는 로직
            // console.log(getMenuList());

            // json 형태로 파싱된 데이터는 table 형태로 뽑을 수 있다.
            // console.table(getMenuList());

            setMenuList(getMenuList());
        },[]
    )
    const onClickHandler = () => {
        console.log(searchValue);
        navigate(`/menu/search?menuName=${searchValue}`)
    }

    return(
        <>
        <h3>🍻Menu pages</h3>
        <div>
            <input
            type='search'
            name='menuName'
            onChange={(e)=>{ setSearchValue(e.target.value) }}
            />
            <button
            onClick={ onClickHandler }
            >Search</button>
        </div>
        <div className={boxStyle.MenuBox}>
            {/* 메뉴 컴포넌트를 반복해서 보여줄 예정 */}
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}></MenuItem>)}
        </div>
        </>
    )
}
export default Menu;