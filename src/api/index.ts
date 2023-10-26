import axios from 'axios'

const BASEURLCRM = 'https://nextcrm.unikcore.vn/api/v1'
const BASEURL = 'https://fakestoreapi.com/'


const api = axios.create({
    baseURL: BASEURL
})



// api.interceptors.request()

export default api