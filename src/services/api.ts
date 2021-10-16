import axios from 'axios';

const api = axios.create({
  baseURL: 'https://elza-cast.herokuapp.com/',
});

export default api;
