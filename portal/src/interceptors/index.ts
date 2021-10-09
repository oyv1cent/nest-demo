import axios from 'axios'
import { message } from 'antd'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const responseData = error.response.data
    message.error(responseData?.message)
    return Promise.reject(error)
  },
)
