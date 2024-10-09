import { useState } from "react";

import {
  Card,
  CardContent,
  Grid,
  Row,
  FormGroup,
  Label,
  Select,
  Input,
  Button,
  Table,
  Textarea,
  ActionBar,
  HeaderContainer,
  StatusContainer,
  StatusText,
  Tab,
  TabList,
  TabsContainer,
  Title,
  Container,
  StyleTable,
  TotalRow,
} from "./styles"; // Certifique-se de que esses componentes estão definidos em seus estilos
import { PlusCircle, Settings, X } from "react-feather"; // Se você estiver usando o react-feather para ícones
import Layout from "../../../Layout";


const EmissaoNotaFiscal = () => {
  const [cliente, setCliente] = useState<String | any>("");
  const [endereco, setEndereco] = useState<String | any>("");
  const [itens, setItens] = useState<any>([]);
  const [newItem, setNewItem] = useState({ descricao: "", quantidade: 0, valorUnitario: 0 });
  const [valorTotal, setValorTotal] = useState(0);
  const [numero, setNumero] = useState<any>()

  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', label: 'Dados Gerais' },
    { id: 'items', label: 'Itens/Serviços' },
    { id: 'additional', label: 'Adicionais/Transporte' },
    { id: 'billing', label: 'Faturamento' },
  ]


  const handleAddItem = () => {
    if (newItem.descricao && newItem.quantidade > 0 && newItem.valorUnitario > 0) {
      const itemComId = { ...newItem, id: Date.now().toString() };
      setItens([...itens, itemComId]);
      setNewItem({ descricao: "", quantidade: 1, valorUnitario: 0 });
      calcularValorTotal([...itens, itemComId]);
    } else {
      alert("Preencha todos os campos do item.");
    }
  };

  const handleRemoveItem = (id: any) => {
    const itensAtualizados = itens.filter((item: any) => item.id !== id);
    setItens(itensAtualizados);
    calcularValorTotal(itensAtualizados);
  };

  const calcularValorTotal = (itens: any) => {
    const total = itens.reduce((acc: any, item: any) => acc + item.quantidade * item.valorUnitario, 0);
    setValorTotal(total);
  };

  return (
    <Layout>
        <Container>
            <HeaderContainer>
            <Title>Emissão de Nota Fiscal de venda de mercadoria</Title>
            <TabsContainer>
            <TabList>
                {tabs.map(tab => (
                  <Tab
                    key={tab.id}
                    active={activeTab === tab.id}
                    className={activeTab === tab.id ? 'active' : ''}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </Tab>
                ))}
              </TabList>
              <StatusContainer>
                <span>Movimentação:</span>
                <StatusText className="exit" color="#fca5a5">Saída</StatusText>
                <span>Emissão:</span>
                <StatusText className="condicao" color="#86efac">Própria</StatusText>
                <Settings size={16} cursor={"pointer"} />
              </StatusContainer>
            </TabsContainer>
          </HeaderContainer>

          <Card>
            <CardContent>
              <Grid>
                <Row>
                  <FormGroup>
                    <Label>Nome do Cliente:</Label>
                    <Input
                      style={{ width: '300px' }}
                      type="text"
                      value={cliente}
                      onChange={(e) => setCliente(e.target.value)}
                      placeholder="Nome do Cliente"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Endereço:</Label>
                    <Input
                      style={{ width: '300px' }}
                      type="text"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      placeholder="Endereço"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Numero:</Label>
                    <Input style={{ width:'80px'}}
                      type="text"
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      placeholder="Numero"
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label>Descrição do Produto:</Label>
                    <Input
                      style={{ width: '320px' }}
                      type="text"
                      value={newItem.descricao}
                      onChange={(e) => setNewItem({ ...newItem, descricao: e.target.value })}
                      placeholder="Descrição do Produto"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Quantidade:</Label>
                    <Input
                      style={{ width: '70px' }}
                      type="number"
                      value={newItem.quantidade}
                      onChange={(e) => setNewItem({ ...newItem, quantidade: Number(e.target.value) })}
                      placeholder="Quantidade"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Valor Unitário:</Label>
                    <Input
                      style={{ width: '70px' }}
                      type="number"
                      value={newItem.valorUnitario}
                      onChange={(e) => setNewItem({ ...newItem, valorUnitario: Number(e.target.value) })}
                      placeholder="Valor Unitário"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button onClick={handleAddItem}>
                      <PlusCircle size={16} /> Adicionar Item
                    </Button>
                  </FormGroup>
                </Row>
                <FormGroup>
                  <StyleTable>
                    <thead>
                      <tr>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor Unitário</th>
                        <th>Valor Total</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itens.map((item: any) => (
                        <tr key={item.id}>
                          <td>{item.descricao}</td>
                          <td>{item.quantidade}</td>
                          <td>{item.valorUnitario.toFixed(2)}</td>
                          <td>{(item.quantidade * item.valorUnitario).toFixed(2)}</td>
                          <td>
                            <Button onClick={() => handleRemoveItem(item.id)}>
                              <X size={16} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <TotalRow>
                        <td colSpan={3}>Total</td>
                        <td>{valorTotal.toFixed(2)}</td>
                        <td></td>
                      </TotalRow>
                    </tbody>
                  </StyleTable>
                </FormGroup>
                <FormGroup>
                  <Label>Observações / Mensagem:</Label>
                  <Textarea rows={4} placeholder="Digite suas observações aqui..." />
                </FormGroup>
              </Grid>
            </CardContent>
            <ActionBar>
              <Button>
                <PlusCircle size={16} /> Emitir Nota Fiscal
              </Button>
            </ActionBar>
          </Card>
        </Container>
    </Layout>
  );
};

export default EmissaoNotaFiscal;
