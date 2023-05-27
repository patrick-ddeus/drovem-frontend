/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const getAllClasses = () => {
    return api.get(`/classes`);
};

export default {
    getAllClasses
};
