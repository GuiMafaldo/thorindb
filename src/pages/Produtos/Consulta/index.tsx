import { useProductsArea } from '../../../utils/funcoes/handleProducts'

import { ContainerContent, TableData, TableHead, TableHeader, TableRow, TableWrapper } from "./styles";


const SearchProdutos =  () => {
const {
  searchTerm,
  error,
  isLoading,
  filteredProducts,
  handleChangeProducts
} = useProductsArea()

  return (
      <ContainerContent>
          <TableWrapper>
            <h1>Consultar produtos</h1>
              <div>
                  <input
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={searchTerm}
                    onChange={handleChangeProducts}
                  />
                  <button onClick={() => handleChangeProducts({target:  { value: searchTerm }})}>Buscar</button>
              </div>
              {isLoading ? (
                  <p>Carregando...</p>
              ) : error ? (
                  <p>{error}</p>
              ) : (
                  <table>
                  <TableHead>
                      <TableRow>
                      <TableHeader>ID</TableHeader>
                      <TableHeader>Nome</TableHeader>
                      <TableHeader>Preço</TableHeader>
                      <TableHeader>Quantidade</TableHeader>
                      <TableHeader>Descrição</TableHeader>
                      <TableHeader>Categoria</TableHeader>
                      </TableRow>
                  </TableHead>
                  <tbody>
                    {isLoading ? (
                      <p>Carregando...</p>
                    ): (
                      <p>{error}</p>
                    )}
                      {filteredProducts.length > 0 ? (
                      filteredProducts.map((produto) => (
                          <TableRow key={produto.id}>
                            <TableData>{produto.id}</TableData>
                            <TableData>{produto.nome}</TableData>
                            <TableData>R$: {produto.preco.toFixed(4)}</TableData>
                            <TableData>{produto.quantidade}</TableData>
                            <TableData>{produto.descricao}</TableData>
                            <TableData>{produto.categoria}</TableData>
                          </TableRow>
                      ))
                      ) : (
                      <TableRow>
                          <TableData colSpan={9}>Nenhum produto encontrado</TableData>
                      </TableRow>
                      )}
                  </tbody>
                  </table>
              )}
              <a href="/dashBoard">Voltar</a>
              </TableWrapper>
      </ContainerContent> 
  );
};
export default SearchProdutos;