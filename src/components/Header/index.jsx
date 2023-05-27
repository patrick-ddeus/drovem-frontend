import React from 'react';
import { Container, NavBar } from './styles';

const Header = () => {
    return (
        <Container>
            <NavBar>
                <ul>
                    <li>
                        Drovem
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Cadastrar Estudante
                    </li>
                    <li>
                        Entrega de Projeto
                    </li>
                    <li>
                        Lista de Projetos Entregues
                    </li>
                </ul>
            </NavBar>
        </Container>
    );
};

export default Header;
