import axios from "axios";

const path = "http://127.0.0.1"

export async function postPrograma(programaRequest: ProgramaRequest) {
    try {
        const response = await axios.post(path+"/programa", productRequest);
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}export async function getProgramaById(idx:number) {
    try {
        const response = await axios.get(path+"/programa/"+idx);
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}


{/*
export async function paginationProducts(skip:number, limit:number) {
    try {
        const response = await axios.get(path+"/api/products?skip="+skip+"&limit="+limit, getAuthHeaders());
        
            const response = await axios.get(`${API_URL}/api/products`, {
            ...getAuthHeaders(),
            params: { skip, limit },
          });
          
        return response.data.content;
    } catch(error) {
        console.error(error);
        throw error;
    }
}
*/}

export async function updateProductById(idx:number, productRequest : ProductRequest) {
    try {
        const response = await axios.put(path+"/programa/"+idx, productRequest);
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

export async function deleteProgramatById(idx:number) {
    try {
        const response = await axios.delete(path+"/programa/"+idx);
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

export async function fibonacci(idx:number) {
    try {
        const response = await axios.get(path+"/fibonacci/"+idx);
        return response.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}