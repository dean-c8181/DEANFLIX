import React from "react";
import styled from "styled-components";
// 각 탭별로 이동할때 화면 깜빡임(새로운 탭 불러오는동안 안에 내용물이 다시 rending되는 짧은 시간동안 사라졌다 나옴- 깜빡이는것처럼 보이는거 로딩이미지 넣기)

const Container = styled.div`
    height: calc(100vh - 80px);
    width:100vw;
    display:flex;
    justify-content:center;
    font-size:32px;
    padding-top:20px;
`;

export default () => (
    <Container>
        <span role="img" aria-label="Loading">⏰</span>
    </Container>
);
