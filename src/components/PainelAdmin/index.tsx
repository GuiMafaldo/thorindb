import { Content, Column, QuickDraft, TextArea, Container, Header, Title, Button, Input } from "./styles";

const PainelAdmin = () => {
  const getUserName = localStorage.getItem('userName');

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
                    <p>Nós reunimos alguns links para você começar:</p>
                    <Button>Personalize seu site</Button>
                  </Column>

                  <Column>
                    <Title>Próximos passos</Title>
                    <ul>
                      <div className="list-subMenu">
                        <a href="#">Mensagens</a>
                        <a href="#">Emails</a>
                        <a href="#">Transportadora</a>
                        <a href="#">Ver mais</a>
                      </div>
                    </ul>
                  </Column>

                  <Column>
                    <Title>Mais ações</Title>
                    <ul>
                      <div className="list-subMenu">
                        <a href="/consultarProdutos">Buscar produtos</a>
                        <a href="/buscarClientes">Buscar clientes</a>
                        <a href="/consultarEstoque">Consultar Estoque</a>
                        <a href="/consultarSaidas">Consultar saídas</a>
                      </div>
                    </ul>
                  </Column>
                </Content>

                <Content>
                  <Column>
                    <Title>Status do diagnóstico</Title>
                    <p>Sem informações ainda...</p>
                  </Column>

                  <Column>
                    <Title>Rascunho rápido</Title>
                    <QuickDraft>
                      <Input placeholder="Título" />
                      <TextArea placeholder="O que você está pensando?" />
                      <Button>Salvar como rascunho</Button>
                    </QuickDraft>
                  </Column>
                </Content>
            </Container>
         

       
  );
};

export default PainelAdmin;
