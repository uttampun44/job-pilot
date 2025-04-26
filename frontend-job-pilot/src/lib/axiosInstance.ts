import Axios from "axios"

const axiosInstance = Axios.create({
  baseURL : "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  },
})

export default axiosInstance;