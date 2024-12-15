export interface Colaborador {
    id?: number,
    nome: string,
    email: string,
    numero: string | number
    telefone: string | number,
    username: string,
    password: string, 
    rg?: string,
    cpf?: string,
    cargo?: string,
    dataNascimento?: Date,
}