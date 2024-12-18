import { useEffect, useState } from "react";
import { Produto } from "../Interfaces/products";
import { handleAllProducts, updateProductWhitId } from "../../services/api/api";

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
      const res = await handleAllProducts(searchTerm);
      setProducts(res);
      setFilteredProducts(res); // Inicialmente, a lista filtrada está vazia
      setShowResults(true); // Não exibe resultados até que a busca seja realizada
    } catch (err) {
      setError("Erro ao buscar produtos");
    } finally {
      setIsLoading(false);
    }
  };

  const filterProducts = (term: string) => {
    if (term.trim() === "") {
      setFilteredProducts(products); // Não mostra nenhum produto quando o termo está vazio
    } else {
      const filtered = products.filter((produto) =>
        produto.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
    setShowResults(true); // Exibe os resultados após a busca
  };

  // ATUALIZAR PRODUTO 
  const updateProductDetails = async (id: string, putProduct: Partial<Produto>) => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedProduct = await updateProductWhitId(id, putProduct); 
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        )
      );
      setFilteredProducts((prevFiltered) =>
        prevFiltered.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        )
      );
    } catch (err) {
      setError("Erro ao atualizar produto");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchProducts = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterProducts(searchTerm);
  };

  const handleChangeProducts = (event: any) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterProducts(value); // Aplica o filtro em tempo real
  };

  useEffect(() => {
    searchProducts(); // Busca produtos quando o componente é montado
  }, []);


  return {
    searchTerm,
    error,
    isLoading,
    showResults,
    filteredProducts, 
    handleChangeProducts,
    updateProductDetails
  };
};
