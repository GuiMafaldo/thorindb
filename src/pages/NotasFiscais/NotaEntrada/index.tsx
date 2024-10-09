import React, { useEffect, useState } from 'react';

import Layout from '../../../Layout';
import { handleProdutos } from '../../../api/api';
import { Produto } from "../../../utils/products";

import { Table, Button, Header, Footer, Th, Td, Container } from './styles';


const NotaFiscal: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredResults, setFilteredResults] = useState<Produto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const [linhaFocada, setLinhaFocada] = useState<number | null>(null); // Estado para linha focada

  const linhasVazias = 20; // Define a quantidade de linhas que deseja exibir

  // Função para adicionar um novo produto (linha)
  const addProduto = () => {
    setProdutos([...produtos, { id: 0, nome: '', descricao: '', quantidade: 0, preco: 0 }]);  
  };

  // Função para remover um produto
  const removeProduto = (index: number) => {
    const updatedProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(updatedProdutos);
    setLinhaFocada(null); // Limpa a linha focada após a remoção
  };

  // Função para lidar com a mudança no campo de código do produto
  const handleCodigoChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    const produtoEncontrado = produtos.find(prod => prod.id === id);

    const updatedProdutos = [...produtos];

    if (produtoEncontrado) {
      // Preenche os campos se o produto for encontrado
      updatedProdutos[index] = {
        id: produtoEncontrado.id,
        nome:produtoEncontrado.nome,
        descricao: produtoEncontrado.descricao,
        quantidade: produtoEncontrado.quantidade,
        preco: produtoEncontrado.preco,
      };
    } else {
      // Se não encontrar, reseta os campos
      updatedProdutos[index] = {
        id: 0,
        nome: '',
        descricao: '',
        quantidade: 0,
        preco: 0,
      };
    }

    setProdutos(updatedProdutos);
  };

  // Função para calcular o valor total
  const calcularTotal = () => {
    return produtos.reduce((total, produto: any) => {
      const valor = parseFloat(produto.preco) || 0;
      const quantidade = parseInt(produto.quantidade, 10) || 0;
      return total + valor * quantidade;
    }, 0);
  };

  const handleProductsData = async () =>{
    setIsLoading(true)
    setError(null)
    try{
      const res = await handleProdutos(searchTerm)
      setProdutos(res)
      setFilteredResults(res)
    } catch(err){
      setError('Erro ao buscar dados')
    } finally{
      setIsLoading(false)
    }
  }
    // Chamar a função para buscar produtos ao montar o componente
    useEffect(() => {
      handleProductsData();
    }, []);
  
    // UseEffect para filtrar os resultados com base no termo de busca
    useEffect(() => {
      if (searchTerm) {
        const filtered = produtos.filter((produto) =>
          produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Aplica o filtro pelo nome do produto
        );
        setFilteredResults(filtered);
      } else {
        setFilteredResults(produtos); // Se o termo de busca estiver vazio, mostra todos os produtos
      }
    }, [searchTerm, produtos]);

  return (
    <Layout>
      <Container>
      <Header>
        <h1 style={{fontFamily:'Helvetica', fontSize: '2em'}}>Nota Fiscal mercadorias</h1>
      </Header>
      <Table>
        <thead>
          <tr>
            <Th>Código</Th>
            <Th>Descrição</Th>
            <Th>Quantidade</Th>
            <Th>Valor Unitário</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index}>
              <Td>
                <input
                  type="text"
                  name="id"
                  value={produto.id}
                  onFocus={() => setLinhaFocada(index)} // Foca na linha
                  onBlur={() => setLinhaFocada(null)} // Remove o foco ao sair
                  onChange={(e) => handleCodigoChange(index, e)}
                />
              </Td>
              <Td>{produto.nome}</Td>
              <Td>{produto.descricao}</Td>
              <Td>{produto.quantidade}</Td>
              <Td>{produto.preco}</Td>
              <Td>
                {linhaFocada === index && (
                  <>
                    <button onClick={() => removeProduto(index)}>Remover</button>
                    <button onClick={addProduto}>Adicionar</button>
                  </>
                )}
              </Td>
            </tr>
          ))}
          {/* Adiciona linhas vazias, se necessário */}
          {Array.from({ length: linhasVazias - produtos.length }).map((_, index) => (
            <tr key={produtos.length + index}>
              <Td>
                <input
                  style={{ border: 'none' }}
                  type="text"
                  name="id"
                  placeholder="Código"
                  onFocus={() => setLinhaFocada(produtos.length + index)} // Foca na linha
                  onBlur={() => setLinhaFocada(null)} // Remove o foco ao sair
                  onChange={(e) => handleCodigoChange(produtos.length + index, e)}
                />
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>
                {linhaFocada === produtos.length + index && (
                  <>
                    <Button onClick={() => removeProduto(produtos.length + index)}>Remover</Button>
                    <Button onClick={addProduto}>Adicionar</Button>
                  </>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer>
        <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
          <p>Total: {calcularTotal()}</p>
          <Button>Guardar Nota fiscal</Button>

        </div>
      </Footer>
      </Container>
    </Layout>
  );
};

export default NotaFiscal;
