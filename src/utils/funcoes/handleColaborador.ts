import { useEffect, useState } from "react";
import { getAllColaborador, handleColaboradorWithId } from "../../services/api/api";
import { Colaborador } from "../Interfaces/colaborador";

export const useColaboradorArea = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [colaborador, setColaborador] = useState<Colaborador[]>([]);
  const [filteredColaborador, setFilteredColaborador] = useState<Colaborador[]>([]);

  // Função para buscar colaboradores no banco de dados
  const searchColaborador = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getAllColaborador(searchTerm);
      setColaborador(res);
      setFilteredColaborador(res); // Inicialmente, a lista filtrada está vazia
      setShowResults(true); // Não exibe resultados até que a busca seja realizada
    } catch (err) {
      setError("Erro ao buscar colaboradores");
    } finally {
      setIsLoading(false);
    }
  };

  const filterColaborador = (term: string) => {
    if (term.trim() === "") {
      setFilteredColaborador(colaborador); // Não mostra nenhum colaborador quando o termo está vazio
    } else {
      const filtered = colaborador.filter((index) =>
        index.nome.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredColaborador(filtered);
    }
    setShowResults(true); // Exibe os resultados após a busca
  };

  const handleSearchColaborador = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterColaborador(searchTerm);
  };

  const handleChangeColaborador = (event: any) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterColaborador(value); // Aplica o filtro em tempo real
  };

  useEffect(() => {
    searchColaborador(); // Busca produtos quando o componente é montado
  }, []);


  return {
    searchTerm,
    error,
    isLoading,
    showResults,
    filteredColaborador, 
    getAllColaborador,
    handleChangeColaborador
  };
};
