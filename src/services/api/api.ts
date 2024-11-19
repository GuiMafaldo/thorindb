import { Colaborador } from "../../utils/Interfaces/colaborador";
import { Cliente } from "../../utils/Interfaces/cliente";
import { Fornecedor } from "../../utils/Interfaces/fornecedor";
import { Produto } from "../../utils/Interfaces/products";
import { baseUrl } from "../db/conectiondb";

 export const apiRequest = async (
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    searchParams?: string
 ) => {
    const url = (`${baseUrl}${endpoint}${searchParams ? ` ? ${searchParams}` : ''}`)
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
export const resetPassword = async({nome, senha, newSenha, senhaConfirmacao}: {nome: string;senha: string; newSenha: string;senhaConfirmacao: string}) =>{
    return apiRequest("Admin/resetPassword", "POST", {nome,senha, newSenha, senhaConfirmacao})
}

// CADASTRO DE COLABORADORES ENDPOINTS
export const cadastrarColaborador = async(colaborador: Colaborador) => {
    return apiRequest("Colaborador/cadastrar", "POST", colaborador)
}
export const handleColaboradorWithId = async(id: string) => {
    return apiRequest("Colaborador/${id}", "GET", `name=${id}`)
}
export const atualizarColaborador = async({id, password, newPassword}: {id: string, password: string, newPassword: string}) => {
    return apiRequest("Colaborador/${id}", "PUT", {id, password, newPassword})
}
export const deletarColaborador = async(id: string) => {
    return apiRequest("Colaborador/${id}", "DELETE", `name=${id}`)
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

export const updateProductWhitId = async(id: string, updatedData: Partial<Produto>) =>{
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