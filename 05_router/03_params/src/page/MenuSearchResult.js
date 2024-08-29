import { useSearchParams } from "react-router-dom";
import { searchMenu } from "../api/MenuAPI";
import { useEffect, useState } from "react";
import boxStyle from './Menu.module.css';
import MenuItem from "../components/MenuItem";

function MenuSearchResult() {


// useSearchParm 을 이용해 쿼리스트링으로 전달받은 값을 꺼낼 수 있다.
const [searchParam] = useSearchParams();

// console.log(searchParam.get('menuName'));
const searchMenuName = searchParam.get('menuName');

// 검색어를 받아옴
// 검색어를 기준으로 데이터에서 찾아오기

const[menuList,setMenuList] = useState([]);

useEffect(
    ()=>{
        setMenuList(searchMenu(searchMenuName));
    },[]
    )

    return(
        <>
            <div className={boxStyle.MenuBox}>
            <h1>검색 결과</h1>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )

}

export default MenuSearchResult;