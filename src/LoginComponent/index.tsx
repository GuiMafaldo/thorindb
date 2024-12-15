import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { handleLogin } from "../services/api/api";
import { HeaderLogin, DivContainer, DivForm, FormLogin, SelectIdioma } from "./styles";
import globo from '../assets/image/iconeGlobo.png'
import { couldStartTrivia } from "typescript";

const LoginPage: React.FC = () => {
    const [userData, setUserData] = useState<string | any>("");
    const [pass, setPassword] = useState<string | any>("");
    const [error, setError] = useState<string | any>();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(""); 
       
    
        try {
            // Fazer a requisição de login
            const response = await handleLogin({ username: userData, password: pass });
    
            if (response && response.success) {
                    localStorage.setItem('userName', response.user.username);
                    navigate('/dashboard');
                } else {
                    setError("Credenciais inválidas. Tente novamente.");
                    console.log(response.username, response.password);
                }
        } catch (error: any) {
            setError(`Erro ao autenticar. Tente novamente. ${error.message || error}`);
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
                            value={pass}
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
