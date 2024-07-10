import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './initialPage'
import ContainerGeral from '../src/Contrainer';
import CadColaboradores from './pages/Cad_col';
import CadastroDeClients from './pages/Cad_client';
import CadFornecedores from './pages/Cad_fornecedores';



const App = () => {
    
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/initialpage" element={<ContainerGeral />} />
                    <Route path='/colaboradores' element={<CadColaboradores />} />
                    <Route path='/client' element={<CadastroDeClients />} />
                    <Route path='/fornecedores' element={<CadFornecedores/>} />
                    
                </Routes>
            </Router>
    );
};

export default App;
