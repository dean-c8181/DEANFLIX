import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//yarn add styled-components 설치
// 변수에 컴포넌트 설정 const List =
// 원하는 구조안에 ``을 넣고 css 작업.
// 해당구조를 컴포넌트 명으로 변경 <List></List>

// a태그 같은경우는 react-router-dom을 import해준 뒤
// const SLink = styled(Link)``; 와 같이 컴포넌트 선언 후 a태그를 SLink로 변경
// react Router에는 href가 없고 to로 사용한다.
// Link는 Router안에 있어야 하기 때문에 Header.Js의 컴포넌트를 Router안에서 Import하게 변경

const Header = styled.header``;

const List = styled.ul`
    display:flex;
    &:hover{background-color:blue;}
`;

const Items = styled.li``;

const SLink = styled(Link)``;

export default () => (
    <Header>
        <List>
            <Items>
                <SLink to="/">Movies</SLink>
            </Items>
            <Items>
                <SLink to="/tv">TV</SLink>
            </Items>
            <Items>
                <SLink to="/tv/popular">TV popular</SLink>
            </Items>
            <Items>
                <SLink to="/search">Search</SLink>
            </Items>
        </List>
    </Header>
)