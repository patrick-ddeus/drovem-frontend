import { createGlobalStyle } from "styled-components";
import '@fontsource-variable/inter';
import '@fontsource/righteous';

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box
  }

  body {
    font-family: 'Inter Variable', sans-serif;
    background: linear-gradient(45deg,
      #D9D0DB 0%,
      #D9D0DB 60%,
      #E7D4C9 60%,
      #E7D4C9 80%,
      #CCB7C7 80%,
      #CCB7C7 100%);
    min-height:100vh;
    backdrop-filter: blur(100px);
  }

  ul{
    list-style:none;
  }

  a{
    text-decoration:none;
  }

  img{
    display:block;
    max-width:100%;
  }
  
`;