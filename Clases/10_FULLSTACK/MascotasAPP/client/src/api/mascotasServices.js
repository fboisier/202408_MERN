import api from "./axiosConfig";

const getMascotas = async () => {
    const response = await api.get("/mascotas");
    return response.data;
}

const getMascota = async (id) => {
    const response = await api.get(`/mascotas/${id}`);
    return response.data;
}

const createMascota = async (mascota) => {
    const response = await api.post("/mascotas", mascota);
    return response.data;
}

const updateMascota = async (id, mascota) => {
    const response = await api.put(`/mascotas/${id}`, mascota);
    return response.data;
}

const deleteMascota = async (id) => {
    const response = await api.delete(`/mascotas/${id}`);
    return response.data;
}

export { getMascotas, getMascota, createMascota, deleteMascota, updateMascota };