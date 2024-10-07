import React, { useState } from 'react';
import { Container, Title, SectionTitle, Input, Table, Button } from './styles';

const NotaFiscal = () => {
  const [vendedor, setVendedor] = useState({
    razaoSocial: '',
    cnpj: '',
    endereco: '',
    cidade: '',
    estado: '',
    telefone: ''
  });

  const [produtos, setProdutos] = useState<String | any>([
    { codigo: '', descricao: '', quantidade: '', valorUnitario: '' }
  ]);

  const handleVendedorChange = (e: any) => {
    const { name, value } = e.target;
    setVendedor((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProdutoChange = (index: any, e: any) => {
    const { name, value } = e.target;
    const updatedProdutos = [...produtos];
    updatedProdutos[index][name] = value;
    setProdutos(updatedProdutos);
  };

  const addProduto = () => {
    setProdutos([...produtos, { codigo: '', descricao: '', quantidade: '', valorUnitario: '' }]);
  };

  const removeProduto = (index: any) => {
    const updatedProdutos = produtos.filter((_: any, i: any) => i !== index);
    setProdutos(updatedProdutos);
  };

  const calcularTotal = () => {
    return produtos.reduce((total: any, produto: any) => {
      const valor = parseFloat(produto.valorUnitario) || 0;
      const quantidade = parseInt(produto.quantidade, 10) || 0;
      return total + valor * quantidade;
    }, 0);
  };

  return (
    <Container>
      <Title>Nota Fiscal de Entrada</Title>

      {/* Dados da Empresa Vendedora */}
      <SectionTitle>Dados da Empresa Vendedora:</SectionTitle>
      <Input
        type="text"
        name="razaoSocial"
        placeholder="Razão Social"
        value={vendedor.razaoSocial}
        onChange={handleVendedorChange}
      />
      <Input
        type="text"
        name="cnpj"
        placeholder="CNPJ"
        value={vendedor.cnpj}
        onChange={handleVendedorChange}
      />
      <Input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={vendedor.endereco}
        onChange={handleVendedorChange}
      />
      <Input
        type="text"
        name="cidade"
        placeholder="Cidade"
        value={vendedor.cidade}
        onChange={handleVendedorChange}
      />
      <Input
        type="text"
        name="estado"
        placeholder="Estado"
        value={vendedor.estado}
        onChange={handleVendedorChange}
      />
      <Input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={vendedor.telefone}
        onChange={handleVendedorChange}
      />

      {/* Produtos */}
      <SectionTitle>Detalhes da Mercadoria:</SectionTitle>
      <Table>
        <thead>
          <tr>
            <th>Código do Produto</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário (R$)</th>
            <th>Valor Total (R$)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto: any, index: any) => (
            <tr key={index}>
              <td>
                <Input
                  type="text"
                  name="codigo"
                  placeholder="Código"
                  value={produto.codigo}
                  onChange={(e) => handleProdutoChange(index, e)}
                />
              </td>
              <td>
                <Input
                  type="text"
                  name="descricao"
                  placeholder="Descrição"
                  value={produto.descricao}
                  onChange={(e) => handleProdutoChange(index, e)}
                />
              </td>
              <td>
                <Input
                  type="number"
                  name="quantidade"
                  placeholder="Quantidade"
                  value={produto.quantidade}
                  onChange={(e) => handleProdutoChange(index, e)}
                />
              </td>
              <td>
                <Input
                  type="number"
                  step="0.01"
                  name="valorUnitario"
                  placeholder="Valor Unitário"
                  value={produto.valorUnitario}
                  onChange={(e) => handleProdutoChange(index, e)}
                />
              </td>
              <td>
                {(produto.quantidade * produto.valorUnitario).toFixed(2)}
              </td>
              <td>
                <Button onClick={() => removeProduto(index)}>Remover</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={addProduto}>Adicionar Produto</Button>

      {/* Total */}
      <SectionTitle>Total Geral: R$ {calcularTotal().toFixed(2)}</SectionTitle>
    </Container>
  );
};

export default NotaFiscal;
