import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginComponent'
import ContainerGeral from '../src/Contrainer';
import CadColaboradores from './pages/Cadastros/CadastroColaboradores';
import CadastroDeClients from './pages/Cadastros/CadastroClientes';
import CadFornecedores from './pages/Cadastros/CadastroFornecedores';
import CadastrarProdutos from './pages/Cadastros/CadastroProdutos';
import { GlobalStyle } from './styles';
import SearchProdutos from './pages/Consultas/Produtos';
import SearchClientes from './pages/Consultas/Clientes';
import EmissaoNotaFiscal from './pages/NotaFiscal';




const App = () => {
    
    return (
        
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/initialpage" element={<ContainerGeral />} />
                    
                    {/*  CADASTROS PRODUTOS/ CLIENTES  E ETC.*/}
                    <Route path='/colaboradores' element={<CadColaboradores />} />
                    <Route path='/fornecedores' element={<CadFornecedores/>} />
                    <Route path='/cadastrarCliente' element={<CadastroDeClients />} />
                    <Route path='/cadastrarProdutos' element={<CadastrarProdutos />} />
                    
                    {/*CONSULTAS CLIENTES PRODUTOS*/}
                    <Route path='/consultarProdutos' element={<SearchProdutos />} />
                    <Route path='/buscarClientes' element={<SearchClientes />} />

                    {/*EMISSAO DE NOTA FISCAL*/}
                    <Route path='/notaFiscal' element={<EmissaoNotaFiscal />} />
                    
                </Routes>
            </Router>   
        </>
    );
};

export default App;
