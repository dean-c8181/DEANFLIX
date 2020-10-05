import React from "react";
import { Link, withRouter } from "react-router-dom";
// widthRouter는 컴포넌트를 감싸는 컴포넌트로 Route에 정보를 전달함.
import styled from "styled-components";
//yarn add styled-components 설치
// 변수에 컴포넌트 설정 const List =
// 원하는 구조안에 ``을 넣고 css 작업.
// 해당구조를 컴포넌트 명으로 변경 <List></List>

// a태그 같은경우는 react-router-dom을 import해준 뒤
// const SLink = styled(Link)``; 와 같이 컴포넌트 선언 후 a태그를 SLink로 변경
// react Router에는 href가 없고 to로 사용한다.
// Link는 Router안에 있어야 하기 때문에 Header.Js의 컴포넌트를 Router안에서 Import하게 변경


// Styled-componets의 style자동완성 애드온 설치 vscode-styled-components
// https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components 


// SC(styled-components)를 Global로 설정하기.
// 1. yarn add styled-reset
// 2. js파일 생성 (GlobalStyles.js) >>> 해당파일로 이동하여 작업
// 3. App.js에서 <GlobalStyles> 컴포넌트 추가

const Header = styled.header`
    color: #FFF;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    background-color:rgba(20,20,20,1);
    z-index:10;
    box-shadow:0 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
    display:flex;
    padding:0 20px;
`;

const Items = styled.li` 
    text-align:center;
    border-bottom:5px solid ${props => props.current ? "#3498db" : "transparent"};
    transition: border-bottom 0.3s ease-in;
    /*&:first-child{
        margin-left:0;
    }*/
    
`;

const SLink = styled(Link)`
    display:block;
    height:50px;
    line-height:50px;
    padding:0 20px;
    &:hover{
        color:magenta;
    }
`;

/*
const Header = () => )
    <Header>
        <List>
            <Items current={true}>
                <SLink to="/">Movies</SLink>
            </Items>
            <Items current={true}>
                <SLink to="/tv">TV</SLink>
            </Items>
            <Items current={true}>
                <SLink to="/tv/popular">TV popular</SLink>
            </Items>
            <Items current={true}>
                <SLink to="/search">Search</SLink>
            </Items>
        </List>
    </Header>
)
export default withRouter(Header); */
// widthRouter는 컴포넌트를 감싸는 컴포넌트로 Route에 정보를 전달함.
// 여기서 Header는 withRouter 안에 감싸져있는 상태 위의 구조는 아래와 동일한 기능을 수행


export default withRouter(({location: { pathname }}) => (
    <Header>
        {/*console.log(props)*/}
        <List>
            <Items current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Items>
            <Items current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Items>
            <Items current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Items>
        </List>
    </Header>
));