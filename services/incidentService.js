import axios from 'axios';

const API_BASE_URL = 'https://a1k1mdqq9d.execute-api.us-east-1.amazonaws.com/prod';

// GET all incidents
export const getAllIncidents = () => {
    return axios.get(`${API_BASE_URL}/get_all`);
};

// GET an incident by ID
export const getIncidentById = (id) => {
    return axios.get(`${API_BASE_URL}/get_one/${id}`);
};

// POST a new incident
export const createIncident = (data) => {
    return axios.post(`${API_BASE_URL}/post`, data);
};

// PUT (update) an incident by ID
export const updateIncident = (id, data) => {
    return axios.put(`${API_BASE_URL}/put/${id}`, data);
};

// DELETE an incident by ID
export const deleteIncident = (id) => {
    return axios.delete(`${API_BASE_URL}/delete/${id}`);
};
