'use strict';

const axios = require('axios');

const API_BASE_URL = 'https://api.example.com'; // Replace with the actual API base URL

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'} // Modify headers as necessary
});

module.exports = apiClient;
