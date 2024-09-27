import { Content, Column, QuickDraft, TextArea, Container, Header, Title, Button, Input } from "./styles";
import { useState, useEffect } from "react";
import { getClientes, getProdutos } from "../../api/api";
import { Cliente } from "../../utils/cliente";
import { Produto } from "../../utils/products";
import { ContainerPainel, SectionContent } from "./styles";

const PainelAdmin = () => {
  const [filteredResults, setFilteredResults] = useState<Produto[] | Cliente[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<"produtos" | "clientes">("produtos");

  // Função para abrir/fechar modal
  const handleModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  // Função para buscar clientes ou produtos com base no tipo de busca
  const searchModalContent = async () => {
    setIsLoading(true);
    setError(null);
    try {
      let res: Produto[] | Cliente[];
      if (searchType === "produtos") {
        res = await getProdutos(searchTerm);
      } else {
        res = await getClientes(searchTerm);
      }
      setFilteredResults(res); // Atualiza os resultados filtrados
    } catch (err) {
      setError("Erro ao buscar dados");
    } finally {
      setIsLoading(false);
    }
  };

  // Manipula o envio do formulário de pesquisa
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchModalContent(); // Chama a função de busca ao submeter o formulário
  };

  // Manipula a mudança no campo de busca
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

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
              <a href="/buscarProdutos">Buscar produtos</a>
              <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleModal}>
                Buscar clientes ou produtos
              </a>
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

      {/* Modal de busca */}
      <div className={showModal ? "modal-content-section open-modal" : "close-modal"}>
        <SectionContent>
          <div className="title-and-close">
            <h1>Buscar {searchType === "produtos" ? "Produtos" : "Clientes"}</h1>
            <button onClick={handleModal}>x</button>
          </div>

          <div className="toggle-search">
            {/* Botões para alternar entre produtos e clientes */}
            <button onClick={() => setSearchType("produtos")}>Produtos</button>
            <button onClick={() => setSearchType("clientes")}>Clientes</button>
          </div>

          <div className="search-client">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={`Buscar ${searchType}...`}
                value={searchTerm}
                onChange={handleChange}
              />
              <button type="submit">Buscar</button>
            </form>
          </div>

          <ContainerPainel>
            <div className="search-form">
              {isLoading ? (
                <p>Carregando...</p>
              ) : filteredResults.length > 0 ? (
                filteredResults.map((item: Produto | Cliente) => (
                  <div className="modal-content" key={item.id}>
                    <p>{item.nome}</p>
                    {searchType === "produtos" && <p>Preço: {(item as Produto).preco}</p>}
                    {searchType === "clientes" && (
                      <>
                        <p>Email: {(item as Cliente).email}</p>
                        <p>Telefone: {(item as Cliente).telefone}</p>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <p>Nenhum {searchType} encontrado</p>
              )}
            </div>
          </ContainerPainel>
        </SectionContent>
      </div>
    </Container>
  );
};

export default PainelAdmin;
