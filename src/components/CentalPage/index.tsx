import React, { useState, useEffect, useRef } from "react";
import { ContainerPainel } from "./styles";
import { getClientes } from "../../api/api";
import { Cliente } from "../../utils/cliente";


const NewsAndAtualizacoes: React.FC = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [filteredClientes, setFilteredClientes] = useState<Cliente[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(false);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    // Função para buscar clientes
    const searchClientes = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await getClientes(searchTerm);
            setClientes(res);
            setFilteredClientes([]); // Inicialmente, a lista filtrada está vazia
            setShowResults(false); // Não exibe resultados até que a busca seja realizada
        } catch (err) {
            setError("Erro ao buscar clientes");
        } finally {
            setIsLoading(false);
        }
    };

    // Função para filtrar clientes com base no termo de pesquisa
    const filterClientes = (term: string) => {
        if (term.trim() === "") {
            setFilteredClientes([]); // Não mostra nenhum cliente quando o termo está vazio
        } else {
            const filtered = clientes.filter(cliente =>
                cliente.nome.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredClientes(filtered);
        }
        setShowResults(true); // Exibe os resultados após a busca
    };

    // Manipula o envio do formulário
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        filterClientes(searchTerm);
    };

    // Manipula a mudança no campo de busca
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        filterClientes(value); // Aplica o filtro em tempo real
    };

    // Detecta cliques fora do componente de pesquisa
    const handleClickOutside = (event: MouseEvent) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
            setShowResults(false); // Oculta os resultados ao clicar fora
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        searchClientes(); // Busca clientes quando o componente é montado
    }, []);

    return (
        <ContainerPainel>
            <div ref={searchContainerRef}>
                <h2>Notícias da semana</h2>
                <div>
                    <img src="/image/carousel1.jpg" alt="imagem" />
                    <h4>Título notícia</h4>
                    <p>Buscar por Cliente</p>
                </div>
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder="Buscar..." 
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button type="submit">Buscar</button>
                </form>
                <div>
                    {isLoading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {showResults && (
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {filteredClientes.length > 0 ? (
                                filteredClientes.map(cliente => (
                                    <li key={cliente.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                                        <h3>{cliente.nome}</h3>
                                        {cliente.email && <p>Email: {cliente.email}</p>}
                                        {cliente.telefone && <p>Telefone: {cliente.telefone}</p>}
                                    </li>
                                ))
                            ) : (
                                <p>Nenhum cliente encontrado.</p>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </ContainerPainel>
    );
};

export default NewsAndAtualizacoes;
