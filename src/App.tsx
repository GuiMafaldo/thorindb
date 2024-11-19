import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginComponent'
import Layout from '../src/Layout';

import CadastroDeClients from './pages/Clientes/Cadastro';
import { GlobalStyle } from './styles';
import SearchClientes from './pages/Clientes/Consulta';
import CadastroFornecedores from './pages/Fornecedor/Cadastro';
import SearchFornecedores from './pages/Fornecedor/Consulta';
import GeraNotaFiscal from './pages/NotaFiscal/GeraNotaFiscal';
import CadastroColaboradores from './pages/Colaborador/Cadastro';
import RenderPagesWithDinamicRoutes from './components/RenderPages';

const App = () => {
    
    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    {/* AREA DE LOGIN */}
                    <Route path="/" element={<LoginPage />} />      
                    {/* PAINEL ADMIN */}
                    <Route path="/dashBoard" element={<Layout />} /> 
                    {/*  CADASTROS PRODUTOS/ CLIENTES  E ETC.*/}
                    <Route path='/cadastroColaborador' element={<CadastroColaboradores />} />
                    <Route path='/cadastroFornecedore' element={<CadastroFornecedores/>} />
                    <Route path='/cadastroCliente' element={<CadastroDeClients />} />
                    <Route path='/notaFiscal' element={<GeraNotaFiscal />} />
                    {/*CONSULTAS CLIENTES PRODUTOS E FORNECEDORES*/}
                    <Route path='/clientes' element={<SearchClientes />} />
                    <Route path='/Fornecedor' element={<SearchFornecedores/>} />
                    <Route path='/produtos' element={<RenderPagesWithDinamicRoutes />} />
                </Routes>
            </Router>   
        </>
    );
};
export default App;
