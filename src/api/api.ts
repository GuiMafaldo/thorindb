// LOGIN AUTENTICACAO NO BANCO DE DADOS

import { Cliente } from "../utils/cliente";

export const login = async ({ nome, senha }: { nome: string; senha: string }) => {
  try {
      const response = await fetch("http://localhost:5089/admin/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, senha }),
      });

      if (!response.ok) {
          throw new Error("Erro ao fazer login");
      }

      const data = await response.json();
      
      // Retorna a resposta completa da API
      console.log(data);
      return data;
  } catch (error) {
      console.error("Erro na API de login:", error);
      return null;
  }

};

// BUSCA TODOS OS CLIENTES NO BANCO DE DADOS

export const getClientes = async (searchTerm: string): Promise<Cliente[]> => {
    try {
    
        const response = await fetch("http://localhost:5089/Cliente/clientes?nome=${searchTerm}", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar clientes");
        }
        // Retorna a resposta completa da API
        const data: Cliente[] = await response.json();
        return data;

    } catch (error) {
        console.error("Erro na API de busca de clientes:", error);
        return [];
    }
}

// CADASTRAR CLIENTE NO BANCO DE DADOS
export const cadastrarCliente = async (cliente: {
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
    estado: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    numero: string;
    cep: string;
}) => {
    try {
        const response = await fetch("http://localhost:5089/Cliente/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cliente),
        });

        if (!response.ok) {
            throw new Error("Erro ao cadastrar cliente");
        }

        const data = await response.json();
        
        // Retorna a resposta completa da API
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erro na API de cadastro de clientes:", error);
        return null;
    }
};
