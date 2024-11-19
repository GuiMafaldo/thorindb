import { useState, useEffect } from 'react'
import { TableWrapper, TableHead, TableRow, TableHeader, TableData } from '../../Produtos/Consulta/styles'
import { Fornecedor } from '../../../utils/Interfaces/fornecedor'
import { handleAllFornecedores } from '../../../services/api/api'
import Layout from '../../../Layout'


const SearchFornecedores = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [error, setError] = useState<string | any>(null)
    const [filter, setFilter] = useState<Fornecedor[]>([])
    const [fornecedores, setFornecedor] = useState<Fornecedor[]>([])

    // função pra buscar a lista de fornecedores na API
    const handleFornecedor = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await handleAllFornecedores(searchTerm)
            setFornecedor(response)
            setFilter(response)
        } catch(error) {
            setError("Erro ao buscar os Fornecedores")
        } finally {
            setIsLoading(false)
        }
    }
    // chama funçao pra buscar os fornecedores ao montar o componente
    useEffect(() => {
        handleFornecedor()
    }, [])

    useEffect(() => {
        if(searchTerm) {
            const filtered = fornecedores.filter((fornecedor) =>
            fornecedor.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilter(filtered)
        } else {
            setFilter(fornecedores)
        }
    }, [searchTerm, fornecedores])
    return(
        <Layout>
            <section>
                <TableWrapper>
                    <h1>Pesquisar Fornecedores</h1>
                    <div>
                        <input
                        type="text"
                        placeholder="Digite o nome do Desejado"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
                        />
                        <button onClick={handleFornecedor}>Buscar</button>
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
                            <TableHeader>Telefone</TableHeader>
                            <TableHeader>Email</TableHeader>
                            <TableHeader>Cidade</TableHeader>
                            <TableHeader>Cep</TableHeader>
                            </TableRow>
                        </TableHead>
                            <tbody>
                                {filter.length > 0 ? (
                                filter.map((fornecedor) => (
                                    <TableRow key={fornecedor.id}>
                                    <TableData>{fornecedor.id}</TableData>
                                    <TableData>{fornecedor.name}</TableData>
                                    <TableData>{fornecedor.telefone}</TableData>
                                    <TableData>{fornecedor.email}</TableData>
                                    <TableData>{fornecedor.cidade}</TableData>
                                    <TableData>{fornecedor.numero}</TableData>
                                    
                                    </TableRow>
                                ))
                                ) : (
                                <TableRow>
                                    <TableData colSpan={9}>Nenhum fornecedor encontrado</TableData>
                                </TableRow>
                                )}
                            </tbody>
                    </table>
                )}
                <a style={{backgroundColor: "#000", width:"80px", color:"#fff", 
                        padding:"8px", display:"flex", fontFamily:"Helvetica", 
                        fontWeight:"bold", textDecoration:"none", borderRadius:"4px", justifyContent:"center"}} href="/initialpage">Voltar</a>
                </TableWrapper>
            </section>
        </Layout>       
    )
}
export default SearchFornecedores