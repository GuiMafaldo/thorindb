import React from "react";
import { DivGeral, SubMenuOpen } from "./styles";
import {  useState } from 'react'
import InitialPage from "../Header";
import { Link } from "react-router-dom";

function SideBarItens () {
    const [menuCad, setMenuCad] = useState(false)
    const [menuEstoque, setMenuEstoque] = useState(false)
    const [estrut, setEstrut] = useState(false)
    const [vendas, setVendas] = useState(false)
    const areaDeTrabalho = {
        initialPage: "Pagina inicial",
        cadastro: "Cadastro",
        nf: "Nota fiscal",
        pedidoDeVenda: "Pedidos de venda",
        estruturas: "Estruturas",
        estoque: "Estoque"

    }
    return(
        <DivGeral id="Aside">
            <img src="https://via.placeholder.com/220x220" alt="My photo" />
            <nav>
            <h3>Central KepB</h3>
                <ul>
                    <li>
                        <a target="initialPage" href="Pagina inicial">{areaDeTrabalho.initialPage}</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setMenuCad(!menuCad)}>
                            {areaDeTrabalho.cadastro}
                        </a>  
                        {menuCad ? (
                            <SubMenuOpen className="is-open">
                                <ul>
                                    <li className="list-subMenu">
                                        <Link className="subMenu" to="/colaboradores">Cadastrar Colaborador</Link>
                                    </li>
                                    <li className="list-subMenu">
                                        <Link className="subMenu" to="/client">Cadastrar Clientes</Link>
                                    </li>
                                    <li className="list-subMenu">
                                        <Link className="subMenu" to="/fornecedores">Cadastrar Fornecedor</Link>
                                    </li>
                                    <li className="list-subMenu">
                                        Cadastrar Produtos
                                    </li>
                                </ul>
                            </SubMenuOpen>
                        ) : ''}
                        
                    </li>
                    <li>
                        <a onClick={() => setVendas(!vendas)} href="#">
                            {areaDeTrabalho.nf}
                        </a>
                        {vendas ? (
                            <SubMenuOpen className="is-open">
                            <ul>
                                <li className="list-subMenu">
                                    Nota de Entrada
                                </li>
                                <li className="list-subMenu">
                                    Nota de Saida
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
                    <li>
                        <a onClick={()=> setEstrut(!estrut)} href="#">
                            {areaDeTrabalho.estruturas}
                        </a>
                        {estrut ? (
                            <SubMenuOpen>
                            <ul>
                                <li className="list-subMenu">
                                    Montagem de Espelhos
                                </li>
                                <li className="list-subMenu">
                                    Montagem de Barrica
                                </li>
                                <li className="list-subMenu">
                                    Montagem de Reparos
                                </li>
                            </ul>
                        </SubMenuOpen>
                        ): ''}
                        
                    </li>
                </ul>
            </nav>
        </DivGeral>

    )
}

export default SideBarItens;