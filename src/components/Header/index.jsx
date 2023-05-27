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
                        <Link>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Cadastrar Estudante
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Entrega de Projeto
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Lista de Projetos Entregues
                        </Link>
                    </li>
                </ul>
            </NavBar>
        </Container>
    );
};

export default Header;
