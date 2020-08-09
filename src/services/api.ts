import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-nlw-02-fabiano.herokuapp.com',
});

export default api;