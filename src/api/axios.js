import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_BASEURL ;

export default axios.create({
    baseURL: apiBaseUrl,
    withCredentials: false,
})