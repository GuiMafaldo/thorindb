import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginComponent'
import Layout from '../src/Layout';
import CadColaboradores from './pages/Cadastros/CadastroColaboradores';
import CadastroDeClients from './pages/Cadastros/CadastroClientes';
import CadastrarProdutos from './pages/Cadastros/CadastroProdutos';
import { GlobalStyle } from './styles';
import SearchProdutos from './pages/Consultas/Produtos';
import SearchClientes from './pages/Consultas/Clientes';
import CadastroFornecedores from './pages/Cadastros/CadastroFornecedores';
import SearchFornecedores from './pages/Consultas/Fornecedores';
import PaginaDeRegistroDeVendas from './pages/Vendas';
import GeraNotaFiscal from './pages/NotaFiscal/GeraNotaFiscal';
import RedefinirSenha from './LoginComponent/redefinirSenha';

const App = () => {
    
    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    {/* AREA DE LOGIN */}
                    <Route path="/" element={<LoginPage />} />
                    <Route path='/redefinirSenha' element={<RedefinirSenha />}/>       
                    {/* PAINEL ADMIN */}
                    <Route path="/initialpage" element={<Layout />} /> 
                    {/*  CADASTROS PRODUTOS/ CLIENTES  E ETC.*/}
                    <Route path='/colaboradores' element={<CadColaboradores />} />
                    <Route path='/cadastrarFornecedores' element={<CadastroFornecedores/>} />
                    <Route path='/cadastrarClientes' element={<CadastroDeClients />} />
                    <Route path='/cadastrarProdutos' element={<CadastrarProdutos />} />
                    <Route path='/notaFiscal' element={<GeraNotaFiscal />} />
                    {/*CONSULTAS CLIENTES PRODUTOS E FORNECEDORES*/}
                    <Route path='/produtos' element={<SearchProdutos />} />
                    <Route path='/clientes' element={<SearchClientes />} />
                    <Route path='/Fornecedor' element={<SearchFornecedores/>} />
                    <Route path='/vendas' element={<PaginaDeRegistroDeVendas />} /> 
                </Routes>
            </Router>   
        </>
    );
};
export default App;
