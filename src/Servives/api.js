import axios from "axios";

const BASE_URI= `http://127.0.0.1:4003`;
const token=localStorage.getItem("token");
const config={ headers:{Authorization:`Bearer ${token}`}};

async function postRegister (name, email, password) {
    return axios.post(`${BASE_URI}/sign-up`,{name,email,password});
};

async function postLogin (email,password) {
    return axios.post(`${BASE_URI}/sign-in`,{email,password});
};

async function getAllProducts () {
    return await axios.get(`${BASE_URI}/products`);
};

async function getRatingById (producId) {
    return await axios.get(`${BASE_URI}/rating/${producId}`)
};

async function getCartUser() { 
    return await axios.get(`${BASE_URI}/cart`, config);
};

async function postCartUser(producId) {
    return await axios.post(`${BASE_URI}/cart/${producId}`, config);
}

export { 
    postRegister,
    postLogin,
    getAllProducts,
    getRatingById,
    getCartUser,
    postCartUser,
}