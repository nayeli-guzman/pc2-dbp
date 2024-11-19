import axios from "axios";
import { LoginRequest } from "./interfaces/LoginRequest";
import { RegisterRequest } from "./interfaces/RegisterRequest";
import { ProductRequest } from "./interfaces/ProductRequest";

const path = "http://18.117.176.220/docs"

export async function login(loginRequest: LoginRequest) {
    try {
        const response = await axios.post(path+"/auth/login", loginRequest);
        const token = response.data.token;
        localStorage.setItem("token", token);
        return token;
    } catch(error) {
        console.error(error);
        throw error;
    }
}


export async function register(registerRequest: RegisterRequest) {
    try {
        const response = await axios.post(path+"/auth/register", registerRequest);
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  };

export async function postProduct(productRequest: ProductRequest) {
    try {
        const response = await axios.post(path+"/api/products", productRequest, getAuthHeaders());
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

export async function paginationProducts(skip:number, limit:number) {
    try {
        const response = await axios.get(path+"/api/products?skip="+skip+"&limit="+limit, getAuthHeaders());
        /*
            const response = await axios.get(`${API_URL}/api/products`, {
            ...getAuthHeaders(),
            params: { skip, limit },
          });
          */
        return response.data.content;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

export async function getProductById(idx:number) {
    try {
        const response = await axios.get(path+"/api/products/"+idx, getAuthHeaders());
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

export async function updateProductById(idx:number, productRequest : ProductRequest) {
    try {
        const response = await axios.put(path+"/api/products/"+idx, productRequest, getAuthHeaders());
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

export async function deleteProductById(idx:number) {
    try {
        const response = await axios.delete(path+"/api/products/"+idx, getAuthHeaders());
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}