import { Cliente } from "../utils/cliente";
import { Fornecedor } from "../utils/fornecedor";
import { ItemNotaFiscal } from "../utils/notaFiscal";
import { Produto } from "../utils/products";



// LOGIN AUTENTICACAO NO BANCO DE DADOS

export const handlelogin = async ({ nome, senha }: { nome: string; senha: string }) => {
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

export const handleClientes = async (searchTerm: string): Promise<Cliente[]> => {
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
export const submitCliente = async (cliente: Cliente) => {
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

export const submitProdutos = async (produto: Produto) => {
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
export const handleProdutos = async (searchTerm: string): Promise<Produto[]> => {
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

export const emitirNotaFiscal = async (numero: string, cliente: string, endereco: string, itens: ItemNotaFiscal[]) => {
    try {
        const res = await fetch('http://localhost:5089/notafiscal/criar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                numero,
                cliente,
                endereco,
                itens
            }),
        });

        if (!res.ok) {
            throw new Error('Erro ao emitir nota fiscal');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erro na API de busca de Notas Fiscais:', error);
        return null; // Retorna null em caso de erro
    }
};

// CADASTRAR FORNECEDOR NO BANCO DE DADOS
export const submitFornecedor = async (fornecedor: Fornecedor) =>{
        try{
            const res = await fetch('http://localhost:5089/Fornecedor/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fornecedor)
            })
            if(!res.ok) {
                throw new Error('Erro ao cadastrar Fornecedor');
            }
            const data = await res.json()
            return data;
        } catch(error) {
            console.error('Erro na API de cadastro de Fornecedor:', error);
            return null;
        }
    }
// CONSULTAR FORNECEDORES CADASTRADOS
export const handleFornecedores = async(searcTerm: string): Promise<Fornecedor[]> => {
        try {
            const response = await fetch(`http://localhost/Fornecedor/fornecedores?nome=${searcTerm}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(!response.ok) {
            throw new Error("Erro ao buscar a lista de fornecedores");
        }
        const data: Fornecedor[] = await response.json()
        return data;
    } catch (error){
        console.error("Erro ao fazer a requisição de fornecedores", error)
        return [];
    }
}

