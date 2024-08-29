import menus from '../data/menu-detail.json'

// 전체 메뉴 리스트를 반환하는 메소드
export function getMenuList(){

    // json 으로 파싱된 데이터를 반환
    return menus;
}

// MenuDetails 에서 넘겨준 메뉴 코드와 일치하는 메뉴 객체 반환
export function getMenuDetail(menuCode) {
    // console.log('details 값',menuCode);
    // console.log(typeof menuCode); // pathvariable 에서 꺼내온 값은 문자열

    // menu 배열에서 filter 의 콜백함수가 true 를 반환하게 
    // 하는 배열 요소만을 가지고 다시 배열로 반환

    // 이때, 파싱된 데이터에서 꺼낸 객체의 menuCode 는 숫자이므로
    // Pathvariable 로 넘겨받은 값(문자열)을 숫자형으로 변경필요
    // console.log(menus.filter(menu => menu.menuCode === parseInt(menuCode))[0]);
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0]
}

export function searchMenu(searchMenuName){
    console.log('searchMenuName',searchMenuName); 
    // match 함수는 포함 여부에 따라 인수값이 포함되어 있으면 객체를 반환
    // console.log('abc'.match('ab'));

    // menu.menuName에 검색어가 들어있는 menu객체들을 배열로 반환
    console.log(menus.filter(menu => menu.menuName.match(searchMenuName)));

    return menus.filter(menu => menu.menuName.match(searchMenuName));
}