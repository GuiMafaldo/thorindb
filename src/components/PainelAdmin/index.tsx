import { useState } from "react";
import { useProductsArea } from "../../utils/handleProducts";
import { Content, Column, QuickDraft, TextArea, Container, Header, Title, Button, Input } from "./styles";


const PainelAdmin = () => {
  const [lembretes, setLembretes] = useState<String | any>(localStorage.getItem('lembretes') || '');
  const getUserName = localStorage.getItem('userName');
 
  const 
    {
      searchTerm, 
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

                  <Column>
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
                  <Column style={{ maxWidth: "435px"}}>
                    <Title style={{ display: "flex", justifyContent:"left"}}>Lista de Produtos a Repor</Title>
                    <th style={{borderCollapse:"collapse", 
                                              border:"1px solid black", 
                                              padding:"10px", 
                                              display:" flex", 
                                              justifyContent:"space-between", 
                                              width:"400px",
                                              backgroundColor: "#000",
                                              borderRadius:"5px",
                                              color:"#fff",
                                              }}>
                            <td style={{fontFamily:'Helvetica', fontWeight:"600"}}>ID</td>
                            <td style={{fontFamily:'Helvetica', fontWeight:"600"}}>Nome</td>
                            <td style={{fontFamily:'Helvetica', fontWeight:"600"}}>Quant</td>
                      </th>
                    {isLoading ? (
                      <p>Sem informações ainda...</p>
                      ) : 
                        (<p>{error}</p>  
                    )}
                    {filteredProducts.length > 0?(
                      filteredProducts.map((product) => (
                        <table style={{borderCollapse: "collapse", border: "1px solid black", padding: "10px", width: "400px"}} key={product.id}>                         
                          {product.quantidade  <= 5? (
                                <div>   
                                  <tr style={{display:"flex", justifyContent:"space-between", width:"360px", borderRadius:"5px", color:"#000", padding:"4px"}}>
                                    <td style={{listStyleType:"none", fontWeight:"bold", fontFamily:"Helvetica"}}>{product.id}</td>
                                    <td style={{listStyleType:"none", fontWeight:"bold", fontFamily:"Helvetica"}}>{product.nome}</td>
                                    <td style={{listStyleType:"none", fontWeight:"bold", fontFamily:"Helvetica"}}>{product.quantidade}</td>
                                  </tr>
                                </div>
                          ): ("")}
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
