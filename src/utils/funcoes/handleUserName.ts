import { useState, useCallback } from "react";
import { handleLogin } from "../../services/api/api";

// Hook personalizado para obter o nome do usuário após autenticação
export const useGetNameUser = () => {
    const [userName, setUserName] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // Função para autenticar e obter o nome do usuário
    const authenticateUser = useCallback(async (userData: string, pass: string) => {
        setLoading(true);
        setError(null);

        try {
            // Chama a função de login passando userData e password
            const response = await handleLogin({ username: userData, password: pass });       
            if (response.userName && response.pass) {
                console.log(response);
                setUserName(response.userName);
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