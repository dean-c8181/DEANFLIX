import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color:rgba(20,20,20,1);
        color:#FFF;
        padding-top:50px;
    }
    .tabWrapper .tabs button{
        opacity:0.5;
    }
    .tabWrapper .tabs button.on{
        opacity:1;
    }
`;

export default globalStyles;