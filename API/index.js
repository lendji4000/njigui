import axios from "axios"
const API_BASE_URL = "http://54.38.33.178:5000/api/v1"
let createContact = (params) => {
    console.log("email", params)
    return axios.post(API_BASE_URL + '/contact/create', params);
};

export default {
    createContact
}

