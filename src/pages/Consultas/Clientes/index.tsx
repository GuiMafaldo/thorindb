import { useEffect, useState } from "react";

import { handleAllClientes } from "../../../services/api/api";
import { Cliente } from "../../../services/Interfaces/cliente";

import { ContainerContent, TableWrapper, TableHead, TableRow, TableHeader, TableData } from "../Produtos/styles";
import Layout from "../../../Layout";



const SearchClientes = () => {
    const [filteredResults, setFilteredResults] = useState<Cliente[]>([]);
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
 
  
    // Função para buscar clientes ou produtos com base no tipo de busca
    const fetchClientes= async () => {
      setIsLoading(true);
      setError(null);
      try{
        const res = await handleAllClientes(searchTerm);
        setClientes(res);
        setFilteredResults(res);
      } catch(err) {
        setError("Erro ao buscar dados")
      } finally{
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchClientes();
    }, []);
  
    useEffect(() => {
      if (searchTerm) {
        const filtered = clientes.filter((cliente) =>
          cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Aplica o filtro pelo nome do cliente
        );
        setFilteredResults(filtered);
      } else {
        setFilteredResults(clientes); // Se o termo de busca estiver vazio, mostra todos os clientes
      }
    }, [searchTerm, clientes]);
    return(
      <Layout>
        <ContainerContent>
              <TableWrapper>
                  <h1>Consultar Clientes</h1>
                  <div>
                      <input
                      type="text"
                      placeholder="Digite o nome do cliente"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
                      />
                      <button onClick={fetchClientes}>Buscar</button>
                  </div>

                  {isLoading ? (
                      <p>Carregando...</p>
                  ) : error ? (
                      <p>{error}</p>
                  ) : (
                      <table>
                      <TableHead>
                          <TableRow>
                          <TableHeader>ID</TableHeader>
                          <TableHeader>Nome</TableHeader>
                          <TableHeader>Telefone</TableHeader>
                          <TableHeader>Email</TableHeader>
                          <TableHeader>Cidade</TableHeader>
                          <TableHeader>Cep</TableHeader>
                          </TableRow>
                      </TableHead>
                          <tbody>
                              {filteredResults.length > 0 ? (
                              filteredResults.map((cliente) => (
                                  <TableRow key={cliente.id}>
                                  <TableData>{cliente.id}</TableData>
                                  <TableData>{cliente.nome}</TableData>
                                  <TableData>{cliente.telefone}</TableData>
                                  <TableData>{cliente.email}</TableData>
                                  <TableData>{cliente.cidade}</TableData>
                                  <TableData>{cliente.cep}</TableData>
                                  
                                  </TableRow>
                              ))
                              ) : (
                              <TableRow>
                                  <TableData colSpan={9}>Nenhum produto encontrado</TableData>
                              </TableRow>
                              )}
                          </tbody>
                  </table>
              )}
              <a href="/initialpage">Voltar</a>
              </TableWrapper>
        </ContainerContent>
      </Layout>
      
    )
}

export default SearchClientes