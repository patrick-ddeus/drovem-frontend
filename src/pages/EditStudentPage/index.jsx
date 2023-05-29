import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Classes from '../../service/classes';
import Students from '../../service/students';
import { useNavigate, useParams } from "react-router-dom";

import { Container, Form, Input, Select, Button } from './styles';


const RegisterStudentPage = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [classes, setClasses] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await Classes.getClassesByStudentId(id);
                setClasses(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        const fetchStudent = async () => {
            try {
                const [response] = await Students.getStudentById(id);
                setValue('nome', response.nome);
                setValue('cpf', response.cpf);
                setValue('email', response.email);
                setValue('foto', response.foto);
                setValue('turma', response.turmas.find(turma => turma.data_saida === null).id);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchClasses();
        fetchStudent();
    }, []);

    const onSubmit = async (data) => {
        const body = { estudante: Number(id), ...data };

        try {
            await Students.updateStudent(body);
            navigate("/");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <h2>Edição do Estudante</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <label for="nome">Nome</label>
                    <Input type="text" name="nome" {...register("nome", { required: true })} placeholder="Nome" id="nome" />

                    <label for="cpf">CPF</label>
                    <Input type="text" name="cpf" {...register("cpf", { required: true, minLength: 11, maxLength: 11 })} placeholder="CPF" id="cpf" />

                    <label for="email">Nome</label>
                    <Input type="email" name="email" {...register("email", { required: true })} placeholder="Email" id="email" />

                    <label for="foto">Nome</label>
                    <Input type="text" name="foto" {...register("foto", { required: true })} placeholder="Foto" id="foto" />

                    <label for="turma">Selecione sua turma:</label>
                    <Select name="turma" {...register("turma", { required: true, valueAsNumber: true })} id="turma">
                        {classes?.map(turma => (
                            <option key={turma.id} value={turma.id}>{turma.nome}</option>
                        ))}

                    </Select>
                    <Button type="submit">Salvar</Button>
                </Form>
            </Container>
        </>
    );
};

export default RegisterStudentPage;
