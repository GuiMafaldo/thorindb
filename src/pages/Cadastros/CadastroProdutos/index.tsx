import React, { useState } from 'react';

import { Button, Container, Form, FormGroup, Input, Label, Title } from './styles';
import { cadastrarProdutos } from '../../../api/api';


const CadastrarProduto = () => {
      const [nomeProduto, setNomeProduto] = useState('');
      const [id, setId] = useState('');
      const [precoVenda, setPrecoVenda] = useState('');
      const [unidade, setUnidade] = useState('');
      const [formato, setFormato] = useState('Simples ou com variação');
      const [tipo, setTipo] = useState('Produto');
      const [condicao, setCondicao] = useState('Não Especificado');
      const [descricao, setDescricao] = useState('');
      const [categoria, setCategoria] = useState('Sem categoria');

      const [cadProduto, setCadProduto] = useState({
        nome: '',
        preco: 0,
        descricao: '',
        quantidade: 0
      });
    
      const handleChange = (e: any) => {
        e.preventDefault();
        setCadProduto({
          ...cadProduto,
          [e.target.name]: e.target.value
        })
        console.log(cadProduto);
        // Aqui você pode fazer uma chamada à API para enviar o produto cadastrado
      };

      const handleSubmit = async(e: any) => {
        e.preventDefault();
       const resultado = await cadastrarProdutos(cadProduto);
       if (resultado) {
            alert("Produto cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar produto");
        }
      };
    
      return (
        <Container>
          <Title>Cadastro de Produtos</Title>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                Nome do Produto:
                <Input
                  type="text"
                  name='nome'
                  onChange={handleChange}
                  required
                  style={{ width: '120%', padding: '8px', marginBottom: '10px' }}
                />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label className='sku'>
                Código (id):
             </Label>
                <Input
                  type="number"
                  onChange={handleChange}
                  style={{ width: '80%', padding: '8px', marginBottom: '10px', marginLeft: '60px' }}
                />
            </FormGroup>
            <FormGroup>
              <Label className='precoVenda'>
                Preço de Venda:
              </Label>
                <Input
                  type="number"
                  name='preco'
                  onChange={handleChange}
                  style={{ width: '80%', padding: '8px', marginBottom: '10px', marginLeft: '20px' }}
                />
            </FormGroup>
            <div className='group-unit'>
                <FormGroup>
                <Label>
                    Quantidade:
                </Label>
                    <Input
                    type="text"
                    name='quantidade'
                    onChange={handleChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                </FormGroup>
                <FormGroup>
                <Label className='formato'>
                    Formato:
                </Label>
                    <select name='formato' value={formato} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', marginLeft: '26px', marginTop: '4px' }}>
                        <option value="Simples ou com variação">Simples ou com variação</option>
                        <option value="Simples">Simples</option>
                        <option value="Com variação">Com variação</option>
                    </select>
                </FormGroup>
                <FormGroup>
                <Label className='tipo'>
                    Tipo:
                </Label>
                    <select name='tipo' value={tipo} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px', marginLeft: '34px', marginTop: '4px' }}>
                        <option value="Produto">Produto</option>
                        <option value="Serviço">Serviço</option>
                    </select>
                </FormGroup>
                <FormGroup>
                <Label className='condicao'>
                    Condição:
                </Label>
                    <select name='condicao' value={condicao} onChange={handleChange} style={{ width: '80%', padding: '8px', marginBottom: '10px', marginLeft: '42px', marginTop: '4px' }}>
                        <option value="Não Especificado">Não Especificado</option>
                        <option value="Novo">Novo</option>
                        <option value="Usado">Usado</option>
                    </select>
                </FormGroup>
            </div>
            <FormGroup>
              <Label>
                Descrição do Produto:
                <textarea
                  name='descricao'
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px', marginBottom: '10px', height: '100px' }}
                />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>
                Categoria:
                <select name='categoria' value={categoria} onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px' }}>
                  <option value="Sem categoria">Sem categoria</option>
                  <option value="Categoria 1">Categoria 1</option>
                  <option value="Categoria 2">Categoria 2</option>
                </select>
              </Label>
            </FormGroup>
            <Button>
              Avançar
            </Button>
          <a style={{textDecoration:'none', marginTop:'10px', color:'#000', fontWeight: 'bold'}} href="/initialpage">Voltar</a>
          </Form>
        </Container>
      );
    };
export default CadastrarProduto




