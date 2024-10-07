import { Link } from "react-router-dom"
import { ContainerGrid, ContentForm, FirtMenuCad} from "./styles"

const CadastroFornecedores = () => {
    return(
            <ContainerGrid>
                        <FirtMenuCad>
                            <h3>Dados Empresa</h3>
                            <ContentForm>
                                <form>
                                <div className="name-and-cnpj">
                                        <div>
                                            <label htmlFor="name-empresa">Nome da empresa:</label>
                                            <input type="text"/>
                                        </div>
                                        <div>
                                            <label htmlFor="cnpj-empresa">Cnpj:</label>
                                            <input type="text"  />
                                        </div>
                                        <div>
                                            <label htmlFor="razao-social">Razão social:</label>
                                            <input type="text" />
                                        </div>
                                </div>
                                    <div className="email-and-tel">
                                        <div>
                                            <label htmlFor="email-empresa">Email:</label>
                                            <input type="text"  />
                                        </div>
                                        <div>
                                            <label htmlFor="tel-empresa">Telefone:</label>
                                            <input type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="id-empresa">Codigo:</label>
                                            <input className="id-empresa" type="number" />
                                        </div>
                                    </div>
                                </form>
                            
                                <h3>Dados endereço</h3>
                                <form className="content-form">
                                    <div className="content">
                                        <div className="city-and-rua">
                                            <div>
                                                <label htmlFor="rua-fornecedor">Logradouro:</label>
                                                <input type="text"/>
                                            </div>
                                            <div>
                                                <label htmlFor="city-fornecedor">Cidade:</label>
                                                <input type="text"/>
                                            </div>
                                            <div>
                                                <label htmlFor="state-fornecedor">Estado:</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="cep-and-number">
                                            <div>
                                                <label htmlFor="cep-fornecedor">Cep:</label>
                                                <input type="text"/>
                                            </div>
                                            <input className="number-forn" type="number"  placeholder="num..."/>
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
    )
}

export default CadastroFornecedores