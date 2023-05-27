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