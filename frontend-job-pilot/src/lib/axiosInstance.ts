import Axios from "axios"

/**
 * Axios instance with interceptors
 * @returns Axios instance
 * @baseURL - The base URL of the backend API
*/
const axiosInstance = Axios.create({
  baseURL : "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  },
})

/**
 * Interceptors for axios instance
 * @authorization - Adds the token to the request header if it exists
 * @response - Adds the token to the request header if it exists
 * @getToken - Gets the token from the local storage and adds it to the request header
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
) 

export default axiosInstance;