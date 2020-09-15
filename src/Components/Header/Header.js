import React from "react";
import styles from './Header.module.css';
// css모듈화 이방법은 작은프로젝트에서 주로 쓰임
// css 파일명을 파일명.module.css 로 하고
// 원하는 구조에 클래스명을 ClassName={styles.클래스명} 으로 설정한다.
// 이때 css의 클래스명은 - 와 같은 특수기호 사용이 제한되고 클래스명을 기억하고 사용해야해서 약간의 불편함이 있다.
// 따라서 작은 프로젝트다 작은 부분의 css를 모듈화 할 때 주로 사용한다.

export default () => (
    <header>
        <ul className={styles.navList}>
            <li>
                <a href="/">Movies</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/tv/popular">TV popular</a>
            </li>
            <li>
                <a href="/search">Search</a>
            </li>
        </ul>
    </header>
)