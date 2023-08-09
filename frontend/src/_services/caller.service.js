// import des modules nécessaires

import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://localhost:8888'
})

export default Axios