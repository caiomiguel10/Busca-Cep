import axios from "axios";


const api = axios.create({
baseURL: 'https://viacep.com.br/ws/'

})

export default api;
// 21031710/json/