
import Layout from "../../Layout"

import { useState } from "react"
import SearchProdutos from "../../pages/Produtos/Consulta"
import CadastrarProduto from "../../pages/Produtos/Cadastro"

const SearchProductsComponent = () => <SearchProdutos />
const CadastrarProdutoComponent = () => <CadastrarProduto />
const AtualizarProdutoComponent = () => <div>Atualizar | deletar Produtos</div>

const RenderPagesWithDinamicRoutes = () => {
    const [currentPages, setCurrentPages] = useState<string>("produtos")

    const handlePageVisible = (page: string) =>{
        setCurrentPages(page)
    }

    const renderPage = () => {
        switch(currentPages){
            case "produtos":
                return <SearchProductsComponent />
            case "cadastrarProduto":
                return <CadastrarProdutoComponent /> 
            case "atualizarProduto":
                return <AtualizarProdutoComponent />
            default:
                return <p>Nenhuma página encontrada</p>
        }
    }
    return(
        <Layout>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90vh", marginTop: "70px"}}>
                <div style={{display: "flex", flexDirection: "row", gap: "10px", marginBottom: "-110px", padding: "40px"}}>
                    <button 
                        style={{
                            border:"none", 
                            backgroundColor: "#fff", 
                            fontFamily:"Helvetica", 
                            fontSize:"1em", 
                            color:"#000", 
                            padding:"10px 20px", 
                            borderRadius:"5px", 
                            cursor:"pointer", 
                            fontWeight: "bold"
                        }} onClick={() => handlePageVisible("produtos")}>Procurar Produtos</button> 
                        <span style={{fontSize:"1em", fontFamily:"Helvetica", marginLeft: "-25px", marginTop: "8px"}}>|</span>
                    <button 
                        style={{
                            border:"none", 
                            backgroundColor: "#fff", 
                            fontFamily:"Helvetica", 
                            fontSize:"1em", 
                            color:"#000", 
                            padding:"10px 20px", 
                            borderRadius:"5px", 
                            cursor:"pointer", 
                            fontWeight: "bold"
                        }} onClick={() => handlePageVisible("cadastrarProduto")}>Cadastrar Produto</button>
                        <span style={{fontSize:"1em", fontFamily:"Helvetica", marginLeft: "-25px", marginTop: "8px"}}>|</span>

                    <button 
                        style={{
                            border:"none", 
                            backgroundColor: "#fff", 
                            fontFamily:"Helvetica", 
                            fontSize:"1em", 
                            color:"#000", 
                            padding:"10px 20px", 
                            borderRadius:"5px", 
                            cursor:"pointer", 
                            fontWeight: "bold"
                        }}
                        onClick={() => handlePageVisible("atualizarProduto")}>Atualizar | Deletar Produto</button>
                </div>
                {renderPage()}          
            </section>
        </Layout>
    )
}

export default RenderPagesWithDinamicRoutes