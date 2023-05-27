import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Classes from '../../service/classes';
import Students from '../../service/students';

import { Container, Form, Input, Select, Button } from './styles';

const RegisterStudentPage = () => {
    const { register, handleSubmit } = useForm();
    const [classes, setClasses] = useState(null);

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
        } catch (error) {
            console.error(error.message);
        }

        console.log(data);
    };

    return (
        <>
            <Header />
            <Container>
                <h2>Cadastro de Estudante</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" name="nome" {...register("nome", { required: true })} placeholder="Nome" />
                    <Input type="text" name="cpf" {...register("cpf", { required: true, minLength: 11, maxLength: 11 })} placeholder="CPF" />
                    <Input type="email" name="email" {...register("email", { required: true })} placeholder="Email" />
                    <Input type="text" name="foto" {...register("foto", { required: true })} placeholder="Foto" />

                    <Select name="turma" {...register("turma", { required: true, valueAsNumber: true })}>
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
