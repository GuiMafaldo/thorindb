import { Cliente } from "./../Interfaces/cliente";
import { Fornecedor } from "./../Interfaces/fornecedor";
import { Produto } from "./../Interfaces/products";

 export const apiRequest = async (
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    searchParams?: string
 ) => {
    const url = `http://localhost:5089/${endpoint}${searchParams ? `?${searchParams}` : ''}`
    try{
        const response =  await fetch(url, {
            method,
            headers: {
                "Content-Type":" application/json",
            },
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
    return apiRequest("Cliente/clientes", "GET", `nome=${searcTerm}`)
}

export const handleClienteWithId = async(id: string): Promise<Cliente[]> => {
    return apiRequest("Cliente/${id}", "GET", `name=${id}`)
}

export const submitClient = async(cliente: Cliente): Promise<Cliente> => {
    return apiRequest("Cliente/cadastrar", "POST", cliente)
}

export const updateClient = async(cliente: Cliente): Promise<Cliente> => {
    return apiRequest("Cliente/${id}", "PUT", cliente)
}

export const deleteClient = async(id: string):Promise<Cliente> => {
    return apiRequest("Cliente/${id}", "DELETE", `name=${id}`)
}

// PRODUCTS REQUESTS IN API 
export const handleAllProducts = async(searchTerms: string): Promise<Produto[]> =>{
    return apiRequest("Produtos/produto", "GET", `nome=${searchTerms}`)
}

export const handleProductWithId = async(id: string) => {
    return apiRequest("Produtos/${id", "GET", `name=${id}`)
}

export const updateProductWhitId = async(id: string): Promise<Produto> =>{
    return apiRequest("Produtos/${id}", "PUT", `name=${id}`)
}

export const deleteProductWidthId = async(id: string): Promise<Produto> => {
    return apiRequest("Produtos/${id}", "DELETE", `name=${id}`)
}

export const submitProduct= async(produto: Produto) =>{
    return apiRequest("Produtos/cadastrar", "POST", produto)
}

//REQUESTS FORNECEDORES IN API
export const handleAllFornecedores = async(searchTerms: string) : Promise<Fornecedor[]> =>{
    return apiRequest("Fornecedor/fornecedores", "GET",  `nome=${searchTerms}`)
}
export const handleFornecedor = async(id: string): Promise<Fornecedor> =>{
    return apiRequest("Fornecedor/${id}", "GET", `name=${id}`)
}

export const submitFornecedor = async(fornecedor: Fornecedor) =>{
    return apiRequest("Fornecedor/cadastrar", "POST", fornecedor)
}