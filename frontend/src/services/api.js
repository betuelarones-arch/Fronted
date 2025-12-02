import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ← desde Vercel
  headers: {
    'Content-Type': 'application/json',
  },
});

// Categorías
export const categoriaService = {
  getAll: () => api.get('/api/categorias'),
  getById: (id) => api.get(`/api/categorias/${id}`),
  create: (data) => api.post('/api/categorias', data),
  update: (id, data) => api.put(`/api/categorias/${id}`, data),
  delete: (id) => api.delete(`/api/categorias/${id}`),
};

// Productos
export const productoService = {
  getAll: () => api.get('/api/productos'),
  getById: (id) => api.get(`/api/productos/${id}`),
  create: (data) => api.post('/api/productos', data),
  update: (id, data) => api.put(`/api/productos/${id}`, data),
  delete: (id) => api.delete(`/api/productos/${id}`),
};
