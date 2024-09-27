import { Cliente } from "../utils/cliente";
import { Produto } from "../utils/products";


// LOGIN AUTENTICACAO NO BANCO DE DADOS

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
    
        const response = await fetch(`http://localhost:5089/Cliente/clientes?nome=${searchTerm}`, {
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
export const cadastrarCliente = async (cliente: Cliente) => {
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

// CADASTRAR PRODUTO NO BANCO DE DADOS

export const cadastrarProdutos = async (produto: Produto) => {
    try {
        const response = await fetch("http://localhost:5089/Produtos/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto),
        });

        if (!response.ok) {
            throw new Error("Erro ao cadastrar produto");
        }

        const data = await response.json();
        
        // Retorna a resposta completa da API
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erro na API de cadastro de produtos:", error);
        return null;
    }
}


// BUSCA TODOS OS PRODUTOS NO BANCO DE DADOS
export const getProdutos = async (searchTerm: string): Promise<Produto[]> => {
    try {
        const response = await fetch(`http://localhost:5089/Produtos/produto?nome=${searchTerm}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar produtos");
        }
        // Retorna a resposta completa da API
        const data: Produto[] = await response.json();
        return data;

    } catch (error) {
        console.error("Erro na API de busca de produtos:", error);
        return [];
    }
}


