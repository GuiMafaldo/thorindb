import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerGeral, FormList } from "./styles";
import { cadastrarCliente } from '../../api/api'; // Importa a função de cadastro

const CadastroDeClients = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        telefone: '',
        email: '',
        estado: '',
        cidade: '',
        bairro: '',
        logradouro: '',
        numero: '',
        cep: '',
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const resultado = await cadastrarCliente(formData);
        if (resultado) {
            alert("Cliente cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar cliente");
        }
    };

    return (
        <ContainerGeral>
            <FormList>
                <div className='title-and-back'>
                    <h3>Cadastro de Clientes</h3>
                    <Link className='link-back' to="/initialpage">Voltar ao menu</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome-client">Nome:</label>
                        <input type="text" name="nome" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="sobrenome-client">Sobrenome:</label>
                        <input type="text" name="sobrenome" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="tel-client">Tel:</label>
                        <input className='num-class-tel' type="text" name="telefone" placeholder='(11) xxxx-xxxx' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email-client">Email:</label>
                        <input type="email" name="email" onChange={handleChange} placeholder='email@email.com' />
                    </div>

                    {/* Area de endereço */}

                    <div>
                        <h3>Endereço</h3>
                        <div className='client-state'>
                            <div>
                                <label htmlFor="end-client">Estado:</label>
                                <input 
                                    className='state' 
                                    type="text" 
                                    name="estado" 
                                    onChange={handleChange} 
                                    placeholder='Insira o Estado' 
                                />
                            </div>
                            <div>
                                <label htmlFor="city-client">Cidade:</label>
                                <input 
                                    className='city' 
                                    type="text" 
                                    name="cidade"  
                                    onChange={handleChange}
                                    placeholder='Insira a cidade'
                                />
                            </div>
                        </div>
                        <div className='client-home'>
                            <div className='label-city'>
                                <label htmlFor="city-client">Logradouro:</label>
                                <input 
                                    className='rua' 
                                    type="text" 
                                    name="rua" 
                                    onChange={handleChange} 
                                    placeholder='Insira o logradouro'
                                />
                            </div>
                            <div className='label-num'>
                                <label htmlFor="num-client">Num:</label>
                                <input 
                                    className='num' 
                                    type="number" 
                                    name="numero" 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>
                        <div className='client-bairro'>
                            <div>
                                <label htmlFor="bairro-client">Bairro:</label>
                                <input 
                                    className='bairro'
                                    type="text" 
                                    name="bairro"
                                    onChange={handleChange}
                                    placeholder='Insira o bairro '
                                />
                            </div>
                            <div>
                                <label htmlFor="cep-client">Cep:</label>
                                <input 
                                    className='cep' 
                                    type="text"
                                     name="cep" 
                                     placeholder='00000-000' 
                                     onChange={handleChange} 
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </FormList>
        </ContainerGeral>
    );
}

export default CadastroDeClients;
