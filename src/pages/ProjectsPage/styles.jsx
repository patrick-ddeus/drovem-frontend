import styled, { keyframes } from 'styled-components';
import baseAnimation from "../../constants/baseAnimation";

const modalShow = keyframes`
  from{
    opacity: 0;
    transform:scaleY(0);
  }
  to{
    opacity: 1;
    transform:scaleY(1);
  }
`;

export const Fade = styled.div`
  position: fixed;
  background: rgba(43, 46, 56, 0.932);
  bottom: 0;
  z-index: 998;
  height: 100%;
  width: 100%;
  margin: 0;
  opacity: 1;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled(baseAnimation)`
  background: #ffffff;
  width:500px;
  z-index: 999;
  border-radius:5px;
  animation-name: ${modalShow};
  overflow:hidden;

  div{
    padding:20px;
    font-size:18px;
    font-weight:400;
    color:#D70900;
    cursor:pointer;
    font-family:"Recursive", sans-serif;
    transition:background .2s, color .2s;
    
    &:hover{
      background-color:#FB6B6B;
      color:white;
    }

    &:first-child{
      border-top-left-radius:5px;
      border-top-right-radius:5px;
    }

    &:last-child{
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;
    }
  }
`;

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

export const MainContent = styled.main`
  display:flex;
  margin-top:20px;
`;

export const ProjectsContent = styled.section`
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

export const ClassesList = styled.ul`
  max-height:200px;
  overflow-y:auto;
`;

export const ProjectsList = styled.ul`
  margin-top:40px;
  max-height:200px;
  overflow-y:auto;
  position:relative;
  padding-top:15px;

  &::before{
    content:"";
    width:80px;
    border-top:3px dotted black;
    
    position:absolute;
    top:0;

  }
`;

export const ListItem = styled.li`
  cursor:pointer;
  transition: text-decoration 0.3s ease;
  text-decoration: ${({ underlined }) => underlined ? "underline" : "none"};

  &:hover{
      text-decoration: underline;
  }
`;

export const ProjectItem = styled.li`
    padding:10px;

    margin: 5px 15px 20px;
    border-radius:5px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap:50px;
    background: #ffffff65;
    backdrop-filter: blur(100px);
    color:#101213;


    div{
        display:flex;
        align-items:center;
        gap:50px;
    }

    img{
    width:70px;
    height:70px;
    border-radius:50%;
    }

    p{
        margin-right:40px;
        text-transform: capitalize;
        display:flex;
        align-items:center;
        gap:10px;
        cursor:pointer;

        img{
            width:30px;
        }
    }

    .caret{
        width:20px;
        margin-left:-10px;
    }
`;

