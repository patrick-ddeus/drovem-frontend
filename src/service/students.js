/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getStudentsByClass = (turma = "") => {
    const query = { turma };
    return api.get(`/students/list`, {}, query);
};

const getStudentById = (id) => {
    return api.get(`students/list/${id}`)
}

const registerStudent = (body) => {
    return api.post(`/students/register`, body);
};

export default {
    getStudentsByClass,
    registerStudent,
    getStudentById
};
