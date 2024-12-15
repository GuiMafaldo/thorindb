import { useColaboradorArea } from '../../../utils/funcoes/handleColaborador';

import { ContainerContent, TableData, TableHead, TableHeader, TableRow, TableWrapper } from "../../Produtos/Consulta/styles";


const HandleColaborador =  () => {
const {
  searchTerm,
  error,
  isLoading,
  filteredColaboradores,
  handleChangeColaborador
} = useColaboradorArea()

  return (
      <ContainerContent style={{marginTop: "120px",marginLeft: -10 ,maxHeight: "76vh", width: "87vw"}}>
          <TableWrapper>
              <div>
                  <input
                    type="text"
                    placeholder="Digite o nome do colaborador"
                    value={searchTerm}
                    onChange={handleChangeColaborador}
                  />
                  <button onClick={() => handleChangeColaborador({target:  { value: searchTerm }})}>Buscar</button>
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
                        <TableHeader>E-mail</TableHeader>
                        <TableHeader>Telefone</TableHeader>
                        <TableHeader>Username</TableHeader>
                      </TableRow>
                  </TableHead>
                  <tbody>
                    {isLoading ? (
                      <p>Carregando...</p>
                    ): (
                      <p>{error}</p>
                    )}
                      {filteredColaboradores.length > 0 ? (
                        filteredColaboradores.map((colaborador) => (
                          <TableRow key={colaborador.id}>
                            <TableData>{colaborador.id}</TableData>
                            <TableData>{colaborador.nome}</TableData>
                            <TableData>{colaborador.email}</TableData>
                            <TableData>{colaborador.telefone}</TableData>
                            <TableData>{colaborador.username}</TableData>
                            <TableData>Em breve</TableData>
                          </TableRow>
                      ))
                      ) : (
                      <TableRow>
                          <TableData colSpan={9}>Nenhum colaboradorencontrado</TableData>
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
export default HandleColaborador;
