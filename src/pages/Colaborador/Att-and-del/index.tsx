import { useState } from "react";

import { ContainerContent, TableWrapper, TableHead, TableRow, TableHeader, TableData } from "../../Produtos/Consulta/styles";
import { useColaboradorArea } from "../../../utils/funcoes/handleColaborador";

import Edit from '../../../assets/image/edit.png'
import Save from '../../../assets/image/save.png'
import Delete from '../../../assets/image/delete.png'


const DeleteOrRedenColaborador = () => {
  const [update, setUpdate] = useState(false)

  const handleClick = () => setUpdate(!update)

 const openEdit = () => void(null)
 const closeEdit = () => void(null)
 const deleteUser = () => void(null)
    
  const {
        searchTerm,
        error,
        isLoading,
        filteredColaborador,
        handleChangeColaborador
    } = useColaboradorArea()

        return (
            <ContainerContent style={{marginTop: "120px",marginLeft: -10 ,maxHeight: "76vh", width: "87vw"}}>
                <TableWrapper style={{width: "80%"}}>
                    <h1>Lista de Colaboradores</h1>
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
                        <TableHead >
                            <TableRow style={{position: "relative"}}>
                              <TableHeader>ID</TableHeader>
                              <TableHeader>Nome</TableHeader>
                              <TableHeader>Email</TableHeader>
                              <TableHeader>Telefone</TableHeader>
                              <TableHeader>Username</TableHeader>
                              <TableHeader>Password</TableHeader>
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
                    <a href="/dashboard">Voltar</a>
                    <button onClick={openEdit}
                                        style={{
                                          width: "25px", 
                                          height:"25px", 
                                          position: "absolute", 
                                          top: "380px", 
                                          right: "160px", 
                                          display: "flex", 
                                          alignItems: "center", 
                                          justifyContent: "center", 
                                          padding: "8px",
                                          backgroundColor: "#6eeb83",
                                          border: "none", 
                                          borderRadius: "6px",
                                          cursor: "pointer"
                                      }}>
                                      <img style={{width: "22px", height: "22px"}} src={Edit} alt="logo edit" />
                                    </button>
                                    <button onClick={closeEdit}
                                      style={{
                                        width: "25px", 
                                        height:"25px", 
                                        position: "absolute", 
                                        top: "380px", 
                                        right: "130px", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        padding: "8px",
                                        backgroundColor: "#00a8e8",
                                        border: "none", 
                                        borderRadius: "6px",
                                        cursor: "pointer"
                                    }}>
                                      <img style={{width: "22px", height: "22px"}} src={Save} alt="logo save" />
                                    </button>
                                    <button onClick={deleteUser}
                                      style={{
                                        width: "25px", 
                                        height:"25px", 
                                        position: "absolute", 
                                        top: "380px", 
                                        right: "100px", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        padding: "4px",
                                        backgroundColor: "red",
                                        border: "none", 
                                        borderRadius: "6px",
                                        cursor: "pointer"
                                    }}>
                                      <img style={{width: "22px", height: "22px", marginLeft: "-2px"}} src={Delete} alt="logo delete" />
                                    </button>
                      
                  </TableWrapper>
            </ContainerContent>
        );
      };

export default DeleteOrRedenColaborador

