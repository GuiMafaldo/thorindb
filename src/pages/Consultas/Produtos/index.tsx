import { useState, useEffect } from "react";
import { ContainerContent, TableData, TableHead, TableHeader, TableRow, TableWrapper } from "./styles";
import { handleProdutos } from "../../../api/api";
import { Produto } from "../../../utils/products";

const SearchProdutos = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filteredResults, setFilteredResults] = useState<Produto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Função para buscar os produtos da API
  const fetchProdutos = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await handleProdutos(searchTerm); // Busca todos os produtos da API
      setProdutos(res); // Salva todos os produtos no estado
      setFilteredResults(res); // Inicialmente, todos os produtos são renderizados
    } catch (err) {
      setError("Erro ao buscar dados");
    } finally {
      setIsLoading(false);
    }
  };

  // Chamar a função para buscar produtos ao montar o componente
  useEffect(() => {
    fetchProdutos();
  }, []);

  // UseEffect para filtrar os resultados com base no termo de busca
  useEffect(() => {
    if (searchTerm) {
      const filtered = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Aplica o filtro pelo nome do produto
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults(produtos); // Se o termo de busca estiver vazio, mostra todos os produtos
    }
  }, [searchTerm, produtos]);

  return (
    <ContainerContent>
        <TableWrapper>
            <h1>Consultar produtos</h1>
            <div>
                <input
                  type="text"
                  placeholder="Digite o nome do produto"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
                />
                <button onClick={fetchProdutos}>Buscar</button>
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
                    <TableHeader>Preço</TableHeader>
                    <TableHeader>Quantidade</TableHeader>
                    <TableHeader>Descrição</TableHeader>
                    <TableHeader>Categoria</TableHeader>
                    </TableRow>
                </TableHead>
                <tbody>
                    {filteredResults.length > 0 ? (
                    filteredResults.map((produto) => (
                        <TableRow key={produto.id}>
                        <TableData>{produto.id}</TableData>
                        <TableData>{produto.nome}</TableData>
                        <TableData>R$ {produto.preco.toFixed(2)}</TableData>
                        <TableData>{produto.quantidade}</TableData>
            
                        <TableData>{produto.descricao}</TableData>
                        
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
  );
};

export default SearchProdutos;
