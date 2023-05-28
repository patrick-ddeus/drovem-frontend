import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Students from '../../service/students';
import Classes from '../../service/classes';
import { Container, Form, Input, Select, Button } from './styles';
import Projects from '../../service/projects';
import { useNavigate } from "react-router-dom";

const SendProjectPage = () => {
    const { register, handleSubmit } = useForm();
    const [classes, setClasses] = useState(null);
    const [students, setStudents] = useState(null);
    const [projects, setProjects] = useState(null);
    const [chosenClass, setChosenClass] = useState(1);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await Classes.getAllClasses();
                setClasses(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        const fetchProjects = async () => {
            try {
                const response = await Projects.getAllProjects();
                setProjects(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchClasses();
        fetchProjects();
    }, []);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await Students.getStudentsByClass(chosenClass);
                setStudents(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchStudents();
    }, [chosenClass]);

    const onSubmit = async (data) => {
        if (isNaN(data.turma)) {
            data.turma = 1;
        }

        if (isNaN(data.estudante)) {
            data.estudante = 1;
        }

        if (isNaN(data.projeto)) {
            data.projeto = 1;
        }

        const body = { ...data };

        try {
            await Projects.registerProject(body);
            navigate("/")
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <h2>Entrega de Projeto</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="turma">Selecione sua turma:</label>
                    <Select
                        name="turma"
                        {...register("turma", {
                            required: true,
                            valueAsNumber: true,
                            onChange: (e) => setChosenClass(e.target.value)
                        })}
                        id="turma">
                        {classes?.map(turma => (
                            <option key={turma.id} value={turma.id}>{turma.nome}</option>
                        ))}
                    </Select>

                    <label htmlFor="estudante">Selecione seu nome:</label>
                    <Select
                        name="estudante"
                        {...register("estudante", {
                            required: true,
                            valueAsNumber: true
                        })}
                        id="turma">
                        {students?.map(estudante => (
                            <option value={estudante.id}>{estudante.nome}</option>
                        ))}
                    </Select>

                    <label htmlFor="projeto">Selecione o projeto:</label>
                    <Select
                        name="projeto"
                        {...register("projeto", {
                            required: true,
                            valueAsNumber: true
                        })}
                        id="turma">
                        {projects?.map(projeto => (
                            <option value={projeto.id}>{projeto.nome}</option>
                        ))}
                    </Select>

                    <label for="link">Link do Projeto:</label>
                    <Input type="text" name="link" {...register("link", { required: true })} placeholder="Link do Projeto" id="link" />

                    <Button type="submit">Salvar</Button>
                </Form>
            </Container>

        </>
    );
};

export default SendProjectPage;
