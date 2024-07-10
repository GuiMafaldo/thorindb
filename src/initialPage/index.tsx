import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { DivContainer, DivForm, FormLogin, HeaderLogin, SelectIdioma } from "./styles";

import api from "../api/api";



const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    
    const LoginPage = async(e: React.FormEvent) => {
        e.preventDefault()
        try {
            const userData = await api(username, password)
            navigate('./initialpage')
        }
        catch(error: any){
            setError('Veriique suas credenciais')
            console.error('Login nao permitido Credenciais invalidas', error)
        }
    }

    return (
        <>
            <HeaderLogin>
                <h2>KepplerB</h2>
            </HeaderLogin>
            <DivContainer>
                <h2>Login</h2>
                <DivForm>
                    <FormLogin onSubmit={LoginPage}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <input 
                            type="text"
                            placeholder="Usuario" 
                            value={username}
                            onChange={(event) => setUsername(event.target.value)} // Atualizando o estado 'username' com o valor digitado
                            required />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required />
                        <button className="button" type="submit">Entrar</button>
                    </FormLogin>
                    <p>Esqueceu sua senha? <span>Clique Aqui</span> </p>
                </DivForm>
                <SelectIdioma>
                    <h4>Suport<span>?</span></h4>
                    <select>
                        <option value="pt-br">Português</option>
                        <option value="english">Ingles</option>
                    </select>
                    <img src="/image/iconeGlobo.png" alt="logo" />
                </SelectIdioma>
            </DivContainer>
        </>
    );
};

export default LoginPage;
function userContext(): { setUser: any; } {
    throw new Error("Function not implemented.");
}

