import { Layout } from "lucide-react";
import { ContainerContent, TableWrapper, TableHead, TableRow, TableHeader, TableData } from "../../Produtos/Consulta/styles";
import { handleColaboradorWithId } from "../../../services/api/api";
import { useColaboradorArea } from "../../../utils/funcoes/handleColaborador";

const DeleteColaborador = () => {
    const {
        searchTerm,
        error,
        isLoading,
        filteredColaborador,

    } = useColaboradorArea()

        return (
          <Layout>
            <ContainerContent>
                <TableWrapper>
                    <h1>Consultar produtos</h1>
                    <div>
                        <input
                          type="text"
                          placeholder="Digite o nome do produto"
                        />
                        <button onClick={() => handleColaboradorWithId(searchTerm)}>Buscar</button>
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
                            {filteredColaborador.length > 0 ? (
                            filteredColaborador.map((index) => (
                                <TableRow key={index.id}>
                                  <TableData>{index.id}</TableData>
                                  <TableData>{index.nome}</TableData>
                                  <TableData> {index.email}</TableData>
                                  <TableData>{index.telefone}</TableData>
                                  <TableData>{index.username}</TableData>
                                  <TableData>{index.password}</TableData>
                                </TableRow>
                            ))
                            ) : (
                            <TableRow>
                                <TableData colSpan={9}>Nenhum colaborador encontrado</TableData>
                            </TableRow>
                            )}
                        </tbody>
                        </table>
                    )}
                    <a href="/dashBoard">Voltar</a>
                    </TableWrapper>
            </ContainerContent>
          </Layout>  
        );
      };

export default DeleteColaborador

