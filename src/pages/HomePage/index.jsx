import React, { useEffect, useMemo, useReducer, useState } from 'react';
import Header from '../../components/Header';
import Classes from '../../service/classes';
import Students from '../../service/students';
import { Link } from "react-router-dom";

import { SideBar, StudentsContent, MainContent, StudentItem, ClassItem } from './styles';

const TYPES = Object.freeze({
    FETCH_REQUEST: 'FETCH_REQUEST',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR'
});

const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.FETCH_REQUEST:
            return { ...state, loading: true };
        case TYPES.FETCH_SUCCESS:
            return { ...state, error: "", students: action.payload, loading: false };
        case TYPES.FETCH_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return { ...state, loading: false };
    }
};


const HomePage = () => {
    const [classList, setClassList] = useState(null);
    const [chosenClass, setChosenClass] = useState("");

    const [{ loading, error, students }, dispatch] =
        useReducer(reducer, {
            students: [],
            loading: false,
            error: ''
        });

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await Classes.getAllClasses();
                setClassList(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchClasses();
    }, []);

    useEffect(() => {
        const fetchStudents = async () => {
            dispatch({ type: TYPES.FETCH_REQUEST });
            try {
                const response = await Students.getStudentsByClass(chosenClass);
                dispatch({ type: TYPES.FETCH_SUCCESS, payload: response });

            } catch (error) {
                console.error(error);
                dispatch({ type: TYPES.FETCH_ERROR, payload: error.message });
            }
        };

        fetchStudents();
    }, [chosenClass]);

    const memoizedData = useMemo(() => classList, [classList]);

    return (
        <div>
            <Header />
            <MainContent>
                <SideBar>
                    <ul>
                        <ClassItem
                            underlined={chosenClass === ""}
                            onClick={() => setChosenClass("")}>
                            Mostrar todos
                        </ClassItem>
                        {memoizedData?.map((turma) => (
                            <ClassItem
                                underlined={chosenClass === turma.id}
                                onClick={() => setChosenClass(turma.id)}>
                                {turma.nome}
                            </ClassItem>
                        ))}
                    </ul>
                </SideBar>
                <StudentsContent>
                    <h2>Estudantes da Turma {chosenClass}</h2>
                    <ul>
                        {
                            loading ? <p>Carregando...</p> :
                                students?.map(student => (
                                    <Link to={`/students/${student.id}`}>
                                        <StudentItem>
                                            <img src={student.foto} alt="" />
                                            {student.nome}
                                        </StudentItem>
                                    </Link>
                                ))}
                    </ul>
                </StudentsContent>
            </MainContent>
        </div>
    );
};

export default HomePage;
