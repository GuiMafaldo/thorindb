import React, { useState } from "react"
import { resetPassword } from "../services/api/api";
import { ResetPassword } from "../services/Interfaces/resetPassword";


const RedefinirSenha = () => {
    const [password, setPassword] =  useState<ResetPassword>({
        senha: '',
        newSenha:'',
        senhaConfirmacao: '',
        nome:''
    })
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('userName', password.senha);
     e.preventDefault();
     const { name, value} = e.target
    setPassword((prevPassword) => ({
        ...prevPassword,
        [name]:value
    }))
    console.log({...password, [name]:value})
}
    const handleReset = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await resetPassword(password)
       if(response) {
                alert("Senha redefinida com sucesso!")
            } else {
                alert("Erro ao redefinir senha")
            }

        }
    return(
        <div style={{display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    height: "100vh",
                }}>

            <h2>Redefinir Senha.</h2>

            <form 
                style={{display: 'flex', flexDirection:'column', gap: '10px'}} 
                onSubmit={handleReset}
            >
                <input 
                    type="password"
                    required
                    placeholder="Digite a senha atual" 
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    required
                    placeholder="Digite a nova senha" 
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    required
                    placeholder="Confirme a nova senha" 
                    onChange={handleChange}
                />
                <button>Redefinir</button>
            </form>
        </div>

    )
}

export default RedefinirSenha