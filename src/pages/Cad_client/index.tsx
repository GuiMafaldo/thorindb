
import { Link } from 'react-router-dom'
import { ContainerGeral, FormList } from "./styles"

const CadastroDeClients = () => {
    return(
        <ContainerGeral>
            <FormList>
                <div className='title-and-back'>
                    <h3>Cadastro de Clientes</h3>
                    <Link className='link-back' to="/initialpage">Voltar ao menu</Link>
                </div>
                <form>
                    <div>
                        <label htmlFor="nome-client">Nome:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="tel-client">Tel:</label>
                        <input className='num-class-tel' type="number" />
                    </div>
                    <div>
                        <label htmlFor="id">Cliente Id:</label>
                        <input className='num-class-id' type="number" />
                    </div>
                    <div>
                        <h3>Dados de entrega</h3>
                        <div>
                            <label htmlFor="end-client">Endereço:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="city-client">Cidade:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="cep-client">Cep:</label>
                            <input className='num-class-cep' type="number" />
                        </div>
                    </div>
                    
                </form>
            </FormList>
        </ContainerGeral>
    )
}

export default CadastroDeClients