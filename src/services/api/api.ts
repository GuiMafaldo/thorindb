import { Cliente } from "./../Interfaces/cliente";
import { Fornecedor } from "./../Interfaces/fornecedor";
import { Produto } from "./../Interfaces/products";

 export const apiRequest = async (
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    searchParams?: string
 ) => {
    const url = (`http://localhost:5089/${endpoint}${searchParams ? ` ? ${searchParams}` : ''}`)
    try{
        const response =  await fetch(url, {
            method,
            headers: {
                "Content-Type":" application/json",
            },
            body: JSON.stringify(body)
        });       
        if(!response.ok) {
            throw new Error(`Erro na requisiçao${endpoint}`)
        }
        return await response.json()
    } catch(error) {
        console.error(`Erro na API (${endpoint}):`, error)
        return null
    }
}
// Request information about the logged user in the database
export const handleLogin = async({nome, senha}: {nome: string; senha: string}) =>{
    return apiRequest("Admin/login", "POST", {nome, senha})
}

// CLIENT REQUESTS IN API
export const handleAllClientes = async(searcTerm: string): Promise<Cliente[]> => {
    const query = searcTerm ? `? nome=${encodeURIComponent(searcTerm)}` : ""
    return apiRequest(`Cliente/clientes${query}`, "GET" )
}

export const submitClient = async(cliente: Cliente) => {
    return apiRequest("Cliente/cadastrar", "POST", cliente)
}

export const updateClient = async(cliente: Cliente) => {
    return apiRequest("Cliente/${id}", "PUT", cliente)
}

export const deleteClient = async(id: string) => {
    return apiRequest("Cliente/${id}", "DELETE", `name=${id}`)
}

// PRODUCTS REQUESTS IN API 
export const handleAllProducts = async(searchTerms: string): Promise<Produto[]> =>{
    const query = searchTerms ? `?name=${encodeURIComponent(searchTerms)}` : '';
    return apiRequest(`Produtos/produto${query}`, "GET")
}

export const handleProductWithId = async(id: string) => {
    return apiRequest("Produtos/${id}", "GET", `name=${id}`)
}

export const updateProductWhitId = async(id: string)=>{
    return apiRequest("Produtos/${id}", "PUT", `name=${id}`)
}

export const deleteProductWidthId = async(id: string) => {
    return apiRequest("Produtos/${id}", "DELETE", `name=${id}`)
}

export const submitProduct= async(produto: Produto) =>{
    return apiRequest("Produtos/cadastrar", "POST", produto)
}

//REQUESTS FORNECEDORES IN API
export const handleAllFornecedores = async(searchTerms: string) : Promise<Fornecedor[]> =>{
    const  query = searchTerms ? `nome=${encodeURIComponent(searchTerms)}` : ""
    return apiRequest(`Fornecedor/fornecedores${query}`, "GET")
}
export const submitFornecedor = async(fornecedor: Fornecedor) => {
    return apiRequest("Fornecedor/cadastrar", "POST", fornecedor)
}