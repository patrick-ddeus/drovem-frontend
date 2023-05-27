import styled from 'styled-components';

export const SideBar = styled.div`
  width:20vw;
  border-right:1px solid black;
  padding-top:20px;
  height:calc(100vh - 70px);

  ul{
    display:flex;
    align-items: center;
    flex-direction: column;
    gap:20px;

    li{
        cursor:pointer;
        transition: text-decoration 0.3s ease;

        &:hover{
            text-decoration: underline;
        }
    }
  }
  
`;

export const StudentsContent = styled.section`
    margin-top:30px;
    width:calc(100vw - 20vw);
    h2{
        text-align:center;
        margin-bottom:10px;
    }
`;

export const MainContent = styled.main`
  display:flex;
  margin-top:20px;
`;

export const StudentItem = styled.li`
  padding:10px;

  margin: 5px 15px 20px;
  border:1px solid black;
  display:flex;
  align-items: center;
  gap:50px;

  img{
    width:70px;
    height:70px;
    border-radius:50%;
  }
`;