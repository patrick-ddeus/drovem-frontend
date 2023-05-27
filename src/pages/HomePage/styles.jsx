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
  }
  
`;

export const StudentsContent = styled.section`
    padding-top:27px;
    width:calc(100vw - 20vw);

    h2{
        text-align:center;
        margin-bottom:10px;
    }

    ul{
      max-height:78vh;
      overflow-y:auto;
      padding:20px 0;
    }
`;

export const MainContent = styled.main`
  display:flex;
  margin-top:20px;
`;

export const ClassItem = styled.li`
  cursor:pointer;
  transition: text-decoration 0.3s ease;
  text-decoration: ${({ underlined }) => underlined ? "underline" : "none"};

  &:hover{
      text-decoration: underline;
  }
`;

export const StudentItem = styled.li`
  padding:10px;

  margin: 5px 15px 20px;
  border-radius:5px;
  display:flex;
  align-items: center;
  gap:50px;
  background: #ffffff65;
  backdrop-filter: blur(100px);
  color:#101213;

  img{
    width:70px;
    height:70px;
    border-radius:50%;
  }
`;