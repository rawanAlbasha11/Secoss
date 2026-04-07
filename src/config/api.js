// API configuration file for Secoss

const API_CONFIG = {
    BASE_URL: 'https://api.secoss.example.com',
    ENDPOINTS: {
        GET_ITEMS: '/items',
        GET_ITEM: (id) => `/items/${id}`,
        CREATE_ITEM: '/items',
        UPDATE_ITEM: (id) => `/items/${id}`,
        DELETE_ITEM: (id) => `/items/${id}`,
        // Add more endpoints as needed
    }
};

export default API_CONFIG;