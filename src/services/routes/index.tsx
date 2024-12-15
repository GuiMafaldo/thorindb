import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import  Layout  from '../../Layout';
import RenderPagesWithDinamicRoutes from '../../components/DinamicPageProduct';
import LoginPage from '../../components/LoginComponent';
import CadastroClientes from '../../pages/Clientes/Cadastro';
import SearchClientes from '../../pages/Clientes/Consulta';
import CadastroFornecedores from '../../pages/Fornecedor/Cadastro';
import SearchFornecedores from '../../pages/Fornecedor/Consulta';
import GeraNotaFiscal from '../../pages/NotaFiscal/GeraNotaFiscal';
import RenderColaboradoresPage from "../../components/DinamicPageColaborador";

const RenderRoutes =  () => {
    return(
        <>
            <Router>
                <Routes>
                    {/* AREA DE LOGIN */}
                    <Route path="/" element={<LoginPage />} />      
                    {/* PAINEL ADMIN */}
                    <Route path="/dashboard" element={<Layout />} /> 
                    {/*  CADASTROS PRODUTOS/ CLIENTES  E ETC.*/}
                    <Route path='/cadastroFornecedore' element={<CadastroFornecedores/>} />
                    <Route path='/cadastroCliente' element={<CadastroClientes />} />
                    <Route path='/notaFiscal' element={<GeraNotaFiscal />} />
                    {/* CONSULTAS CLIENTES PRODUTOS E FORNECEDORES */}

                    <Route path='/clientes' element={<SearchClientes />} />
                    <Route path='/Fornecedor' element={<SearchFornecedores/>} />
                    <Route path="/colaborador" element={<RenderColaboradoresPage />} />
                    <Route path='/produtos' element={<RenderPagesWithDinamicRoutes />} />
                </Routes>
            </Router>
        
        </>
    )
}
export default  RenderRoutes