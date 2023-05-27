import styled from 'styled-components';

export const Container = styled.div`
  height:50px;
`;

export const NavBar = styled.nav`
  ul{
    display:flex;
    justify-content: center;
  }

  li{

    &:first-child{
        font-family:"righteous", sans-serif;
        font-size:30px;
    }

    height:70px;
    max-width:300px;
    flex:1;
    border:1px solid #101213;
    display:flex;
    align-items: center;
    justify-content:center;
    font-weight: 400;
    
    a{
        color:black;
    }
  }
`;