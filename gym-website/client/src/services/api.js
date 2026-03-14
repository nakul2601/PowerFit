import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5003/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication API calls
export const authAPI = {
  // Login user
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Register user
  signup: async (userData) => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  },

  // Get current user
  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  // Logout
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};

// Membership API calls
export const membershipAPI = {
  // Submit membership application
  submitApplication: async (applicationData) => {
    const response = await api.post('/membership', applicationData);
    return response.data;
  },

  // Get all memberships (admin)
  getAllMemberships: async (params = {}) => {
    const response = await api.get('/membership', { params });
    return response.data;
  },

  // Get membership by ID (admin)
  getMembershipById: async (id) => {
    const response = await api.get(`/membership/${id}`);
    return response.data;
  },

  // Update membership status (admin)
  updateMembershipStatus: async (id, status) => {
    const response = await api.put(`/membership/${id}`, { status });
    return response.data;
  }
};

// Contact API calls
export const contactAPI = {
  // Submit contact form
  submitContactForm: async (contactData) => {
    const response = await api.post('/contact', contactData);
    return response.data;
  }
};

// Utility function to handle API errors
export const handleAPIError = (error) => {
  console.error('API Error:', error);
  
  let errorMessage = 'An unexpected error occurred. Please try again.';
  
  if (error.response) {
    // Server responded with error status
    if (error.response.data?.errors) {
      errorMessage = error.response.data.errors.join(', ');
    } else if (error.response.data?.message) {
      errorMessage = error.response.data.message;
    } else {
      errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
    }
  } else if (error.request) {
    // Request was made but no response received
    errorMessage = 'Network error. Please check your internet connection.';
  } else {
    // Something else happened
    errorMessage = error.message || errorMessage;
  }
  
  return errorMessage;
};

// Utility function to check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  return !!(token && user);
};

// Utility function to get current user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// Utility function to logout user
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/login';
};

export default api;
