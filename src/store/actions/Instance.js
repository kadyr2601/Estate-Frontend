import axios from "axios"

const axiosInstance = axios.create({ baseURL: 'http://127.0.0.1:8000/' })

const handleSuccess = async (res) => {
    res.headers['Accept'] = 'application/json'
    res.headers['Content-Type'] = 'application/json'
    // const token = await getItem('token')
    // if (token !== null) {
    //     res.headers['Authorization'] =  `Bearer ${token}`
    // }
    return res
}

axiosInstance.interceptors.request.use(handleSuccess, null)
export default axiosInstance
