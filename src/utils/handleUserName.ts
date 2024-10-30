import { useState, useCallback } from "react";
import { handleLogin } from "../services/api/api";

// Hook personalizado para obter o nome do usuário após autenticação
export const useGetNameUser = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // Função para autenticar e obter o nome do usuário
    const authenticateUser = useCallback(async (userData: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            // Chama a função de login passando userData e password
            const response = await handleLogin({ nome: userData, senha: password });
            
            if (response && response.userName) {
                setUserName(response.userName); // Armazena o nome do usuário no estado
            } else {
                setError("Usuário ou senha inválidos");
            }
        } catch (error) {
            setError("Erro ao autenticar. Tente novamente.");
        } finally {
            setLoading(false);
        }
    }, []);

    return { userName, error, loading, authenticateUser };
};
