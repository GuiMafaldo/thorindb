import { useState } from "react";
import { useProductsArea } from "../../utils/funcoes/handleProducts";
import { Content, Column, QuickDraft, TextArea, Container, Header, Title, Button, Input } from "./styles";
import SalesChart from "../Dashboard";
import salesData from "../../utils/listas/listaVendas";

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
                </Header>
                <Content style={{justifyContent: 'center'}}>
                  <Column style={{maxWidth: '500px', maxHeight: '400px'}}>
                        <Title>Bem-vindo(a) {getUserName}!</Title>
                        <p style={{fontFamily: 'Helvetica', fontSize: '16px',fontWeight: 'bold',margin: '6px 0'}}>Nós Preparamos algumas Tarefas Rapidas para começar:</p>
                        <p style={{fontFamily: 'Helvetica', fontSize: '16px',margin: '10px 0'}}>E-mails</p>
                        <p style={{fontFamily: 'Helvetica', fontSize: '16px',margin: '10px 0'}}>Mensagens</p>
                        <p style={{fontFamily: 'Helvetica', fontSize: '16px',margin: '10px 0'}}>Atualizações</p>
                        <Button>Ver Mais...</Button>
                  </Column>
                  <Column style={{maxWidth: '760px', maxHeight: '420px', padding: '20px'}}>
                    <Title>Grafico de vendas</Title>
                    <SalesChart salesData={salesData} />
                  </Column> 
                  <Column style={{ maxWidth: "300px", maxHeight: '200px'}}>
                    <Title>Lembretes Rapidos</Title>
                    <QuickDraft>
                      <Input placeholder="Nome do lembrete" value={lembretes} name="nameRascunho" onChange={handleChangeRascunhos} />
                      <TextArea placeholder="O que você está pensando?" />
                      <Button>Salvar Rascunho</Button>
                    </QuickDraft>
                  </Column>            
                </Content>
                {/* <Content>                
                  <Column style={{width: "200px"}}>
                      <Title>Links rapidos</Title>
                      <ul>
                        <div className="list-subMenu">
                          <a href="/produtos">Buscar produtos</a>
                          <a href="/clientes">Buscar clientes</a>
                          <a href="/fornecedor">Consultar Fornecedor</a>
                          <a href="/transportadora">Consultar Transportadora</a>
                          <a style={{textDecoration:"underline",fontWeight:"bold", fontFamily:"Helvetica"}}>Ver mais...</a>
                        </div>
                      </ul>
                    </Column>
                </Content> */}
                <Content style={{justifyContent: 'center'}}>
                  <Column >
                  <table style={{ borderCollapse: "collapse", border: "1px solid black", width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#000", color: "#fff" }}>
                        <th style={{ fontFamily: "Helvetica", fontWeight: "600", padding: "8px" }}>ID</th>
                        <th style={{ fontFamily: "Helvetica", fontWeight: "600", padding: "8px" }}>Nome</th>
                        <th style={{ fontFamily: "Helvetica", fontWeight: "600", padding: "8px" }}>Quant</th>
                        <th style={{ fontFamily: "Helvetica", fontWeight: "600", padding: "8px" }}>Descrição</th>
                        <th style={{ fontFamily: "Helvetica", fontWeight: "600", padding: "8px" }}>Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          
                          <tr key={product.id} style={{ padding: "8px", textAlign: "center" }}>
                            {product.quantity <= 5 ?(
                              <>
                                  <td style={{ padding: "8px", fontFamily: "Helvetica", fontWeight: "bold" }}>{product.id}</td>
                                  <td style={{ padding: "8px", fontFamily: "Helvetica", fontWeight: "bold" }}>{product.name}</td>
                                  <td style={{ padding: "8px", fontFamily: "Helvetica", fontWeight: "bold" }}>{product.quantity}</td>
                                  <td style={{ padding: "8px", fontFamily: "Helvetica", fontWeight: "bold" }}>{product.description}</td>
                                  <td style={{ padding: "8px", fontFamily: "Helvetica", fontWeight: "bold" }}>R$: {product.price.toFixed(2)}</td>
                              </>
                                ): ('')}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} style={{ textAlign: "center" }}>Nenhum produto encontrado</td>
                        </tr>
                    )}
                    </tbody>
                  </table>
                  </Column>
                </Content>
            </Container>   
  );
};
export default PainelAdmin;
