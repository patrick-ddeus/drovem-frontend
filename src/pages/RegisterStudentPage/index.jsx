import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Classes from '../../service/classes';
import Students from '../../service/students';
import { useNavigate } from "react-router-dom";

import { Container, Form, Input, Select, Button } from './styles';

const RegisterStudentPage = () => {
    const { register, handleSubmit } = useForm();
    const [classes, setClasses] = useState(null);
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

        fetchClasses();
    }, []);

    const onSubmit = async (data) => {

        if (isNaN(data.turma)) {
            data.turma = 1;
        }

        const body = { ...data };

        try {
            await Students.registerStudent(body);
            navigate("/")
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <h2>Cadastro de Estudante</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <label for="nome">Nome</label>
                    <Input type="text" name="nome" {...register("nome", { required: true })} placeholder="Nome" id="nome"/>

                    <label for="cpf">CPF</label>
                    <Input type="text" name="cpf" {...register("cpf", { required: true, minLength: 11, maxLength: 11 })} placeholder="CPF" id="cpf"/>

                    <label for="email">Nome</label>
                    <Input type="email" name="email" {...register("email", { required: true })} placeholder="Email" id="email"/>

                    <label for="foto">Nome</label>
                    <Input type="text" name="foto" {...register("foto", { required: true })} placeholder="Foto" id="foto"/>

                    <label for="turma">Selecione sua turma:</label>
                    <Select name="turma" {...register("turma", { required: true, valueAsNumber: true })} id="turma">
                        {classes?.map(turma => (
                            <option value={turma.id}>{turma.nome}</option>
                        ))}

                    </Select>
                    <Button type="submit">Salvar</Button>
                </Form>
            </Container>
        </>
    );
};

export default RegisterStudentPage;
