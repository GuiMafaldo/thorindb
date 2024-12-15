import Layout from "../../Layout"

import { useState } from "react"

import CadastroColaboradores from "../../pages/Colaborador/Cadastro"
import DeleteOrRedenColaborador from "../../pages/Colaborador/Att-and-del"
import HandleColaborador from "../../pages/Colaborador/Consulta"

const CadastrarColaborador = () => <CadastroColaboradores />
const AtualizaColaborador = () => <DeleteOrRedenColaborador/>
const ConsultaColaborador = () => <HandleColaborador />

const RenderColaboradoresPage = () => {
    const [currentPages, setCurrentPages] = useState<string>("colaborador")

    const handlePageVisible = (page: string) => {
        setCurrentPages(page)
    }

    const renderPage = () => {
        switch (currentPages) {
            case "colaborador":
                return <CadastrarColaborador />  
            case "consultar":
                return <ConsultaColaborador/>
            default:
                return <p>Nenhuma página encontrada</p>
        }
    }
    return (
        <Layout>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", position:"relative"}}>
                <div style={{display: "flex", flexDirection: "row", gap: "10px", marginBottom: "-80px", padding: "20px", position:"absolute", top:"90px", left:"550px"}}>
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
                        }} onClick={() => handlePageVisible("colaborador")}>Cadastrar Colaborador</button> 
                        <span style={{fontSize:"1em", fontFamily:"Helvetica", marginLeft: "15px", marginTop: "8px"}}>|</span>
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
                        }} onClick={() => handlePageVisible("consultar")}>Gerenciar Colaboradores</button>
                </div>
                {renderPage()}          
            </section>
        </Layout>
    )
}

export default RenderColaboradoresPage