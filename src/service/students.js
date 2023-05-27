/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getStudentsByClass = (turma = "") => {
    const query = { turma };
    return api.get(`/students/list`, {}, query);
};

export default {
    getStudentsByClass
};
