import { DivGeral, SubMenuOpen } from "./styles";
import {  useState } from 'react'
import { Link } from "react-router-dom";

function SideBarItens () {
    const [menuCad, setMenuCad] = useState<Boolean>(false)
    const [menuEstoque, setMenuEstoque] = useState<Boolean>(false)
    const [estrut, setEstrut] = useState<Boolean>(false)
    const [vendas, setVendas] = useState<Boolean>(false)
    const [fornecedor, setFornecedor] = useState<Boolean>(false)
    const areaDeTrabalho = {
        initialPage: "Pagina inicial",
        produto: "Produtos",
        clientes: "Clientes",
        nf: "Nota fiscal",
        pedidoDeVenda: "Pedidos de venda",
        estoque: "Estoque",
        fornecedor: "Fornecedor"

    }
    return(
        <DivGeral id="Aside">
            <img src="/image/logoKeppler.png" alt="My photo" />
            <nav>
            <h3>Central KepB</h3>
                <ul>
                    <li>
                        <a href="/initialpage">{areaDeTrabalho.initialPage}</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setMenuCad(!menuCad)}>
                            {areaDeTrabalho.produto}
                        </a>  
                        {menuCad ? (
                            <SubMenuOpen className="is-open">
                                <ul>
                                    <li className="list-subMenu">
                                        <Link className="subMenu" to="/consultarProdutos">Buscar produtos</Link>
                                    </li>
                                    <li className="list-subMenu">
                                        <Link className="subMenu" to="/cadastrarProdutos">Cadastrar produtos</Link>
                                    </li>
                                </ul>
                            </SubMenuOpen>
                        ) : ''}
                        
                    </li>
                    <li>
                        <a onClick={()=> setEstrut(!estrut)} href="#">
                            {areaDeTrabalho.clientes}
                        </a>
                        {estrut ? (
                            <SubMenuOpen>
                            <ul>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/buscarClientes">Buscar clientes</Link>
                                </li>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/cadastrarCliente">Cadastrar clientes</Link>
                                </li>
                            </ul>
                        </SubMenuOpen>
                        ): ''}
                        
                    </li>
                    <li>
                        <a onClick={() => setVendas(!vendas)} href="#">
                            {areaDeTrabalho.nf}
                        </a>
                        {vendas ? (
                            <SubMenuOpen className="is-open">
                            <ul>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/notaFiscal">Nota fiscal</Link>
                                </li>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/notaEntrada">Nota de Entrada</Link>
                                </li>
                                <li className="list-subMenu">
                                    Nota de Devolução
                                </li>
                                <li className="list-subMenu">
                                    Nota de Garantia
                                </li>
                            </ul>
                        </SubMenuOpen> 
                        ): ''}
                    </li>
                    <li className="list-subMenu">
                        <a onClick={() => setFornecedor(!fornecedor)} href="#">
                            {areaDeTrabalho.fornecedor}
                        </a>
                        {fornecedor ? (
                            <SubMenuOpen>
                            <ul>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/cadastrarFornecedor">Cadastrar Fornecedor</Link>
                                </li>
                                <li className="list-subMenu">
                                    Pesquisar Fornecedores
                                </li>
                                
                            </ul>
                        </SubMenuOpen>
                        ): ''}
                    </li>
                    <li>
                        <a onClick={() => setMenuEstoque(!menuEstoque)} href="#">
                            {areaDeTrabalho.estoque}
                        </a>
                        {menuEstoque ? (
                            <SubMenuOpen>
                            <ul>
                                <li className="list-subMenu">
                                    Produtos
                                </li>
                                <li className="list-subMenu">
                                    Endereços
                                </li>
                                <li className="list-subMenu">
                                    Prateleiras
                                </li>
                                <li className="list-subMenu">
                                    Paletes
                                </li>
                            </ul>
                        </SubMenuOpen>
                        ) : ''}
                        
                    </li>
                    
                </ul>
            </nav>
        </DivGeral>

    )
}

export default SideBarItens;