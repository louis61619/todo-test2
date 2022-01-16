import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return err
  }
)

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return err
  }
)
export { instance as request }
