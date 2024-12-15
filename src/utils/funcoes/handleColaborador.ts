import React, { useEffect, useState } from "react";
import { getColaboradores } from "../../services/api/api";
import { Colaborador } from "../Interfaces/colaborador";

export const useColaboradorArea = () => {
  const [searchTerm, setSearchTerm] = useState<string | any>(""); // Termo de busca
  const [error, setError] = useState<string | null>(null); // Mensagem de erro
  const [isLoading, setIsLoading] = useState<boolean>(false); // Indica carregamento
  const [showResults, setShowResults] = useState<boolean>(false); // Exibição de resultados
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]); // Lista original de colaboradores
  const [filteredColaboradores, setFilteredColaboradores] = useState<Colaborador[]>([]); // Lista filtrada

  // Função para buscar colaboradores no banco de dados
  const searchColaborador = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await getColaboradores(searchTerm);

      // Verifica se o retorno é um array válido
      setColaboradores(res);
      setFilteredColaboradores(res); // Inicialmente, exibe todos os colaboradores
      setShowResults(true);
      console.log(res);
    } catch (err) {
      setError("Erro ao buscar colaboradores");
    } finally {
      setIsLoading(false);
    }
  };

  // Filtrar colaboradores com base no termo de busca
  const filterColaborador = (term: string) => {
    const normalizedTerm = term.trim().toLowerCase();

    if (normalizedTerm === "") {
      // Exibe todos os colaboradores se o termo estiver vazio
      setFilteredColaboradores(colaboradores);
    } else {
      // Filtra colaboradores pelo nome
      const filtered = colaboradores.filter((colaborador) =>
        colaborador.nome.toLowerCase().includes(normalizedTerm)
      );
      setFilteredColaboradores(filtered);
    }

    setShowResults(true); // Exibe os resultados após o filtro
  };

  // Lidando com envio do formulário de busca
  const handleSearchColaborador = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterColaborador(searchTerm); // Aplica o filtro
  };

  // Atualiza o termo de busca e aplica o filtro em tempo real
  const handleChangeColaborador = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterColaborador(value);
  };

  // Busca colaboradores ao montar o componente
  useEffect(() => {
    searchColaborador();
  }, []);

  return {
    searchTerm,
    error,
    isLoading,
    showResults,
    filteredColaboradores,
    handleChangeColaborador,
    handleSearchColaborador,
  };
};
