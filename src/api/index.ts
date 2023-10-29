import axios from "axios";

const BASEURLCRM = "https://nextcrm.unikcore.vn/api/v1";
const BASEURL = "https://fakestoreapi.com/";

const api = axios.create({
  baseURL: BASEURLCRM,
});

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiVVNFUiIsImlkIjoxNTIsInN1YiI6InRhaUBnbWFpbC5jb20iLCJpYXQiOjE2OTg1MTUwMDIsImV4cCI6MTY5ODYwMTQwMn0.WJyZCIhNWSf8Vkn8gTkwEi9FdJeA4CjGJgBzeqMMqWzF9bp8DUlgWzSyAV-BH_poB8P_ha_eRLHInPHjNHPtFA";

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
