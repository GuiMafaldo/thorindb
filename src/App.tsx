import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginComponent'
import Layout from '../src/Layout';
import CadColaboradores from './pages/Cadastros/CadastroColaboradores';
import CadastroDeClients from './pages/Cadastros/CadastroClientes';
import CadastrarProdutos from './pages/Cadastros/CadastroProdutos';
import { GlobalStyle } from './styles';
import SearchProdutos from './pages/Consultas/Produtos';
import SearchClientes from './pages/Consultas/Clientes';
import EmissaoNotaFiscal from './pages/NotasFiscais/NotaSaida';
import NotaFiscal from './pages/NotasFiscais/NotaEntrada';
import CadastroFornecedores from './pages/Cadastros/CadastroFornecedores';
import SearchFornecedores from './pages/Consultas/Fornecedores';
import PaginaDeRegistroDeVendas from './pages/Vendas';




const App = () => {
    
    return (
        
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    {/* AREA DE LOGIN */}
                    <Route path="/" element={<LoginPage />} />
                    
                    {/* PAINEL ADMIN */}
                    <Route path="/initialpage" element={<Layout />} />
                    
                    {/*  CADASTROS PRODUTOS/ CLIENTES  E ETC.*/}
                    <Route path='/colaboradores' element={<CadColaboradores />} />
                    <Route path='/cadastrarFornecedor' element={<CadastroFornecedores/>} />
                    <Route path='/cadastrarCliente' element={<CadastroDeClients />} />
                    <Route path='/cadastrarProdutos' element={<CadastrarProdutos />} />
                    
                    {/*CONSULTAS CLIENTES PRODUTOS E FORNECEDORES*/}
                    <Route path='/consultarProdutos' element={<SearchProdutos />} />
                    <Route path='/buscarClientes' element={<SearchClientes />} />
                    <Route path='/buscarFornecedor' element={<SearchFornecedores/>} />
                    <Route path='/vendas' element={<PaginaDeRegistroDeVendas />} />

                    {/*EMISSAO DE NOTA FISCAL*/}
                    <Route path='/notaFiscal' element={<EmissaoNotaFiscal />} />
                    <Route path='/notaEntrada' element={<NotaFiscal />} />
                
                    
                </Routes>
            </Router>   
        </>
    );
};

export default App;
