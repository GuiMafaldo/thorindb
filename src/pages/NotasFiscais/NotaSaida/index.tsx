import { useState } from "react";
import { 
  DanfeContainer, 
  Header, 
  CompanyInfo, 
  NfeInfo, 
  NaturezaOperacao, 
  TableContainer, 
  Table, 
  CaculoImposto, 
  FormField, 
  Label, 
  Input, 
  Button, 
  ButtonBackMenu
} from "./styles";
import { Link } from "react-router-dom";

const EmissaoNotaFiscal = () => {
  // Estados para armazenar os dados manuais
  const [cliente, setCliente] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [itens, setItens] = useState<any[]>([]);
  const [descricao, setDescricao] = useState<string>('');
  const [quantidade, setQuantidade] = useState<number>(1);
  const [valorUnitario, setValorUnitario] = useState<number>(0);
  const [valorTotal, setValorTotal] = useState<number>(0);

  const handleNf = () => {
    if (descricao && quantidade > 0 && valorUnitario > 0) {
      const novoItem = { descricao, quantidade, valorUnitario };
      const novosItens = [...itens, novoItem];
      setItens(novosItens);
      setDescricao('');
      setQuantidade(1);
      setValorUnitario(0);
      calcularValorTotal(novosItens);
    } else {
      alert('Preencha todos os campos do item.');
    }
  };

  const calcularValorTotal = (itens: any[]) => {
    const total = itens.reduce((acc, item) => acc + (item.quantidade * item.valorUnitario), 0);
    setValorTotal(total);
  };

  return (
    <ButtonBackMenu>
        <DanfeContainer>
        {/* Cabeçalho com informações estáticas da empresa */}
        <Header>
          <CompanyInfo>
            <h3>TECNOSPEED & TECNOLOGIA</h3>
            <p>RUA DO POVO, 123</p>
            <p>CNPJ: 08.137.668/0001-60</p>
            <p>UF: PR</p>
          </CompanyInfo>
          <NfeInfo>
            <p>NF-e: 005.548.164</p>
            <p>SÉRIE: 500</p>
            <p>EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO</p>
          </NfeInfo>
        </Header>

        {/* Operação fixa */}
        <NaturezaOperacao>
          VENDA DE MERCADORIA ADQ. DE TERCEIRO - PF E PJ NÃO CON
        </NaturezaOperacao>

        {/* Campos manuais para o cliente */}
        <FormField>
          <Label>Nome do Cliente:</Label>
          <Input 
            type="text" 
            value={cliente} 
            onChange={(e) => setCliente(e.target.value)} 
            placeholder="Nome do Cliente" 
          />
        </FormField>

        <FormField>
          <Label>Endereço:</Label>
          <Input 
            type="text" 
            value={endereco} 
            onChange={(e) => setEndereco(e.target.value)} 
            placeholder="Endereço" 
          />
        </FormField>

        {/* Adição de itens */}
        <FormField>
          <Label>Descrição do Produto:</Label>
          <Input 
            type="text" 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)} 
            placeholder="Descrição do Produto" 
          />
        </FormField>

        <FormField>
          <Label>Quantidade:</Label>
          <Input 
            type="number" 
            value={quantidade} 
            onChange={(e) => setQuantidade(Number(e.target.value))} 
            placeholder="Quantidade" 
          />
        </FormField>

        <FormField>
          <Label>Valor Unitário:</Label>
          <Input 
            type="number" 
            value={valorUnitario} 
            onChange={(e) => setValorUnitario(Number(e.target.value))} 
            placeholder="Valor Unitário" 
          />
        </FormField>
        
        {/* tabela com calculo de valor total */}
        
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Valor Total</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item, index) => (
                <tr key={index}>
                  <td>{item.descricao}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.valorUnitario.toFixed(2)}</td>
                  <td>{(item.quantidade * item.valorUnitario).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}>Total</td>
                <td>{valorTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>

        <Button onClick={handleNf}>Adicionar Item</Button>

        {/* Cálculo de imposto (dados fictícios) */}
        <CaculoImposto>
          <p>Cálculo de Imposto: Base de Cálculo: 0.01</p>
          <p>Valor Total: {valorTotal.toFixed(2)}</p>
        </CaculoImposto>

        {/* Botão final para emitir a nota */}
        <Button onClick={() => alert('Nota Fiscal Emitida!')}>Emitir Nota Fiscal</Button>
      </DanfeContainer>
      <button>
          <Link className="backMenu" to="/initialpage">Voltar</Link>
      </button>
    </ButtonBackMenu>
  );
};

export default EmissaoNotaFiscal;
