import { Link } from "react-router-dom"
import { useState } from 'react'

import { submitFornecedor } from '../../../api/api'

import { ContainerGrid, ContentForm, FirtMenuCad} from "./styles"
import Layout from "../../../Layout"



const CadastroFornecedores = () => {
    const [fornecedor, setFornecedor] = useState({
        name: '',
        razaoSocial: '',
        email: '',
        telefone: 0,
        numero: 0,
        endereco: '',
        cidade: '',
        estado: ''
    })
    const handleChange = (e: any) => {
        e.preventDefault()
        setFornecedor({
            ...fornecedor,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e: any) => {
        e.preventDefault()
        const response = await submitFornecedor(fornecedor)
        if(response){
            alert("Fornecedor cadastrado com exito")
        } else {
            alert("Erro ao cadastrar Fornecedor")
        }
    }
    return(
       <Layout>
            <ContainerGrid>
                        <FirtMenuCad>
                            <h3>Dados Empresa</h3>
                            <ContentForm>
                                <form onSubmit={handleSubmit}>
                                <div className="name-and-cnpj">
                                        <div>
                                            <label htmlFor="name-empresa">Nome da empresa:</label>
                                            <input 
                                                type="text"
                                                name="nome"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cnpj-empresa">Cnpj:</label>
                                            <input 
                                                type="text"  
                                                name="cnpj"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="razao-social">Razão social:</label>
                                            <input 
                                                type="text" 
                                                name="razaoSocial"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                </div>
                                    <div className="email-and-tel">
                                        <div>
                                            <label htmlFor="email-empresa">Email:</label>
                                            <input 
                                                type="text"  
                                                name="email"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="tel-empresa">Telefone:</label>
                                            <input 
                                                type="text" 
                                                name="telefone"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="id-empresa">Codigo:</label>
                                            <input 
                                                className="id-empresa" 
                                                type="number" 
                                                name="id"    
                                                />
                                        </div>
                                    </div>
                                </form>                    
                                <h3>Dados endereço</h3>
                                <form onSubmit={handleSubmit} className="content-form">
                                    <div className="content">
                                        <div className="city-and-rua">
                                            <div>
                                                <label htmlFor="rua-fornecedor">Logradouro:</label>
                                                <input 
                                                    type="text" 
                                                    name="endereco"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="city-fornecedor">Cidade:</label>
                                                <input 
                                                    type="text" 
                                                    name="cidade"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="state-fornecedor">Estado:</label>
                                                <input 
                                                    type="text" 
                                                    name="estado"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="cep-and-number">
                                            <div>
                                                <label htmlFor="cep-fornecedor">Cep:</label>
                                                <input 
                                                    type="text" 
                                                    name="cep"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <input 
                                                className="number-forn" 
                                                type="number"
                                                name="numero"
                                                onChange={handleChange}
                                                required  
                                                placeholder="num..."/>
                                        </div>
                                    </div>
                                    <div className="description-and-button">
                                        <textarea placeholder="complemento">Informações adicionais</textarea>
                                        <div className="button-cad">
                                            <button type="submit">Cadastrar</button>
                                            <Link className="voltar" to="/initialpage">Voltar ao menu</Link>
                                            <img src="/image/logoKeppler.png" alt="" />
                                        </div>
                                    </div>
                                </form>
                        </ContentForm>
                </FirtMenuCad>
            </ContainerGrid>
       </Layout>
        
    )
}
export default CadastroFornecedores