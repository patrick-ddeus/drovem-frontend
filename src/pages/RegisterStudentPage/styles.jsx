import styled from 'styled-components';

export const Container = styled.div`
    text-align:center;

    h2{
        margin-top:50px;
    }
`;

export const Form = styled.form`
    max-width:500px;
    margin:auto;
    padding:30px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:10px;
    margin-top:30px;
    background: #ffffff78;
    border-radius:5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 45px;
    color:black;
    padding:0 16px;
    border: 0;
    outline: 0;
    font-family: inherit;
    border-radius:5px;
`;

export const Select = styled.select`
    width: 100%;
    height: 45px;
    color:black;
    background-color:white;
    border-radius:5px;
    padding:0 16px;
    border: 0;
    outline: 0;
    font-family: inherit;
`;

export const Button = styled.button`
    width:60%;
    height:40px;
    cursor:pointer;
    background-color:rgb(208, 195, 211);
    border:0;
    border-radius:5px;
    text-transform: uppercase;
    margin-top:10px;
`;