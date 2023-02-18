import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return(
        <div>
            <h1>로그인 로그아웃 테스트 페이지</h1>
            <Toolbar 
              isLoggedIn={isLoggedIn}
              onClickLogin={onClickLogin}
              onClickLogout={onClickLogout}
              />
              <div style={{padding : 16}}>성희의 리액트공부!</div>
        </div>
    );
}

export default LandingPage;