/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getAllClasses = () => {
    return api.get(`/classes`);
};

const getClassesByStudentId = (id) => {
    return api.get(`/classes/${id}`);
}

export default {
    getAllClasses,
    getClassesByStudentId
};
