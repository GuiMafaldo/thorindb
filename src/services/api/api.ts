import { Colaborador } from "../../utils/Interfaces/colaborador";
import { Cliente } from "../../utils/Interfaces/cliente";
import { Fornecedor } from "../../utils/Interfaces/fornecedor";
import { Produto } from "../../utils/Interfaces/products";



 export const apiRequest = async (
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    searchParams?: string
 ) => {
    const url = (`http://localhost:5245/${endpoint}${searchParams ? ` ? ${searchParams}` : ''}`)
    try{
        const response =  await fetch(url, {
            method,
            headers: {
                "Content-Type":"application/json",
            },
            body: method !== "GET" && method !== "DELETE" && body ? JSON.stringify(body): undefined 
        });       
        if(!response.ok) {
            const errorDetails = await response.text()
            console.error(`Erro na API (${endpoint}):`, response.status, errorDetails)
            throw new Error(`Erro na requisiçao${endpoint}`)
        }
        return await response.json()
    } catch(error) {
        console.error(`Erro ao acessar a  API (${endpoint}):`, error)
        return null
    }
}
// POST REQUEST PRA FAZER O LOGIN NO APP
export const handleLogin = async({username, password}: {username: string; password: string}) => {
    return apiRequest("Admin/login", "POST", {username, password});
}

// AREA ADMINISTRATIVA DE COLABORADOES
export const postColaborador = async(colaborador: Colaborador) => {
    return apiRequest("Admin/colaborador", "POST", colaborador)
}
export const getColaboradores = async(searchTerms: string): Promise<Colaborador[]> => {
    const query = searchTerms ? ` ? nome=${encodeURIComponent(searchTerms)}` : ""
    return apiRequest(`Admin/colaborador${query}`, "GET")
}
export const handleColaboradorWithId = async(id: string) => {
    return apiRequest(`Admin/colaborador/${id}`, "GET")
}
export const putColaborador = async({id, password, newPassword}: {id: string, password: string, newPassword: string}) => {
    return apiRequest(`Admin/colaborador/${id}`, "PUT", {id, password, newPassword})
}
export const deleteColaborador = async(id: string) => {
    return apiRequest(`Admin/colaborador/${id}`, "DELETE")
}


// CLIENT REQUESTS IN API
export const handleAllClientes = async(searcTerm: string): Promise<Cliente[]> => {
    const query = searcTerm ? `? nome=${encodeURIComponent(searcTerm)}` : ""
    return apiRequest(`Admin/cliente${query}`, "GET" )
}

export const submitClient = async(cliente: Cliente) => {
    return apiRequest("Admin/cliente", "POST", cliente)
}

export const updateClient = async(id: string, cliente: Cliente) => {
    return apiRequest(`Admin/cliente/${id}`, "PUT", {id, cliente})
}

export const deleteClient = async(id: string) => {
    return apiRequest(`Admin/cliente/${id}`, "DELETE")
}

// PRODUCTS REQUESTS IN API 
export const handleAllProducts = async(searchTerms: string): Promise<Produto[]> =>{
    const query = searchTerms ? `?name=${encodeURIComponent(searchTerms)}` : '';
    return apiRequest(`Admin/produto${query}`, "GET")
}

export const handleProductWithId = async(id: string) => {
    return apiRequest(`Admin/produto/${id}`, "GET")
}

export const updateProductWhitId = async(id: string, putProduct: Partial<Produto>) =>{
    return apiRequest(`Admin/produto/${id}`, "PUT", putProduct)
}

export const deleteProductWidthId = async(id: string) => {
    return apiRequest(`Admin/produto/${id}`, "DELETE")
}

export const submitProduct= async(produto: Produto) =>{
    return apiRequest("Admin/produto", "POST", produto)
}

//REQUESTS FORNECEDORES IN API
export const handleAllFornecedores = async(searchTerms: string) : Promise<Fornecedor[]> =>{
    const  query = searchTerms ? `nome=${encodeURIComponent(searchTerms)}` : ""
    return apiRequest(`Admin/fornecedor${query}`, "GET")
}
export const submitFornecedor = async(fornecedor: Fornecedor) => {
    return apiRequest("Admin/fornecedor", "POST", fornecedor)
}
export const updateFornecedor = async(id: string, fornecedor: Fornecedor) => {
    return apiRequest(`Admin/fornecedor/${id}`, "PUT", fornecedor)
}
export const deleteFornecedor = async(id: string) => {
    return apiRequest(`Admin/fornecedor/${id}`, "DELETE")
}