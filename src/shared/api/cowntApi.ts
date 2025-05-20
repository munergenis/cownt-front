import axios from 'axios';

const cowntApi = axios.create({
  baseURL: 'https://cownt-api.netlify.app/api',
});

// interceptors or midds

export { cowntApi };
