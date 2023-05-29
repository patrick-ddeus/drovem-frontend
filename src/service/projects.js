/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getAllProjects = () => {
    return api.get(`/projects/list`);
};

const registerProject = (body) => {
    return api.post(`/projects/send`, body);
};

const listDoneProjects = (projeto, turma) => {
    const query = { projeto, turma };
    
    return api.get(`/projects/list/done`, {}, query)
};

const updateGrade = (body) => {
    return api.put(`/projects/grades`, body);
}

export default {
    getAllProjects,
    registerProject,
    listDoneProjects,
    updateGrade
};
