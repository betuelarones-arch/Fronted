import axios from 'axios';

const BASE_URL = "https://microservice-1-1hib.onrender.com/api";

// Categorías
const categoriaApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Productos
const productoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Servicios
export const categoriaService = {
  getAll: () => categoriaApi.get("/categorias"),
  getById: (id) => categoriaApi.get(`/categorias/${id}`),
  create: (data) => categoriaApi.post("/categorias", data),
  update: (id, data) => categoriaApi.put(`/categorias/${id}`, data),
  delete: (id) => categoriaApi.delete(`/categorias/${id}`),
};

export const productoService = {
  getAll: () => productoApi.get("/productos"),
  getById: (id) => productoApi.get(`/productos/${id}`),
  create: (data) => productoApi.post("/productos", data),
  update: (id, data) => productoApi.put(`/productos/${id}`, data),
  delete: (id) => productoApi.delete(`/productos/${id}`),
};

export default categoriaApi;
