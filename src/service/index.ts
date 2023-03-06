import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const authConfig = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// export const createUsers = (params, token) => api.post('/users', params, authConfig(token));
