import { DivGeral, SubMenuOpen } from "./styles";
import {  useState } from 'react'
import { Link } from "react-router-dom";
import { Produto } from "../../services/Interfaces/products";

function SideBarItens () {
    const [menuCad, setMenuCad] = useState<Boolean>(false)
    const [menuEstoque, setMenuEstoque] = useState<Boolean>(false)
    const [estrut, setEstrut] = useState<Boolean>(false)
    const [vendas, setVendas] = useState<Boolean>(false)
    const [fornecedor, setFornecedor] = useState<Boolean>(false)
    const [produtoVenda, setProdutoVenda] = useState<Produto[]>([])
    const [produto, setProduto] = useState<Boolean>(false)
    const areaDeTrabalho = {
        initialPage: "Pagina inicial",
        produto: "Produtos",
        clientes: "Clientes",
        nf: "Nota fiscal",
        pedidoDeVenda: "Pedidos de venda",
        estoque: "Estoque",
        fornecedor: "Fornecedor",
        vendas: "Vendas"

    }
    return(
        <DivGeral id="Aside">
            <img src="/image/logoKeppler.png" alt="My photo" />
            <nav>
            <h3>Central KepB</h3>
                <ul>
                    <li>
                        <Link to="/initialpage">{areaDeTrabalho.initialPage}</Link>
                    </li>
                    <li>
                        <Link to="" onClick={() => setMenuCad(!menuCad)}>
                            {areaDeTrabalho.produto}
                        </Link>  
                        {menuCad ? (
                            <SubMenuOpen className="is-open">
                                <ul>
                                    <li className="list-subMenu">
                                        <Link className="subMenu" to="/produtos">Buscar produtos</Link>
                                    </li>
                                    <li className="list-subMenu">
                                        <Link className="subMenu" to="/cadastrarProdutos">Cadastrar produtos</Link>
                                    </li>
                                </ul>
                            </SubMenuOpen>
                        ) : ''}
                        
                    </li>
                    <li>
                        <Link onClick={()=> setEstrut(!estrut)} to="#">
                            {areaDeTrabalho.clientes}
                        </Link>
                        {estrut ? (
                            <SubMenuOpen>
                            <ul>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/clientes">Buscar clientes</Link>
                                </li>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/cadastrarClientes">Cadastrar clientes</Link>
                                </li>
                            </ul>
                        </SubMenuOpen>
                        ): ''}
                        
                    </li>
                    <li>
                        <Link onClick={() => setProduto(!produto)} to="#">
                            {areaDeTrabalho.vendas}
                        </Link>
                        {produto ? (
                            <SubMenuOpen className="is-open">
                            <ul>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/vendas">Vendas</Link>
                                </li>
                            </ul>
                        </SubMenuOpen>
                        ): ''}      
                        
                    </li>
                    <li>
                        <Link onClick={() => setVendas(!vendas)} to="#">
                            {areaDeTrabalho.nf}
                        </Link>
                        {vendas ? (
                            <SubMenuOpen className="is-open">
                            <ul>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/notaFiscal">Gerar Nota Saida</Link>
                                </li>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/notaEntrada">Lançar Nota de Entrada</Link>
                                </li>
                                <li className="list-subMenu">
                                    Lançar Nota de Devolução
                                </li>
                                <li className="list-subMenu">
                                   Lançar Nota de Garantia
                                </li>
                            </ul>
                        </SubMenuOpen> 
                        ): ''}
                    </li>
                    <li className="list-subMenu">
                        <Link onClick={() => setFornecedor(!fornecedor)} to="">
                            {areaDeTrabalho.fornecedor}
                        </Link>
                        {fornecedor ? (
                            <SubMenuOpen>
                            <ul>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/cadastrarFornecedores">Cadastrar Fornecedor</Link>
                                </li>
                                <li className="list-subMenu">
                                    <Link className="subMenu" to="/fornecedor">Pesquisar Fornecedor</Link>
                                </li>
                                
                            </ul>
                        </SubMenuOpen>
                        ): ''}
                    </li>
                    <li>
                        <Link onClick={() => setMenuEstoque(!menuEstoque)} to="">
                            {areaDeTrabalho.estoque}
                        </Link>
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