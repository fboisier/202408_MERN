

import api from "./axiosConfig";

const getUsuarios = async () => {
    const response = await api.get("/usuarios");
    return response.data;
}

const getUsuario = async (id) => {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
}

const createUsuario = async (usuario) => {
    const response = await api.post("/usuarios", usuario);
    return response.data;
}

const updateUsuario = async (id, usuario) => {
    const response = await api.put(`/usuarios/${id}`, usuario);
    return response.data;
}

const deleteUsuario = async (id) => {
    const response = await api.delete(`/usuarios/${id}`);
    return response.data;
}

export { getUsuarios, getUsuario, createUsuario, deleteUsuario, updateUsuario};