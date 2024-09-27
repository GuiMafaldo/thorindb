import { Link } from "react-router-dom"
import { ContainerGrid, FirtMenuCad, GridLayout } from "./styles"

const CadFornecedores = () => {
    return(
            <ContainerGrid>
                    <div className="title-section">
                        <h2>Cadastro de empresas</h2>
                    </div>
                <GridLayout>
                        <FirtMenuCad>
                            <h3>Dados Empresa</h3>
                            <form>
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
                                <div>
                                    <label htmlFor="email-empresa">Email:</label>
                                    <input type="text"  />
                                </div>
                                <div>
                                    <label htmlFor="tel-empresa">Telefone:</label>
                                    <input type="text" />
                                </div>
                            </form>
                        </FirtMenuCad>
                        <FirtMenuCad>
                            <h3>Dados endereço</h3>
                            <form>
                                <div>
                                    <label htmlFor="rua-fornecedor">Logradouro:</label>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <label htmlFor="city-fornecedor">Cidade:</label>
                                    <input type="text"/>
                                </div>
                                <label htmlFor="state-fornecedor">Estado:</label>
                                <input type="text"/>
                                <div className="cep-and-number">
                                    <div>
                                        <label htmlFor="cep-fornecedor">Cep:</label>
                                        <input type="text"/>
                                    </div>
                                    <input className="number-forn" type="text"  placeholder="num..."/>
                                </div>
                                <textarea placeholder="complemento">Informações adicionais</textarea>
                            </form>
                            <button type="submit">Cadastrar</button>

                            <Link to="/initialpage">Voltar ao menu</Link>
                        </FirtMenuCad>
                </GridLayout>
            </ContainerGrid>
    )
}

export default CadFornecedores