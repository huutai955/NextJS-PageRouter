import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
})



// api.interceptors.request()

export default api