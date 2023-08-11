// import des modules nécessaires
import axios from 'axios'
import { accountService } from '@/_services'

const Axios = axios.create({
  baseURL: 'http://localhost:8888'
})

Axios.interceptors.request.use((request) => {
  console.log(request)
  let token = accountService.getToken()

  if (token) {
    request.headers.Authorization = 'Bearer' + token
  }
  console.log(request)

  return request
})

export default Axios
