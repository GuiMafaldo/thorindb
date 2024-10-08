import { useEffect, useState } from "react";
import { Produto } from "../utils/products";
import { handleProdutos } from "../api/api";

export const useProductsArea = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [products, setProducts] = useState<Produto[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Produto[]>([]);

  // Função para buscar produtos no banco de dados
  const searchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await handleProdutos(searchTerm);
      setProducts(res);
      setFilteredProducts([]); // Inicialmente, a lista filtrada está vazia
      setShowResults(false); // Não exibe resultados até que a busca seja realizada
    } catch (err) {
      setError("Erro ao buscar produtos");
    } finally {
      setIsLoading(false);
    }
  };

  const filterProducts = (term: string) => {
    if (term.trim() === "") {
      setFilteredProducts([]); // Não mostra nenhum produto quando o termo está vazio
    } else {
      const filtered = products.filter((produto) =>
        produto.nome.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
    setShowResults(true); // Exibe os resultados após a busca
  };

  const handleSearchProducts = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterProducts(searchTerm);
  };

  const handleChangeProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterProducts(value); // Aplica o filtro em tempo real
  };

  useEffect(() => {
    searchProducts(); // Busca produtos quando o componente é montado
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    error,
    isLoading,
    showResults,
    filteredProducts,
    handleSearchProducts,
    handleChangeProducts,
    setShowResults,
  };
};
