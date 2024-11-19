import { useState } from "react";
import { useProductsArea } from "../../utils/funcoes/handleProducts";
import { Content, Column, QuickDraft, TextArea, Container, Header, Title, Button, Input } from "./styles";



const PainelAdmin = () => {
  const [lembretes, setLembretes] = useState<string | any>(localStorage.getItem('lembretes') || '');
  const getUserName = localStorage.getItem('userName');
 
  const 
    { 
      isLoading, 
      filteredProducts,
      error
    } = useProductsArea()

    const handleChangeRascunhos = () =>{
     setLembretes(lembretes);
    }

  return (   
            <Container>
                <Header>
                  <h1>Painel Administrador</h1>
                  <div>
                    <p>Opções de tela</p> | <p>Ajuda</p>
                  </div>
                </Header>
                <Content>
                  <Column>
                    <Title>Bem-vindo(a) {getUserName}!</Title>
                    <p>Nós Preparamos algumas Tarefas Rapidas para começar:</p>
                    <Button>Ver Mais...</Button>
                 </Column>
                  <Column>
                    <Title>Check up</Title>
                    <ul>
                      <div className="list-subMenu">
                        <a href="#">Mensagens</a>
                        <a href="#">Emails</a>
                        <a href="#">Transportadora</a>
                        <a style={{textDecoration:"underline",fontWeight:"bold", fontFamily:"Helvetica"}} href="#">Ver mais...</a>
                      </div>
                    </ul>
                  </Column>
                  <Column style={{width: "200px"}}>
                    <Title>Mais ações</Title>
                    <ul>
                      <div className="list-subMenu">
                        <a href="/produtos">Buscar produtos</a>
                        <a href="/clientes">Buscar clientes</a>
                        <a href="/fornecedor">Consultar Fornecedor</a>
                        <a style={{textDecoration:"underline",fontWeight:"bold", fontFamily:"Helvetica"}}>Ver mais...</a>
                      </div>
                    </ul>
                  </Column>
                </Content>
                <Content>
                  <Column style={{ maxWidth: "445px"}}>
                  <table style={{ borderCollapse: "collapse", border: "1px solid black", width: "400px"  }}>
                      <thead>
                        <tr style={{ backgroundColor: "#000", color: "#fff", borderRadius: "5px" }}>
                          <th style={{ fontFamily: "Helvetica", fontWeight: "600" }}>ID</th>
                          <th style={{ fontFamily: "Helvetica", fontWeight: "600" }}>Nome</th>
                          <th style={{ fontFamily: "Helvetica", fontWeight: "600" }}>Quant</th>
                        </tr>
                      </thead>
                    </table>
                    {isLoading ? (
                      <p>Sem informações ainda...</p>
                      ) : 
                        (<p>{error}</p>  
                    )}
                    {filteredProducts.length > 0?(
                      filteredProducts.map((product) => (
                        <table style={{ borderCollapse: "collapse", border: "1px solid black", padding: "6px", width: "400px" }} key={product.id}>
                            <tbody>
                              {product.quantidade <= 5 && (
                                <tr style={{ display: "flex", alignContent: 'flex-start', justifyContent: "space-between", width: "320px", borderRadius: "5px", color: "#000", padding: "8px" }}>
                                  <td style={{ listStyleType: "none", fontWeight: "bold", fontFamily: "Helvetica" }}>{product.id}</td>
                                  <td style={{ listStyleType: "none", fontWeight: "bold", fontFamily: "Helvetica" }}>{product.nome}</td>
                                  <td style={{ listStyleType: "none", fontWeight: "bold", fontFamily: "Helvetica" }}>{product.quantidade}</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                      ))) : (<p>Nenhum produto encontrado</p> )}
                  </Column>
                  <Column style={{ maxWidth: "600px"}}>
                    <Title>Lembretes Rapidos</Title>
                    <QuickDraft>
                      <Input placeholder="Nome do lembrete" value={lembretes} name="nameRascunho" onChange={handleChangeRascunhos} />
                      <TextArea placeholder="O que você está pensando?" />
                      <Button>Salvar Rascunho</Button>
                    </QuickDraft>
                  </Column>
                </Content>
            </Container>   
  );
};
export default PainelAdmin;
