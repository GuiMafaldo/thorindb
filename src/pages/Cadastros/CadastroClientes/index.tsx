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
        <div className='client-name'>
            <Label className='name'>Nome:</Label>
            <Input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            required
            />

            <Label className='name-secondary'>Sobrenome:</Label>
            <Input
            type="text"
            name="sobrenome"
            value={cliente.sobrenome}
            onChange={handleChange}
            />
        </div>

        <div className='email-and-tel'>
            <Label className='tel'>Telefone:</Label>
            <Input
                className='tel-input'
                type="number"
                name="telefone"
                value={cliente.telefone}
                onChange={handleChange}
            />

            <Label className='email'>Email:</Label>
            <Input
                className='email-input'
                type="email"
                name="email"
                value={cliente.email}
                onChange={handleChange}
            />
        </div>

        <div className='rua-and-num'>
            <Label className='logradouro'>Logradouro:</Label>
            <Input
                className='rua-input'
                type="text"
                name="logradouro"
                value={cliente.logradouro}
                onChange={handleChange}
            />

            <Label className='num'>Num:</Label>
            <Input
                className='num-input'
                type="number"
                name="numero"
                value={cliente.email}
                onChange={handleChange}
            />
        </div>


        <div className='cidade-and-estado'>
            <Label  className='city'>Cidade:</Label>
            <Input
                className='city-input'
                type="text"
                name="cidade"
                value={cliente.cidade}
                onChange={handleChange}
            />

            <Label className='state'>Estado:</Label>
            <Input
                className='state-input'
                type="text"
                name="estado"
                value={cliente.estado}
                onChange={handleChange}
            />
        </div>

        <div className='bairro-and-cep'>
            <Label className='bairro'>Bairro:</Label>
            <Input
                className='bairro-input'
                type="text"
                name="bairro"
                value={cliente.bairro}
                onChange={handleChange}
            />
            <Label className='cep'>Cep:</Label>
            <Input
                className='cep-input'
                type="number"
                name="cep"
                value={cliente.cep}
                onChange={handleChange}
            />
        </div>

        <ButtonGroup>
          <Button type="submit">Gravar Dados</Button>
          <a href='/initialpage'>Voltar </a>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default CadastroClientes;
