import { Link } from 'react-router-dom'
import { Colaboradores, ContainerForm, ContainerGeral, FormDisplay } from "./styles"
import React, { useState } from 'react'
import { Colaborador } from '../../../utils/Interfaces/colaborador'
import { postColaborador } from '../../../services/api/api'


const CadastroColaboradores = () => {
    const [colaborador, setColaborador] = useState<Colaborador>({
        nome: '',
        telefone: '',
        email: '',
        numero: '',
        username: '',
        password: '',
       
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setColaborador({
            ...colaborador,
            [e.target.name]: e.target.value
        })
    }

        const clickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const resultado = await postColaborador(colaborador);
            if (resultado) {
                alert("Colaborador cadastrado com sucesso!");
                setColaborador({
                    nome: '',
                    telefone: '',
                    email: '',
                    numero: '',
                    username: '',
                    password: ''
                });
            } else {
                alert("Erro ao cadastrar colaborador")
                console.log(resultado)
            }
        }
    return(  
            <>
                <ContainerGeral>
                    <ContainerForm>
                        <Colaboradores>
                            <div className="title-and-back">
                                <h3 style={{marginLeft: 80}}>Dados do Colaboradores</h3>
                                <Link to="/dashboard">Voltar ao menu</Link>
                            </div>
                            <FormDisplay>
                                <form onSubmit={clickSubmit} style={{position: "relative"}}>
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: "5vh", marginLeft: -600}}>
                                        <div>
                                            <input 
                                                style={{width: 270, marginLeft: -4}}
                                                placeholder='Nome'  
                                                name='nome'
                                                onChange={handleChange}
                                                required
                                                type="text" 
                                                id="name-colaborador" 
                                            />
                                        </div>
                                        <div className="numbers-type">
                                            <input 
                                                placeholder='(xx) 99999-9999'
                                                name='telefone'
                                                onChange={handleChange}
                                                required
                                                className="num-type-tel" 
                                                type="number" 
                                                id="tel-colaborador" 
                                            />
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center', marginLeft: -555}}>
                                        <div style={{display: "flex",  flexDirection: "column",alignItems: "center", justifyContent: "center"}}>
                                            <input
                                                placeholder='exemplo@email.com'
                                                style={{ width: 350, marginLeft: -50}}
                                                name='email'
                                                onChange={handleChange}
                                                required
                                                type="email" 
                                                id="email-colaborador" 
                                            />
                                        </div>
                                        <div style={{display: "flex",  flexDirection: "column",alignItems: "center", justifyContent: "center", marginLeft: 6}}>
                                            <input 
                                                placeholder='123'
                                                style={{width: 115}}
                                                name='numero'
                                                onChange={handleChange}
                                                className="num-type-numero" 
                                                type="number" 
                                                id="number-colaborador" 
                                            />
                                        </div>
                                    </div>
                                    {/* Campos Documents */}
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: "10vh", marginLeft: -605, marginTop: -25, gap: 40}}>
                                        <div>
                                            <input 
                                                onChange={handleChange}
                                                type="text" 
                                                placeholder='RG xx.xxx.xxx.xx' 
                                                name='rg'
                                            />
                                        </div>
                                        <div>
                                            <input
                                                onChange={handleChange}
                                                name='cpf'
                                                type="text" 
                                                id="CPF-colaborador"
                                                placeholder='CPF xxx.xxx.xxx-xx'     
                                            />
                                        </div>
                                    </div>
                                             {/* Campos date and Role */}
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: "10vh", marginLeft: -606, marginTop: -48, gap: 20}}>
                                        <div>
                                            <input 
                                                onChange={handleChange}
                                                title='Data de Nascimento'
                                                type="date" 
                                                name='dataNascimento'
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                onChange={handleChange}
                                                style={{width: 300}}
                                                type="text"
                                                placeholder='Cargo'
                                                name='cargo'
                                            />
                                        </div>
                                    </div>
                                    {/* Credenciais de Acesso */}
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "10vh", position: "absolute", top: -15, right: -400}}>
                                        <h3>Credenciais de Acesso</h3>
                                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10}}>
                                        <div>
                                            <input
                                                style={{width: 220}}
                                                onChange={handleChange}
                                                placeholder='Usuário'
                                                name='username'
                                                type="text" 
                                                id="username-colaborador" 
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                style={{width: 220}}
                                                onChange={handleChange}
                                                required
                                                placeholder='Password'
                                                name='password'
                                                type="password" 
                                                id="pass-colaborador" 
                                            />
                                        </div>
                                        </div>
                                        <button type="submit">Salvar</button>
                                    </div>
                                </form>
                            </FormDisplay>
                        </Colaboradores>
                </ContainerForm>
            </ContainerGeral>
           
        </>     
    )
}

export default CadastroColaboradores