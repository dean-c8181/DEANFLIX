import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import tv from "../Routes/TV";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={tv} /> 
            <Route path="/tv/popular" render={() => <h1> /tv에 exact가 있어야 이페이지로 올수있어요! <br />이유는 switch가 한개의 라우터만 보여주는데 공통된 path(/tv, /tv/popular)가 존재하는 Route가 2개 이기 때문에 하나의 Router(path="/tv")만을 보여줍니다.</h1>} />                       
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
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