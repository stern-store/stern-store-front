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
async function getProductById(productId) {
    return await axios.get(`${BASE_URI}/product/${productId}`);
}

async function getRatingById (producId) {
    return await axios.get(`${BASE_URI}/rating/${producId}`)
};

async function getCartUser() {
    return await axios.get(`${BASE_URI}/cart`, config);
};

async function getCartDetails() {
    return await axios.get(`${BASE_URI}/cart/details`, config);
};

async function postCartUser(productId) {
    return axios.post(`${BASE_URI}/cart`,{productId}, config);
};

async function deleteItem(cartId) {
    return axios.delete(`${BASE_URI}/cart/${cartId}`, config);
};

async function getCategories() {
    return axios.get(`${BASE_URI}/categories`);
}
async function getProductsByCategory(categoryId){
    return axios.get (`${BASE_URI}/category/${categoryId}`)
}
async function getSearch(search){
    return axios.get(`${BASE_URI}/products/search/${search}`);
}
async function getFavoriteById(productId) {
    return axios.get(`${BASE_URI}/favorite/${productId}`,config);
}
async function putFavorite(productId) {
    return axios.put(`${BASE_URI}/favorite`,{productId},config);
}
async function postCategory(category){
    return axios.post(`${BASE_URI}/category`, {category});
}
async function deleteCategory(category){
    return axios.delete(`${BASE_URI}/category/${category}`);
}

export { 
    postRegister,
    postLogin,
    getAllProducts,
    getProductById,
    getRatingById,
    getCartUser,
    getCartDetails,
    postCartUser,
    deleteItem,
    getCategories,
    getProductsByCategory,
    getSearch,
    getFavoriteById,
    putFavorite,
    postCategory,
    deleteCategory
}