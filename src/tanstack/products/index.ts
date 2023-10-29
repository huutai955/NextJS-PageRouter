import api from "@/api";

const getProducts = async (page: number, size: number) => {
  const response = await api.get(`/contact?page=${page}&size=${size}`);
  return response.data;
};

const getProduct = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

const getProductsWithLimit = async (quantity: number) => {
  const response = await api.get(`/products?limit=${quantity}`);
  return response.data;
};

const deleteProductById = async (id: number) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export { getProducts, deleteProductById, getProduct, getProductsWithLimit };
