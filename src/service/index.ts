import axios from 'axios';

import { ParamsProps } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const authConfig = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const createUsers = (params: ParamsProps, token: string) => api.post('/users', params, authConfig(token));
