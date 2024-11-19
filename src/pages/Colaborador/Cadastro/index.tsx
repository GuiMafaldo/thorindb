import { Link } from 'react-router-dom'
import { Colaboradores, ContainerForm, ContainerGeral, FormDisplay } from "./styles"
import Layout from '../../../Layout'
import React, { useState } from 'react'
import { Colaborador } from '../../../utils/Interfaces/colaborador'
import { cadastrarColaborador } from '../../../services/api/api'


const CadastroColaboradores = () => {
    const [colaborador, setColaborador] = useState<Colaborador>({
        nome: '',
        email: '',
        telefone: 0,
        username: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setColaborador({
            ...colaborador,
            [e.target.name]: e.target.value
        })
    }

        const clickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const resultado = await cadastrarColaborador(colaborador);
            if (resultado) {
                alert("Colaborador cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar colaborador")
            }
        }

    return(  
            <Layout>
                <ContainerGeral>
                    <ContainerForm>
                        <Colaboradores>
                            <div className="title-and-back">
                                <h3>Cadastro de Colaboradores</h3>
                                <Link to="/dashBoard">Voltar ao menu</Link>
                            </div>
                            <FormDisplay>
                                <form onSubmit={clickSubmit}>
                                    <div className="numbers-type">
                                        <label htmlFor="id-colaborador">Id:</label>
                                        <input 
                                            name='id'
                                            onChange={handleChange}
                                            className="num-type" 
                                            type="text" 
                                            id="id-colaborador" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="name-colaborador">Nome:</label>
                                        <input 
                                            name='nome'
                                            onChange={handleChange}
                                            required
                                            type="text" 
                                            id="name-colaborador" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-colaborador">Email:</label>
                                        <input
                                            name='email'
                                            onChange={handleChange}
                                            required
                                            type="email" 
                                            id="email-colaborador" 
                                        />
                                    </div>
                                    <div className="numbers-type">
                                        <label htmlFor="tel-colaborador">Tel:</label>
                                        <input 
                                            name='telefone'
                                            onChange={handleChange}
                                            required
                                            className="num-type-tel" 
                                            type="number" 
                                            id="tel-colaborador" 
                                        />
                                    </div>
                                    <div>
                                    <h3>Credenciais de Acesso</h3>
                                    <div>
                                        <label htmlFor="username-colaborador">Username Login:</label>
                                        <input
                                            name='username'
                                            onChange={handleChange}
                                            required
                                            type="text" 
                                            id="username-colaborador" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="pass-colaborador">Senha:</label>
                                        <input 
                                            name='password'
                                            onChange={handleChange}
                                            required
                                            type="password" 
                                            id="pass-colaborador" 
                                        />
                                    </div>
                                    </div>
                                    <button type="submit">Salvar</button>
                                </form>
                                </FormDisplay>
                        </Colaboradores>
                </ContainerForm>
            </ContainerGeral>
        </Layout>       
    )
}

export default CadastroColaboradores