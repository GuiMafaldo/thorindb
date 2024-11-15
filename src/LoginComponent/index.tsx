import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { handleLogin } from "../services/api/api";
import { HeaderLogin, DivContainer, DivForm, FormLogin, SelectIdioma } from "./styles";
import globo from '../assets/image/iconeGlobo.png'

const LoginPage: React.FC = () => {
    const [userData, setUserData] = useState<string | any>("");
    const [password, setPassword] = useState<string | any>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await handleLogin({ nome: userData, senha: password });
            if (response && response.success) {
                localStorage.setItem('userName', userData); // Use userData.nome
                navigate('/initialpage');
            } else {
                setError("Credenciais inválidas. Tente novamente.");
            }
        } catch (error) {
            setError(`Erro ao autenticar. Tente novamente. ${error}`);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <HeaderLogin>
                <h2>KepplerB</h2>
            </HeaderLogin>
            <DivContainer>
                <h2>Login</h2>
                <DivForm>
                    <FormLogin onSubmit={handleSubmit}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <input 
                            type="text"
                            placeholder="Usuário" 
                            value={userData}
                            onChange={(e) =>  setUserData(e.target.value)}
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={password}
                            onChange={(e) =>  setPassword(e.target.value)}
                            required 
                        />
                        <button className="button" type="submit" disabled={loading}>
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </FormLogin>
                    <a href="/redefinirSenha">Esqueceu sua senha? <span>Clique Aqui</span></a>
                </DivForm>
                <SelectIdioma>
                    <h4>Suport<span>?</span></h4>
                    <select>
                        <option value="pt-br">Português</option>
                        <option value="en">Inglês</option>
                    </select>
                    <img src={globo} alt="logo" />
                </SelectIdioma>
            </DivContainer>
        </>
    );
};

export default LoginPage;
