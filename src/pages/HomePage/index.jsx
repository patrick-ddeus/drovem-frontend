import React, { useEffect, useMemo, useReducer, useState } from 'react';
import Header from '../../components/Header';
import Classes from '../../service/classes';
import Students from '../../service/students';

import { SideBar, StudentsContent, MainContent, StudentItem } from './styles';

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
                console.log(students);
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
                        {memoizedData?.map((turma) => (
                            <li onClick={() => setChosenClass(turma.id)}>{turma.nome}</li>
                        ))}
                    </ul>
                </SideBar>
                <StudentsContent>
                    <h2>Estudantes da Turma {chosenClass}</h2>
                    <ul>
                        {students?.map(student => (
                            <StudentItem>
                                <img src={student.foto} alt="" />
                                {student.nome}
                            </StudentItem>
                        ))}
                    </ul>
                </StudentsContent>
            </MainContent>
        </div>
    );
};

export default HomePage;
