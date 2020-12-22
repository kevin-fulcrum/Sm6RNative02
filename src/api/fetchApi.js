import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
