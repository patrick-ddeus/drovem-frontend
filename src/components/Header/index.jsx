import React from 'react';
import { Container, NavBar } from './styles';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container>
            <NavBar>
                <ul>
                    <li>
                        Drovem
                    </li>
                    
                    <li>
                        <Link to="/">
                            Listar Estudantes
                        </Link>
                    </li>
                    <li>
                        <Link to="/students/register">
                            Cadastrar Estudante
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/send">
                            Entrega de Projeto
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Lista de Projetos Entregues
                        </Link>
                    </li>
                </ul>
            </NavBar>
        </Container>
    );
};

export default Header;
