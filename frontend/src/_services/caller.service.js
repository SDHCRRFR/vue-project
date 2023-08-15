// import des modules nécessaires
import axios from 'axios'
import router from '@/_services'
import { accountService } from '@/_services'

const Axios = axios.create({
  baseURL: 'http://localhost:5173'
})

// Interceptor pour les injection de token
Axios.interceptors.request.use((request) => {

  // Si connecté on ajoute le token dans l'entête
  if (accountService.isLogged()) {
    request.headers.Authorization = 'Bearer'+ accountService.getToken()
  }

  return request
})

// Interceptor des réponses de l'API
Axios.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    if(error.response.status == 401){
        accountService.logout()
        router.push('/login')
    }
})

export default Axios
