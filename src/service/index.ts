import axios from 'axios';

import { SignProps } from './types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

const authConfig = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const createUsers = (params: SignProps, token: string) => api.post('/users', params, authConfig(token));
