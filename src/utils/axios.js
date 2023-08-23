import axios from 'axios';

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Accept'] = '*/*';
axios.defaults.headers['Accept-Language'] = 'en';
axios.defaults.headers['Content-Language'] = 'en-US';
axios.defaults.headers['Content-Type'] = 'application/json';

const accessToken = window.localStorage.getItem('access_token');

if (accessToken) {
  const parsedToken = JSON.parse(accessToken);
  axios.defaults.headers['Authorization'] = `Bearer ${parsedToken}`;
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default instance;
