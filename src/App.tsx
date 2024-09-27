import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginComponent'
import ContainerGeral from '../src/Contrainer';
import CadColaboradores from './pages/Cadastros/CadastroColaboradores';
import CadastroDeClients from './pages/Cadastros/CadastroClientes';
import CadFornecedores from './pages/Cadastros/CadastroFornecedores';
import CadastrarProdutos from './pages/Cadastros/CadastroProdutos';
import { GlobalStyle } from './styles';
import ConsultarProdutos from './pages/Consultas/Produtos';




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
                    <Route path='/consultarProdutos' element={<ConsultarProdutos />} />
                    
                </Routes>
            </Router>   
        </>
    );
};

export default App;
