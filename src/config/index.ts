import dotenv from 'dotenv';

dotenv.config();

export default {
    // API_URI: process.env.REACT_APP_API_URI || 'https://jsonplaceholder.typicode.com',
    API_URI: 'https://jsonplaceholder.typicode.com',
    SOCKET_URI: process.env.REACT_APP_SOCKET_URI || 'http://localhost:3001',
};
