import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuAPI";
import { useEffect, useState } from "react";

function MenuDetails() {

    const {menuCode} = useParams();
    console.log(menuCode);
    // menuCode 에 따라 유동적으로 처리를 할 수 있다.

    // 개발할떄 useState 를 빈객체로 초기화해도 되지만,
    // menu의 형태를 임시로 써놓으면 도움이 된다.
    const [menu,setMenu] = useState({
        menuName: '',
        menuPirce: 0,
        categoryName: '',
        detail: {}
    });

    useEffect(
        () => {
            // 메뉴코드에 해당하는 menu 객체
            setMenu(getMenuDetail(menuCode))
        },[]
    )

    return(
        <>
        <h2>Menu</h2>
        <img src={menu.detail.image} style={{ maxWidth: 500 , maxHeight: 500 }}/>
        <h3>메뉴 이름: {menu.menuName}</h3>
        <h3>메뉴 가격: {menu.menuPrice}</h3>
        <h3>메뉴 종류: {menu.categoryName}</h3>
        <h3>메뉴 설명: {menu.detail.description}</h3>
        </>
    )
}

export default MenuDetails;