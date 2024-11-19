import React, { useState } from 'react';

import { submitProduct } from '../../../services/api/api';

import { Button, Container, Form, FormGroup, Input, Label, Title } from './styles';

import { Produto } from '../../../utils/Interfaces/products';



const CadastrarProduto = () => {
      const [produto, setProduto] = useState<Produto>({
        nome: '',
        preco: 0,
        descricao: '',
        quantidade: 0,
        categoria: ''
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setProduto({
          ...produto,
          [e.target.name]: e.target.value
        })        
      };

      const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       const resultado = await submitProduct(produto);
       if (resultado) {
          alert("Produto cadastrado com sucesso!");
        } else {
          alert("Erro ao cadastrar produto")
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
                    required
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
                      required
                      />
                  </FormGroup>
                  <FormGroup>
                  <Label className='formato'>
                      Formato:
                  </Label>
                      <select name='formato' style={{ width: '100%', padding: '8px', marginBottom: '10px', marginLeft: '26px', marginTop: '4px' }}>
                          <option value="Simples ou com variação">Simples ou com variação</option>
                          <option value="Simples">Simples</option>
                          <option value="Com variação">Com variação</option>
                      </select>
                  </FormGroup>
                  <FormGroup>
                  <Label className='tipo'>
                      Tipo:
                  </Label>
                      <select name='tipo'  style={{ width: '100%', padding: '8px', marginBottom: '10px', marginLeft: '34px', marginTop: '4px' }}>
                          <option value="Produto">Produto</option>
                          <option value="Serviço">Serviço</option>
                      </select>
                  </FormGroup>
                  <FormGroup>
                  <Label className='condicao'>
                      Condição:
                  </Label>
                      <select name='condicao' style={{ width: '80%', padding: '8px', marginBottom: '10px', marginLeft: '42px', marginTop: '4px' }}>
                          <option value="Não Especificado">Não Especificado</option>
                          <option value="Novo">Novo</option>
                          <option value="Usado">Usado</option>
                      </select>
                  </FormGroup>
              </div>
              <FormGroup>
                <Label>
                  Descrição do Produto:
                  <input 
                    type='text' 
                    defaultValue={produto.descricao}
                    name='descricao' 
                    onChange={handleChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', height: '100px' }}
                    required
                  />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  Categoria:
                  <input 
                    style={{padding: "8px", marginTop:"16px"}} 
                    type="text" 
                    name='categoria' 
                    required
                  />           
                </Label>
              </FormGroup>
              <Button>
                Avançar
              </Button>
                <a style={{textDecoration:'none', 
                            marginTop:'10px', 
                            color:'#000', 
                            fontWeight: 'bold'}} 
                    href="/dashBoard">
                  Voltar
                </a>
            </Form>
          </Container>               
      );
    };
export default CadastrarProduto




