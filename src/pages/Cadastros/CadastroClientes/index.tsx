import React, { useState } from 'react';
import { FormContainer, Title, Form, Label, Input, ButtonGroup, Button } from './styles';

const CadastroClientes = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    endereco: '',
    sobrenome: '',
    telefone: '',
    email: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Dados do cliente:', cliente);
  };

  return (
    <FormContainer>
      <Title>Cadastro de Cliente</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Nome:</Label>
        <Input
          type="text"
          name="nome"
          value={cliente.nome}
          onChange={handleChange}
          required
        />

        <Label>Sobrenome:</Label>
        <Input
          type="text"
          name="sobrenome"
          value={cliente.sobrenome}
          onChange={handleChange}
        />

        <Label>Telefone:</Label>
        <Input
          type="number"
          name="telefone"
          value={cliente.telefone}
          onChange={handleChange}
        />

        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={cliente.email}
          onChange={handleChange}
        />

        <Label>Logradouro:</Label>
        <Input
          type="text"
          name="logradouro"
          value={cliente.logradouro}
          onChange={handleChange}
        />

        <Label>Num:</Label>
        <Input
          type="number"
          name="numero"
          value={cliente.email}
          onChange={handleChange}
        />

        <Label>Bairro:</Label>
        <Input
          type="text"
          name="bairro"
          value={cliente.bairro}
          onChange={handleChange}
        />

        <Label>Cidade:</Label>
        <Input
          type="text"
          name="cidade"
          value={cliente.cidade}
          onChange={handleChange}
        />

        <Label>Estado:</Label>
        <Input
          type="text"
          name="estado"
          value={cliente.estado}
          onChange={handleChange}
        />

        <Label>Cep:</Label>
        <Input
          type="number"
          name="cep"
          value={cliente.cep}
          onChange={handleChange}
        />

        <ButtonGroup>
          <Button type="submit">Gravar Dados</Button>
          {/* <Button type="button" onClick={() => setCliente({})}>Fechar</Button> */}
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default CadastroClientes;
