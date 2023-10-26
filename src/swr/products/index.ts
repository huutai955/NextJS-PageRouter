import api from "@/api";

const getProducts = (url: string) => api.get(url).then((res) => res.data);

export { getProducts };
