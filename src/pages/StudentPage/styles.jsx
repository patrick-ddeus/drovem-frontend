import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:30px;

    img{
        width:200px;
        border-radius:50%;
    }

    p{
        align-self:flex-start;
    }
`;

export const NavBar = styled.nav`
    border:1px solid #101213;
    display:flex;
    align-items:center;
    justify-content: space-between;

    p{
        margin-left:30px;
    }

    ul{
        display:flex;
        justify-content: flex-end;
        align-items:center;

        li{
            margin-right:30px;
            cursor:pointer;
        }

        height:70px;  
    }
`;

export const StudentContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;

  ul{
    align-self:flex-start;
    display:flex;
    flex-direction: column;
    gap:10px;
    width:270px;
  }
`;

export const ClassItem = styled.li`
  flex:1;
  border:1px solid ${({highlighted}) => highlighted ? "red" : "#101213"};
  padding:5px;
`;