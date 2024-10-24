

import api from "./axiosConfig";

const getPersonas = async () => {
    const response = await api.get("/personas");
    return response.data;
}

const createPersona = async (persona) => {
    const response = await api.post("/personas", persona);
    return response.data;
}

const deletePersona = async (id) => {
    const response = await api.delete(`/personas/${id}`);
    return response.data;
}

export { getPersonas, createPersona, deletePersona };