import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home/index";
import tv from "../Routes/TV/index";
import Search from "../Routes/Search/index";
// 강의에선 폴더명까지만 파일경로 잡아주면되었는데 인식을 못해서 index까지 모두 써줌
import Header from "./Header";
// Link는 Router안에 있어야 하기 때문에 Header.Js의 컴포넌트를 Router안에서 Import하게 변경
import Detail from "../Routes/Detail/index";



//Router는 오질 하나의 child만 Render하기 때문에 fragment로 감싸준다(<></>); -- Header를 추가하게됨.
export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={tv} />                     
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} /*:id는 파라미터 객체키값임 */ />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)

// <Route path="/" 뒤의 exact 는 주소가 완벽히 일치해야 해당 Route를 불러오게한다.

// Redirect는 모든페이지(from="*")를 지정페이지로(to="/")로 강제로 이동시킨다. 여기서 Redirect를 사용하는 이유는 원치 않는 페이지로 접속을 하거나 의도하지 않은 페이지의 주소를 입력할때 지정페이지로 보내주기 위해 사용한다. 이때 어느 탭을 눌러도 home 로만 가게되는데 이는 아래의 Switch가 해결 해 준다.

// <Switch></Switch>는 해당 안에 있는 Route중 하나만 render하게 해줌. - 코딩순서에따라 일치하는 Route를 보여주고 나머지는 무시함.

/*
<Switch />: 하위에 라우터 중 하나를 선택한다
<Redirect />: 요청 경로를 다른 경로로 리다이렉션한다
위의 설명은 아래 링크참조
https://jeonghwan-kim.github.io/dev/2019/07/08/react-router-ts.html
*/