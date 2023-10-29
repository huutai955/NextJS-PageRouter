import api from "@/api";
import { handleQueryParams } from "@/utils/params";

const getFilters = async () => {
  const response = await api.get("/contact/filters");
  return response.data;
};

const getContacts = async (query: any) => {
  const string = handleQueryParams(query);
  console.log(string)
  const response = await api.get(`/contact?${string}`);
  return response.data;
};

export const contactAPI = {
  getFilters,
  getContacts
};
