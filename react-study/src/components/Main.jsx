/**
 * JSX 주의 사항 *
 * 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
 * 2. 숫자, 배열, 문자열 값만 렌더링 된다. (Bool, undefined, null, Object는 안됨 )
 * 3. 모든 태그는 닫혀야한다.
 * 4. 최상위 태그는 하나여야만 한다. 
 */

import './Main.css'; 
const Main = () => {
    const info = {
        name: '이수빈',
        isLogin: true,
    };
    
    if (info.isLogin) {
        return <div className='logout'> 로그아웃</div>
    } else {
        return <div> 로그인</div>
    }
};

export default Main;  