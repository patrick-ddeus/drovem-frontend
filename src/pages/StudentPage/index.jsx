import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Students from '../../service/students';
import dayjs from "dayjs";
import { Container, NavBar, StudentContainer, ClassItem } from './styles';

function StudentPage() {
    const [student, setStudent] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const [response] = await Students.getStudentById(id);
                console.log(response);
                setStudent(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchStudent();
    }, []);

    function formataCPF(cpf) {
        const cpfAtualizado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            function (regex, argumento1, argumento2, argumento3, argumento4) {
                return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
            });
        return cpfAtualizado;
    }

    return (
        <>
            <NavBar>
                <p>Drovem</p>
                <ul>
                    <li onClick={() => navigate(`/students/edit/${student?.id}`)}>Editar</li>
                    <li onClick={() => navigate(-1)}>Voltar</li>
                </ul>
            </NavBar>
            <Container>
                {student && <StudentContainer>
                    <h2>Registro de Estudante</h2>
                    <img src={student.foto} alt="" />
                    <p>Nome Completo: {student.nome}</p>
                    <p>CPF: {formataCPF(student.cpf)}</p>
                    <p>Email: {student.email}</p>
                    <p>Turmas:</p>
                    <ul>
                        {student.turmas.map(turma => (
                            <ClassItem highlighted={turma.data_saida === null}>
                                <p>
                                    {turma.nome_turma}
                                </p>
                                <p>
                                    Data ingresso: {dayjs(turma.data_ingresso).format('DD/MM/YYYY')}
                                </p>
                                <p>
                                    Data saída: {
                                        turma.data_saida ? dayjs(turma.data_saida).format('DD/MM/YYYY') :
                                            (<span>-</span>)}
                                </p>
                            </ClassItem>
                        ))}
                    </ul>
                </StudentContainer>}
            </Container>
        </>
    );
}

export default StudentPage;