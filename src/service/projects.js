/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getAllProjects = () => {
    return api.get(`/projects/list`);
};

const registerStudent = (body) => {
    return api.post(`/students/register`, body);
};

export default {
    getAllProjects,
};
