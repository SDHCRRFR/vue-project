// import des modules nécessaires
import axios from 'axios'
import { accountService } from '@/_service'

const Axios = axios.create({
  baseURL: 'http://localhost:8888'
})

Axios.interceptors.request.use(request => {
  console.log(request)
  let token = accountService.getToken()

  if(token){
    request.headers.Authorization = 'Bearer'+token
  }

})

export default Axios
